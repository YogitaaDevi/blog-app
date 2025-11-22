import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use basePath in local development
  basePath: process.env.VERCEL ? undefined : "/blog",
  
  assetPrefix: process.env.NEXT_PUBLIC_BLOG_ASSET_PREFIX || 
               (process.env.VERCEL ? undefined : '/blog'),
};

export default nextConfig;