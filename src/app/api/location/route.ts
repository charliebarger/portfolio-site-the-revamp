const fallbackLocation = {
  city: "Montréal",
  region: "Québec",
  country: "Canada",
  latitude: 45.5019,
  longitude: -73.5673,
};

const parseCoordinate = (value: string | null) => {
  if (!value) return undefined;
  const coordinate = Number.parseFloat(value);
  return Number.isFinite(coordinate) ? coordinate : undefined;
};

export function GET(request: Request) {
  const latitude = parseCoordinate(request.headers.get("x-vercel-ip-latitude"));
  const longitude = parseCoordinate(request.headers.get("x-vercel-ip-longitude"));

  const location =
    latitude === undefined || longitude === undefined
      ? fallbackLocation
      : {
          city: decodeURIComponent(
            request.headers.get("x-vercel-ip-city") || "Your location",
          ),
          region: decodeURIComponent(
            request.headers.get("x-vercel-ip-country-region") || "",
          ),
          country: request.headers.get("x-vercel-ip-country") || "",
          latitude,
          longitude,
        };

  return Response.json(location, {
    headers: { "Cache-Control": "private, no-store" },
  });
}
