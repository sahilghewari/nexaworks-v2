import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://vitals.vercel-insights.com; connect-src 'self' https://vitals.vercel-insights.com https://www.google-analytics.com; img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; frame-src 'self' https://www.google.com https://www.youtube.com https://player.vimeo.com https://reports.nexaworks.tech https://analytics.nexaworks.tech https://resumind.nexaworks.tech; frame-ancestors 'none';",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

// Using 'any' here as a workaround for Next.js 16 type strictness 
// while keeping build-ignore flags active for existing tech debt.
const nextConfig: any = {
  pageExtensions: ["ts", "tsx", "md", "mdx", "js", "jsx"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withMDX(nextConfig as NextConfig);
