import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true }, // required for static export
  trailingSlash: true, // optional, recommended
  basePath: '/PortFolio', // replace with repo name for correct routing
  assetPrefix: '/PortFolio',
};

export default nextConfig;
