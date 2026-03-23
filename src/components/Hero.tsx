import Image from "next/image";
import Badge from "./Badge";
import CTAButtons from "./CTAButtons";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  return (
    <section className="relative pt-[68px] overflow-hidden">
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

      {/* ■ ヒーロー本体 — Figma座標基準で配置 */}
      <div className="relative max-w-[1264px] mx-auto px-6 lg:px-0">
        {/* PC: 相対配置レイアウト (min-height = ヒーロー領域 1099 - header 68 = 1031) */}
        <div className="relative lg:min-h-[750px] py-12 lg:py-0">
          {/* ── 左側コンテンツ（縦に並ぶ: テキスト → バッジ → CTA） ── */}
          <div className="text-center lg:text-left lg:absolute lg:left-0 lg:top-[66px] lg:w-[650px]">
            {/* ラベル */}
            <span className="inline-block text-[16px] lg:text-[20px] font-medium text-black/50 mb-3">
              採用支援 AI
            </span>
            {/* メイン見出し */}
            <h1 className="text-[32px] lg:text-[59px] font-black leading-[1.3] text-black mb-3">
              動画とチャットで
              <br />
              求職者の熱量を上げる。
            </h1>
            {/* サブ見出し */}
            <p className="text-[22px] lg:text-[35px] font-medium text-black mb-0">
              採用の機会損失をゼロに。
            </p>
          </div>

          {/* ── バッジ（テキストの下、CTAの上） ── */}
          <div className="flex justify-center lg:justify-start mt-8 lg:mt-0 lg:absolute lg:left-0 lg:top-[382px]">
            <Badge />
          </div>

          {/* ── CTAボタン（バッジの下、縦積み） ── */}
          <div className="mt-6 lg:mt-0 lg:absolute lg:left-0 lg:top-[598px]">
            <CTAButtons layout="col" />
          </div>

          {/* ── 右側: デバイスモックアップ画像 ── */}
          {/* Figma: x=780(コンテナ内452), y=332(header下264), w=963, h=484 */}
          {/* コンテナ右端(1264)を超えて配置されるため overflow-hidden は section に設定済み */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:left-[452px] lg:top-[264px] lg:w-[963px]">
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
        {/* Figma: y=901(header下833) / inner div min-h=750 → margin-top=83px */}
        <div className="mt-8 lg:mt-[83px] text-center">
          <p className="text-[13px] lg:text-[15px] text-text-light mb-5">
            2月にベータ版ローンチ後、現在10社以上の企業様でトライアル実施中
          </p>
          <div className="max-w-[1264px] mx-auto">
            {/* 上段: 6個（gap=32px, Figmaの間隔） */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-[32px] mb-[24px]">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[140px] lg:w-[184px] h-[56px] lg:h-[72px] bg-[#d9d9d9] rounded"
                />
              ))}
            </div>
            {/* 下段: 5個（中央寄せ） */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-[32px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[140px] lg:w-[184px] h-[56px] lg:h-[72px] bg-[#d9d9d9] rounded"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
