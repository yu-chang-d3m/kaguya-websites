import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "V-Talk | 採用支援AI - 動画とチャットで求職者の熱量を上げる",
  description:
    "V-Talkは動画と対話型AIエージェントで採用の機会損失をゼロにする採用支援AIです。AIアバター動画とRAG搭載チャットボットで、応募率と内定承諾率を最大化します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
