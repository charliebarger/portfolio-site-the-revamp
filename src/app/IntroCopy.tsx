"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const descriptions = [
  "Currently building research-driven digital products at Klein Buendel",
  "Building scalable design systems with Figma, React, and TypeScript",
  "Turning complex workflows into intuitive digital experiences",
  "Designing and engineering products from concept to production",
  "Bridging product design and frontend engineering",
];

const rotationDuration = 4_000;
const transitionDuration = 650;
const initialRotationDelay = 6_000;

export default function IntroCopy() {
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const [isInitialDescription, setIsInitialDescription] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let rotationTimer: ReturnType<typeof setTimeout>;
    let transitionTimer: ReturnType<typeof setTimeout>;

    const rotate = () => {
      setIsInitialDescription(false);
      setIsTransitioning(true);

      transitionTimer = setTimeout(() => {
        setDescriptionIndex((currentIndex) =>
          (currentIndex + 1) % descriptions.length,
        );
        setIsTransitioning(false);
        rotationTimer = setTimeout(rotate, rotationDuration);
      }, transitionDuration);
    };

    rotationTimer = setTimeout(rotate, initialRotationDelay);

    return () => {
      clearTimeout(rotationTimer);
      clearTimeout(transitionTimer);
    };
  }, []);

  const nextDescriptionIndex = (descriptionIndex + 1) % descriptions.length;

  return (
    <section className={styles.centerWrapper} aria-label="Introduction">
      <h2 className={styles.helloText}>Hello, I&apos;m Charlie</h2>
      <div className={styles.descriptionWindow} aria-live="polite">
        <div
          className={`${styles.descriptionTrack} ${
            isTransitioning ? styles.descriptionTrackMoving : ""
          } ${isInitialDescription ? styles.descriptionTrackInitial : ""}`}
        >
          <h3 className={styles.description}>
            {descriptions[descriptionIndex]}
          </h3>
          {isTransitioning && (
            <h3 className={styles.description}>
              {descriptions[nextDescriptionIndex]}
            </h3>
          )}
        </div>
      </div>
    </section>
  );
}
