import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75, 80, 85],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [new URL("https://nakshee.in/**")],
  },
};

export default nextConfig;
