import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/sorting-visualizer" : "",
  assetPrefix: isProd ? "/sorting-visualizer" : "",
};

export default nextConfig;
