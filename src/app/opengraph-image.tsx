import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const sealData = await readFile(
    join(process.cwd(), "public/images/seal.png"),
  );
  const sealSrc = `data:image/png;base64,${sealData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          background: "#ffffff",
          color: "#120315",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <img src={sealSrc} width={160} height={160} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.04em" }}
          >
            {site.name}
          </div>
          <div style={{ fontSize: 28, color: "#6b7280" }}>{site.footer}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
