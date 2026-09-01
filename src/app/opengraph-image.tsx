import { ImageResponse } from "next/og";

export const alt = "Charlie Barger — UI Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "88px",
        background: "#f0f4f8",
        color: "#102a43",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "22px",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: "-2px" }}>
          Charlie Barger
        </div>
        <div style={{ fontSize: 34, color: "#334e68" }}>UI Engineer</div>
        <div style={{ width: 96, height: 8, borderRadius: 999, background: "#23c8d2" }} />
      </div>

      <div
        style={{
          width: 260,
          height: 260,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 56,
          background: "#e0fcff",
          color: "#087f8c",
          fontSize: 112,
          fontWeight: 800,
          letterSpacing: "-8px",
        }}
      >
        CB
      </div>
    </div>,
    size,
  );
}
