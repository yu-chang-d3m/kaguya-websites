import Image from "next/image";
import Badge from "./Badge";
import CTAButtons from "./CTAButtons";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const logos = [
  { src: "empowerx.svg", alt: "EmpowerX" },
  { src: "proreach.svg", alt: "Proreach" },
  { src: "hitokuse.svg", alt: "ヒトクセ" },
  { src: "dairii.svg", alt: "dairii" },
  { src: "omochiii.svg", alt: "omochiii" },
  { src: "quuu.svg", alt: "quuu" },
  { src: "hrdoc.svg", alt: "HR doc." },
  { src: "d3m.svg", alt: "D3M" },
];

export default function Hero() {
  return (
    <section className="relative pt-[44px] lg:pt-[68px] overflow-hidden">
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
          {/* SP: デバイス画像（iPhone モックアップ — Figma: 299x611 at x=149） */}
          <div className="absolute right-[-60px] top-[45px] w-[280px] lg:hidden">
            <Image
              src={`${basePath}/images/hero-device-sp.png`}
              alt="V-Talk アプリ画面"
              width={598}
              height={1222}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* ── 左カラム: テキスト・バッジ・CTA（通常フローで重なり防止） ── */}
          <div className="relative text-left lg:max-w-[55%] pt-[21px] lg:pt-[66px]">
            {/* ラベル（SPでは非表示 — Figma SPに無い） */}
            <span className="hidden lg:inline-block text-[20px] font-medium text-black/50 mb-3">
              採用支援 AI
            </span>
            {/* メイン見出し — SP: 4行+白背景ハイライト / PC: 2行 */}
            <h1 className="text-[36px] lg:text-[59px] font-bold leading-[1.5] text-black mb-3 lg:max-w-none">
              {/* SP */}
              <span className="flex flex-col gap-[9px] lg:hidden">
                {["動画と", "チャットで", "求職者の", "熱量を上げる。"].map((line) => (
                  <span key={line} className="bg-white rounded-[6px] px-2 leading-[51px] w-fit">
                    {line}
                  </span>
                ))}
              </span>
              {/* PC */}
              <span className="hidden lg:inline">
                動画とチャットで
                <br />
                求職者の熱量を上げる。
              </span>
            </h1>
            {/* サブ見出し — SP: 白背景ハイライト */}
            <p className="text-[20px] lg:text-[35px] font-medium text-black mb-0">
              <span className="lg:hidden bg-white rounded-[6px] px-2 py-[4px]">
                採用の機会損失をゼロに。
              </span>
              <span className="hidden lg:inline">採用の機会損失をゼロに。</span>
            </p>

            {/* ── バッジ ── */}
            <div className="flex justify-start mt-[80px] lg:mt-8">
              <Badge />
            </div>

            {/* ── CTAボタン（縦積み） ── */}
            <div className="mt-8 lg:mt-10">
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
          <p className="text-[14px] lg:text-[16px] text-black/60 mb-4 leading-[1.5]">
            2月にベータ版ローンチ後、
            <br className="lg:hidden" />
            現在10社以上の企業様でトライアル実施中
          </p>
          <div className="inline-block bg-white rounded-[30px] px-[16px] py-[12px] mb-[24px]">
            <p className="text-[13px] lg:text-[16px] font-medium text-black leading-[1.5]">
              導入企業の例
            </p>
          </div>

          {/* SP: ロゴ ハニカムグリッド（3-3-2配置） */}
          <div className="lg:hidden flex flex-col items-center gap-3">
            {[logos.slice(0, 3), logos.slice(3, 6), logos.slice(6, 8)].map(
              (row, ri) => (
                <div key={ri} className="flex justify-center gap-3">
                  {row.map((logo) => (
                    <div
                      key={logo.alt}
                      className="w-[108px] h-[45px] bg-white rounded flex items-center justify-center p-1 flex-shrink-0"
                    >
                      <Image
                        src={`${basePath}/images/logos/${logo.src}`}
                        alt={logo.alt}
                        width={160}
                        height={56}
                        className="object-contain max-h-[36px]"
                      />
                    </div>
                  ))}
                </div>
              )
            )}
          </div>

          {/* PC: ロゴカルーセル */}
          <div
            className="hidden lg:block relative overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
              {[0, 1].map((set) => (
                <div key={set} className="flex gap-[32px] px-[16px]">
                  {logos.map((logo) => (
                    <div
                      key={`${set}-${logo.alt}`}
                      className="w-[184px] h-[72px] bg-white rounded flex items-center justify-center p-2 flex-shrink-0"
                    >
                      <Image
                        src={`${basePath}/images/logos/${logo.src}`}
                        alt={logo.alt}
                        width={160}
                        height={56}
                        className="object-contain max-h-[56px]"
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
