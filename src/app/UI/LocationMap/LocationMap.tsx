"use client";

import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import styles from "./locationMap.module.css";

interface VisitorLocation {
  city: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
}

const denver = {
  city: "Denver, Colorado",
  coordinates: [-104.9649, 39.7056] as [number, number],
};

const milesBetween = (
  [longitudeA, latitudeA]: [number, number],
  [longitudeB, latitudeB]: [number, number],
) => {
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
  const latitudeDelta = toRadians(latitudeB - latitudeA);
  const longitudeDelta = toRadians(longitudeB - longitudeA);
  const a =
    Math.sin(latitudeDelta / 2) ** 2 +
    Math.cos(toRadians(latitudeA)) *
      Math.cos(toRadians(latitudeB)) *
      Math.sin(longitudeDelta / 2) ** 2;

  return 3958.8 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

const LocationMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [visitor, setVisitor] = useState<VisitorLocation | null>(null);
  const [message, setMessage] = useState("Finding your approximate location…");

  useEffect(() => {
    const controller = new AbortController();

    const initializeMap = async () => {
      const response = await fetch("/api/location", {
        cache: "no-store",
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Unable to determine location");

      const location = (await response.json()) as VisitorLocation;
      setVisitor(location);

      const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
      if (!token || !containerRef.current) {
        setMessage("Add NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN to display the map.");
        return;
      }

      const visitorCoordinates: [number, number] = [
        location.longitude,
        location.latitude,
      ];
      const map = new mapboxgl.Map({
        accessToken: token,
        container: containerRef.current,
        style: "mapbox://styles/mapbox/dark-v11",
        attributionControl: false,
        interactive: false,
      });
      mapRef.current = map;

      const addConnection = () => {
        if (map.getSource("connection")) return;

        map.addSource("connection", {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: [visitorCoordinates, denver.coordinates],
            },
          },
        });
        map.addLayer({
          id: "connection",
          type: "line",
          source: "connection",
          layout: { "line-cap": "round", "line-join": "round" },
          paint: {
            "line-color": "#ff3b72",
            "line-width": 4,
            "line-dasharray": [0.6, 2.2],
          },
        });
      };

      map.on("style.load", addConnection);
      map.on("load", () => {
        new mapboxgl.Marker({ color: "#98a6b5" })
          .setLngLat(visitorCoordinates)
          .addTo(map);
        new mapboxgl.Marker({ color: "#ff3b72" })
          .setLngLat(denver.coordinates)
          .addTo(map);

        map.fitBounds(
          new mapboxgl.LngLatBounds(visitorCoordinates, visitorCoordinates).extend(
            denver.coordinates,
          ),
          { padding: 52, duration: 0 },
        );
        setMessage("");
      });

    };

    initializeMap().catch((error: unknown) => {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setMessage("The map is temporarily unavailable.");
    });

    return () => {
      controller.abort();
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  const distanceInMiles = visitor
    ? Math.round(
        milesBetween(
          [visitor.longitude, visitor.latitude],
          denver.coordinates,
        ),
      )
    : null;
  const distance = distanceInMiles?.toLocaleString() ?? null;
  const isFlorida = visitor
    ? ["fl", "florida"].includes(visitor.region.trim().toLowerCase())
    : false;
  const proximityMessage = isFlorida
    ? "Perfect! I’ve been looking for a reason to come home! 🏖️🏄🏻‍♂️🐚"
    : distanceInMiles !== null && distanceInMiles > 200
      ? "Good news, I’m only a plane ride away! ✈️"
      : "Look at that, you’re right around the corner! ⛰️";

  return (
    <div className={styles.card}>
      <div className={styles.mapFrame}>
        <div ref={containerRef} className={styles.map} aria-label="Map showing the distance between you and Denver" />
        {message && <p className={styles.mapMessage}>{message}</p>}
      </div>
      <div className={styles.copy} aria-live="polite">
        <p>
          I’m currently in <strong>{denver.city}</strong>
          {distance && (
            <>
              {" "}roughly <strong>{distance} miles</strong> away from your
              approximate location, according to your IP address.
            </>
          )}
        </p>
        <p>{proximityMessage}</p>
      </div>
    </div>
  );
};

export default LocationMap;
