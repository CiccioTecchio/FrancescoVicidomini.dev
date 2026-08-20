import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return ["cicciotecchio.dev", "www.cicciotecchio.dev"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://francescovicidomini.dev/:path*",
      permanent: true,
    }));
  },
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
