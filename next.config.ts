import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/en/services", destination: "/en/packages", permanent: true },
      { source: "/en/pricing",  destination: "/en/packages", permanent: true },
      { source: "/bm/services", destination: "/bm/packages", permanent: true },
      { source: "/bm/pricing",  destination: "/bm/packages", permanent: true },
      { source: "/zh/services", destination: "/zh/packages", permanent: true },
      { source: "/zh/pricing",  destination: "/zh/packages", permanent: true },
    ];
  },
};

export default nextConfig;
