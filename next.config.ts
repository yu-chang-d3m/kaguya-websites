import type { NextConfig } from "next";

// GitHub Pages: NEXT_PUBLIC_BASE_PATH="/kaguya-websites"
// Vercel / ローカル: 設定不要（ルートで配信）
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
