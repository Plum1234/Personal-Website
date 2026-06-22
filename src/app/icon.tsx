import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "#09090b",
          border: "2px solid #27272a",
          color: "#fafafa",
          fontSize: 14,
          fontWeight: 600,
          fontFamily: "ui-monospace, monospace",
          letterSpacing: "-0.05em",
        }}
      >
        jl
      </div>
    ),
    { ...size },
  );
}
