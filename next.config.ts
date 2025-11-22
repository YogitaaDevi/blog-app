import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/blog",
  
  // Asset prefix - enabled for testing in localhost
  // In production, you can override with NEXT_PUBLIC_BLOG_ASSET_PREFIX env var
  assetPrefix: process.env.NEXT_PUBLIC_BLOG_ASSET_PREFIX || '/blog',
};

export default nextConfig;
