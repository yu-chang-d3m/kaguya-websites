import Image from "next/image";
import Badge from "./Badge";
import CTAButtons from "./CTAButtons";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/* ─── スマホ内: V-Talk AI Concierge（ライトテーマ）─── */
function PhoneScreen() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden text-[7px] lg:text-[8px]">
      {/* ステータスバー（ライト） */}
      <div className="bg-white text-black flex items-center justify-between px-2 py-0.5 border-b border-gray-100">
        <span className="text-[6px] font-medium">9:41</span>
        <div className="flex gap-1 items-center">
          <svg width="8" height="6" viewBox="0 0 16 12" fill="black">
            <rect x="0" y="8" width="3" height="4" rx="0.5" />
            <rect x="4" y="5" width="3" height="7" rx="0.5" />
            <rect x="8" y="2" width="3" height="10" rx="0.5" />
            <rect x="12" y="0" width="3" height="12" rx="0.5" />
          </svg>
        </div>
      </div>
      {/* アプリヘッダー（ライトテーマ） */}
      <div className="bg-white px-2 py-1.5 flex items-center gap-1.5 border-b border-gray-100">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          stroke="#333"
          strokeWidth="1.5"
        >
          <path d="M5 1L1 5l4 4" />
        </svg>
        <div className="flex-1">
          <p className="text-[7px] lg:text-[8px] font-bold text-dark leading-tight">
            V-Talk AI Concierge
          </p>
        </div>
      </div>
      {/* チャットエリア */}
      <div className="flex-1 p-1.5 space-y-1.5 bg-[#f5f5f5] overflow-hidden">
        <div className="flex justify-start">
          <div className="bg-dark text-white rounded-[6px] rounded-tl-[1px] px-2 py-1 max-w-[82%] leading-[1.4]">
            ありがとうございます。まずは、社会人歴についてお聞かせください。
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-white text-dark rounded-[6px] rounded-tr-[1px] px-2 py-1 max-w-[82%] leading-[1.4] shadow-sm">
            ご質問ありがとうございます！ もちろんです。
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-dark text-white rounded-[6px] rounded-tl-[1px] px-2 py-1 max-w-[82%] leading-[1.4]">
            エンジニアプランの詳細を表示しますか？
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-white text-dark rounded-[6px] rounded-tr-[1px] px-2 py-1 max-w-[82%] leading-[1.4] shadow-sm">
            はい、お願いします
          </div>
        </div>
      </div>
      {/* 入力欄 */}
      <div className="bg-white border-t border-gray-200 px-2 py-1 flex items-center gap-1">
        <div className="flex-1 bg-gray-100 rounded-full px-2 py-0.5">
          <span className="text-gray-400 text-[6px]">メッセージを入力...</span>
        </div>
        <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
          <svg width="6" height="6" viewBox="0 0 24 24" fill="white" stroke="none">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── MacBook 内: KAGUYA サイト（ダークテーマ + ビデオ通話 UI）─── */
function LaptopScreen() {
  return (
    <div className="w-full h-full bg-[#0a0a0a] flex flex-col overflow-hidden">
      {/* ナビバー */}
      <div className="flex items-center justify-between px-3 py-1 border-b border-white/10">
        <span className="text-white font-bold text-[6px] lg:text-[7px] tracking-[0.15em]">
          KAGUYA
        </span>
        <div className="hidden lg:flex gap-2 text-white/50 text-[4px]">
          <span>Products</span>
          <span>Solutions</span>
          <span>News</span>
          <span>Company</span>
        </div>
      </div>
      {/* メインコンテンツ */}
      <div className="flex-1 relative overflow-hidden">
        {/* 背景（宇宙風ダークグラデーション） */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f1a2e] to-[#0a0a14]" />
        {/* 背景の星のような点 */}
        <div className="absolute top-[15%] left-[20%] w-[1px] h-[1px] bg-white/40 rounded-full" />
        <div className="absolute top-[30%] right-[30%] w-[1px] h-[1px] bg-white/30 rounded-full" />
        <div className="absolute bottom-[40%] left-[40%] w-[1px] h-[1px] bg-white/25 rounded-full" />

        <div className="relative z-10 flex h-full">
          {/* 左: テキストエリア */}
          <div className="flex-1 flex flex-col justify-center px-3 lg:px-5">
            <p className="text-white text-[5px] lg:text-[8px] font-bold leading-[1.8]">
              AIを活用して、
            </p>
            <p className="text-white text-[5px] lg:text-[8px] font-bold leading-[1.8]">
              もっと <span className="text-primary">人</span> と向き合える
            </p>
            <p className="text-white text-[5px] lg:text-[8px] font-bold leading-[1.8]">
              世界を創る。
            </p>
          </div>
          {/* 右: ビデオ通話風 UI（人物のプレースホルダー） */}
          <div className="w-[45%] flex flex-col items-center justify-center gap-1 pr-2">
            {/* メイン人物（大きめ） */}
            <div className="w-full aspect-[4/3] bg-[#1a2030] rounded-[3px] flex items-center justify-center relative overflow-hidden">
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#c9c9c9]" />
              {/* 小さいPIP */}
              <div className="absolute bottom-1 right-1 w-[30%] aspect-[4/3] bg-[#222e40] rounded-[2px] flex items-center justify-center">
                <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#b0b0b0]" />
              </div>
            </div>
            {/* コントロールバー */}
            <div className="flex gap-1 items-center">
              <div className="px-1.5 py-0.5 bg-primary rounded-full text-white text-[3px] lg:text-[4px] font-bold">
                応募する
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

      <div className="relative max-w-[1264px] mx-auto px-6 lg:px-0 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          {/* ■ 左側コンテンツ */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-[16px] lg:text-[20px] font-medium text-black/50 mb-3">
              採用支援 AI
            </span>
            <h1 className="text-[32px] lg:text-[59px] font-black leading-[1.3] lg:leading-[1.3] text-black mb-3">
              動画とチャットで
              <br />
              求職者の熱量を上げる。
            </h1>
            <p className="text-[22px] lg:text-[35px] font-medium text-black mb-8 lg:mb-10">
              採用の機会損失をゼロに。
            </p>

            {/* バッジ（左にオーバーラップ）+ CTAボタン（縦積み） */}
            <div className="relative flex flex-col items-center lg:items-start">
              {/* バッジ: ボタンブロックの左上に浮かせる */}
              <div className="lg:absolute lg:-left-[20px] lg:-top-[30px] z-10 mb-4 lg:mb-0">
                <Badge />
              </div>
              {/* CTAボタン（バッジ分左にパディング） */}
              <div className="lg:pl-[160px]">
                <CTAButtons />
              </div>
            </div>
          </div>

          {/* ■ 右側ビジュアル — iPhone(手前・左寄り) + MacBook(奥・右寄り) */}
          <div className="flex-1 relative min-h-[300px] lg:min-h-[440px]">
            {/* MacBook（奥・右寄り） */}
            <div className="absolute right-0 top-0 w-[260px] lg:w-[440px]">
              <div className="bg-[#c0c0c0] rounded-t-[8px] lg:rounded-t-[12px] p-[2px] lg:p-[3px] shadow-2xl">
                <div className="bg-[#e8e8e8] rounded-t-[6px] lg:rounded-t-[10px] overflow-hidden">
                  {/* ブラウザバー */}
                  <div className="bg-[#d8d8d8] h-[14px] lg:h-[20px] flex items-center px-1.5 lg:px-2 gap-[3px]">
                    <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] rounded-full bg-[#ff5f57]" />
                    <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] rounded-full bg-[#febc2e]" />
                    <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] rounded-full bg-[#28c840]" />
                  </div>
                  {/* 画面 */}
                  <div className="aspect-[16/10] w-full">
                    <LaptopScreen />
                  </div>
                </div>
              </div>
              {/* MacBook ベース */}
              <div className="w-[108%] -ml-[4%] h-[8px] lg:h-[12px] bg-[#c0c0c0] rounded-b-[4px] lg:rounded-b-[6px] relative shadow-md">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[18%] h-[3px] bg-[#aaa] rounded-b-[2px]" />
              </div>
            </div>

            {/* iPhone（手前・左寄り、MacBookの右下に被さる） */}
            <div className="absolute left-[10px] lg:left-[40px] bottom-[-10px] lg:bottom-[10px] z-10 w-[110px] lg:w-[170px] bg-[#1a1a1a] rounded-[14px] lg:rounded-[22px] shadow-2xl overflow-hidden border-[2.5px] lg:border-[3px] border-[#2a2a2a]">
              <div className="aspect-[9/19.5] w-full">
                {/* ダイナミックアイランド */}
                <div className="h-[4%] bg-[#1a1a1a] flex items-center justify-center">
                  <div className="w-[30%] h-[2.5px] bg-[#333] rounded-full" />
                </div>
                <div className="h-[96%]">
                  <PhoneScreen />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ■ トラスト / 導入実績セクション */}
        <div className="mt-14 lg:mt-16 text-center">
          <p className="text-[13px] lg:text-[15px] text-text-light mb-5">
            2月にベータ版ローンチ後、現在10社以上の企業様でトライアル実施中
          </p>
          <div className="max-w-[860px] mx-auto">
            {/* 上段: 6個 */}
            <div className="flex flex-wrap justify-center gap-3 mb-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[100px] lg:w-[120px] h-[40px] lg:h-[48px] bg-gray-200 rounded"
                />
              ))}
            </div>
            {/* 下段: 4個（中央寄せ） */}
            <div className="flex flex-wrap justify-center gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[100px] lg:w-[120px] h-[40px] lg:h-[48px] bg-gray-200 rounded"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
