import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/sorting-visualizer/",
  assetPrefix: "/sorting-visualizer/",
};

export default nextConfig;
