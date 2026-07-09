import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#faf7f2",
          color: "#1c1917",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 600, letterSpacing: -2 }}>{SITE_NAME}</div>
        <div style={{ fontSize: 32, color: "#b87333", marginTop: 20 }}>{SITE_TAGLINE}</div>
      </div>
    ),
    size,
  );
}
