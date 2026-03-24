import Image from "next/image";
import Badge from "./Badge";
import CTAButtons from "./CTAButtons";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
      <div className="relative max-w-[1264px] mx-auto px-4 lg:px-0">
        {/* ── メインヒーローエリア ── */}
        <div className="relative min-h-[710px] lg:min-h-[750px] py-0 lg:py-0">
          {/* SP: デバイス画像（テキストの右側背景として配置） */}
          <div className="absolute right-[-60px] top-[45px] w-[280px] lg:hidden">
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

          {/* ── 左側テキスト ── */}
          <div className="relative text-left lg:absolute lg:left-0 lg:top-[66px] lg:w-[650px] pt-[21px] lg:pt-0">
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
          </div>

          {/* ── バッジ ── */}
          <div className="relative flex justify-start mt-6 lg:mt-0 lg:absolute lg:left-0 lg:top-[382px]">
            <Badge />
          </div>

          {/* ── CTAボタン（縦積み） ── */}
          <div className="relative mt-6 lg:mt-0 lg:absolute lg:left-0 lg:top-[598px]">
            <CTAButtons layout="col" />
          </div>

          {/* PC: デバイスモックアップ画像 */}
          <div className="hidden lg:block lg:absolute lg:left-[452px] lg:top-[264px] lg:w-[963px]">
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

        {/* ■ トラスト / 導入実績セクション */}
        <div className="mt-6 lg:mt-[83px] text-center">
          <div className="inline-block bg-white rounded-[30px] px-[16px] py-[12px] mb-[24px]">
            <p className="text-[13px] lg:text-[16px] font-medium text-black leading-[1.5]">
              2月にベータ版ローンチ後、現在10社以上の企業様でトライアル実施中
            </p>
          </div>

          {/* PC: 6+5 の2段グリッド */}
          <div className="hidden lg:block max-w-[1264px] mx-auto">
            <div className="flex flex-wrap justify-center gap-[32px] mb-[24px]">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[184px] h-[72px] bg-[#d9d9d9] rounded"
                />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-[32px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[184px] h-[72px] bg-[#d9d9d9] rounded"
                />
              ))}
            </div>
          </div>

          {/* SP: 3列ハニカム配置（Figma準拠: 108x45px, 10個） */}
          <div className="lg:hidden max-w-[342px] mx-auto">
            {/* Row 1: 3個 */}
            <div className="flex justify-center gap-[9px] mb-[8px]">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="w-[108px] h-[45px] bg-[#d9d9d9] rounded" />
              ))}
            </div>
            {/* Row 2: 2個（オフセット） */}
            <div className="flex justify-center gap-[9px] mb-[8px]">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="w-[108px] h-[45px] bg-[#d9d9d9] rounded" />
              ))}
            </div>
            {/* Row 3: 3個 */}
            <div className="flex justify-center gap-[9px] mb-[8px]">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="w-[108px] h-[45px] bg-[#d9d9d9] rounded" />
              ))}
            </div>
            {/* Row 4: 2個（オフセット） */}
            <div className="flex justify-center gap-[9px]">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="w-[108px] h-[45px] bg-[#d9d9d9] rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
