import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Type checking runs explicitly via `npm run lint` in CI. Keeping it out of
  // the production bundling phase also avoids doing the same work twice.
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    useTypeScriptCli: false,
  },
};

export default nextConfig;
