import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 向けの静的エクスポート。`pnpm build` で `out/` 配下に HTML/CSS/JS を出力する。
  output: "export",
  images: {
    // 静的エクスポートでは next/image の最適化 API が使えないため無効化する。
    unoptimized: true,
  },
};

export default nextConfig;
