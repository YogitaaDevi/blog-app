import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Always use /blog as the base path
  basePath: "/blog",
  
  assetPrefix: process.env.NEXT_PUBLIC_BLOG_ASSET_PREFIX || '/blog',

  async redirects() {
    return [
      {
        source: "/",
        destination: "/blog",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;