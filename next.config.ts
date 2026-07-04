import type { NextConfig } from "next";

// Static export — every route is SSG. Deployed to GitHub Pages.
// BASE_PATH is set in CI for project-page hosting (/aisle-ix);
// empty locally and on a custom domain.
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH ?? "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
