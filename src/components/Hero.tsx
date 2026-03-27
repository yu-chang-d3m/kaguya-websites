import Image from "next/image";
import Badge from "./Badge";
import CTAButtons from "./CTAButtons";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const logos = [
  { src: "dairii.svg", alt: "dairii" },
  { src: "hrdoc.svg", alt: "HR doc." },
  { src: "omochiii.svg", alt: "omochiii" },
  { src: "quuu.svg", alt: "quuu" },
  { src: "d3m.svg", alt: "D3M" },
  { src: "hitokuse.svg", alt: "ヒトクセ" },
  { src: "proreach.svg", alt: "Proreach" },
];

export default function Hero() {
  return (
    <section className="relative pt-[44px] lg:pt-[68px]">
      {/* ■ 背景: 淡いグレーの音声波形（端にフェードアウト） */}
      <div
        className="absolute inset-0 h-[700px] lg:h-[1099px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        <Image
          src={`${basePath}/images/hero-wave.png`}
          alt=""
          fill
          className="object-cover"
          style={{ filter: "grayscale(100%)", opacity: 0.12 }}
          priority
        />
      </div>

      {/* ■ ヒーロー本体 */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── メインヒーローエリア ── */}
        <div className="relative min-h-[710px] lg:min-h-[750px]">
          {/* SP: デバイス画像（テキストの右側背景として配置） */}
          <div className="absolute right-[-36px] top-[45px] w-[280px] lg:hidden">
            <Image
              src={`${basePath}/images/hero-devices.png`}
              alt=""
              width={963}
              height={484}
              className="w-[700px] max-w-none h-auto"
              style={{ opacity: 0.2 }}
              priority
            />
          </div>

          {/* ── 左カラム: テキスト・バッジ・CTA（通常フローで重なり防止） ── */}
          <div className="relative text-left lg:max-w-[55%] pt-[21px] lg:pt-[66px]">
            {/* ラベル（SPでは非表示 — Figma SPに無い） */}
            <span className="hidden lg:inline-block text-[20px] font-medium text-black/50 mb-3">
              採用支援 AI
            </span>
            {/* メイン見出し */}
            <h1 className="text-[36px] lg:text-[59px] font-bold leading-[1.5] text-black mb-3 max-w-[280px] lg:max-w-none">
              動画とチャットで
              <br />
              求職者の熱量を上げる。
            </h1>
            {/* サブ見出し */}
            <p className="text-[20px] lg:text-[35px] font-medium text-black mb-0">
              採用の機会損失をゼロに。
            </p>

            {/* ── バッジ ── */}
            <div className="flex justify-start mt-6 lg:mt-8">
              <Badge />
            </div>

            {/* ── CTAボタン（縦積み） ── */}
            <div className="mt-6 lg:mt-10">
              <CTAButtons layout="col" />
            </div>
          </div>

          {/* PC: デバイスモックアップ画像 */}
          <div className="hidden lg:block lg:absolute lg:top-[200px] lg:left-[45%] lg:right-0">
            <Image
              src={`${basePath}/images/hero-devices.png`}
              alt="V-Talk デモ画面 — iPhone チャット画面と MacBook ダッシュボード"
              width={963}
              height={484}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* ■ トラスト / 導入企業セクション */}
        <div className="mt-6 lg:mt-[83px] text-center">
          <div className="inline-block bg-white rounded-[30px] px-[16px] py-[12px] mb-[24px]">
            <p className="text-[13px] lg:text-[16px] font-medium text-black leading-[1.5]">
              導入企業の例
            </p>
          </div>

          {/* ロゴカルーセル */}
          <div
            className="relative overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
              {/* 2セット並べて無限ループ */}
              {[0, 1].map((set) => (
                <div key={set} className="flex gap-[24px] lg:gap-[32px] px-[12px] lg:px-[16px]">
                  {logos.map((logo) => (
                    <div
                      key={`${set}-${logo.alt}`}
                      className="w-[108px] h-[45px] lg:w-[184px] lg:h-[72px] bg-white rounded flex items-center justify-center p-1 lg:p-2 flex-shrink-0"
                    >
                      <Image
                        src={`${basePath}/images/logos/${logo.src}`}
                        alt={logo.alt}
                        width={160}
                        height={56}
                        className="object-contain max-h-[36px] lg:max-h-[56px]"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
