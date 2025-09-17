import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/SamsterZero",       // 👈 repo name here
  assetPrefix: "/SamsterZero/",   // 👈 ensures CSS/JS load correctly
};

export default nextConfig;
