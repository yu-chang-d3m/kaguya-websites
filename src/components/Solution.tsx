import Image from "next/image";
import Logo from "./Logo";

/* チャットUI（中央カード用）- CSS で吹き出しを再現 */
function ChatMockup() {
  return (
    <div className="flex flex-col gap-2.5 w-full max-w-[320px] mx-auto px-4">
      <div className="flex justify-start">
        <div className="bg-dark text-white text-[11px] lg:text-[12px] rounded-[12px] rounded-tl-[2px] px-3 py-2 max-w-[75%] leading-[1.5]">
          はじめまして！何でも聞いてください
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-white text-dark text-[11px] lg:text-[12px] rounded-[12px] rounded-tr-[2px] px-3 py-2 max-w-[75%] leading-[1.5] shadow-sm">
          リモートワークはできますか？
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-dark text-white text-[11px] lg:text-[12px] rounded-[12px] rounded-tl-[2px] px-3 py-2 max-w-[75%] leading-[1.5]">
          はい、週2日までリモート可能です！
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-white text-dark text-[11px] lg:text-[12px] rounded-[12px] rounded-tr-[2px] px-3 py-2 max-w-[75%] leading-[1.5] shadow-sm">
          福利厚生について教えてください
        </div>
      </div>
    </div>
  );
}

/* 分析チャート（右カード用） */
function AnalyticsMockup() {
  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-[320px] mx-auto px-4">
      <div
        className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-full"
        style={{
          background: `conic-gradient(
            #00ac92 0% 40%,
            #009980 40% 65%,
            #1c2929 65% 85%,
            #e9ecec 85% 100%
          )`,
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-[11px] lg:text-[13px] font-bold">40%</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 text-[10px] lg:text-[11px] text-white/80">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-primary inline-block" />
          社風
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-primary-dark inline-block" />
          待遇
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-dark inline-block" />
          業務
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-gray-border inline-block" />
          その他
        </div>
      </div>
    </div>
  );
}

export default function Solution() {
  return (
    <section className="bg-primary pt-12 lg:pt-20 pb-0">
      <div className="px-6 lg:px-12">
        {/* V-Talk ソリューションバナー */}
        <div className="bg-white rounded-[10px] px-6 lg:px-[44px] py-5 lg:py-[24px] max-w-[1264px] mx-auto">
          <div className="flex flex-wrap items-baseline justify-center gap-2 mb-2">
            <Logo className="h-[32px] lg:h-[44px]" />
            <span className="text-[22px] lg:text-[29px] font-medium">なら</span>
            <span className="text-[20px] lg:text-[30px] font-normal leading-[1.5]">
              その課題を
            </span>
            <span className="text-[26px] lg:text-[40px] font-bold">
              「動画・対話型AIエージェント」
            </span>
            <span className="text-[20px] lg:text-[30px] font-normal leading-[1.5]">
              が解決します
            </span>
          </div>
        </div>

        {/* 3つの機能カード */}
        <div className="max-w-[1264px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10 lg:mt-16">
          <div className="w-full lg:w-[400px] mx-auto flex flex-col">
            <div className="h-[180px] lg:h-[200px] flex items-center justify-center">
              <Image
                src="/images/phone-mockup.png"
                alt="スマホ動画モックアップ"
                width={200}
                height={200}
                className="object-contain h-full w-auto"
              />
            </div>
            <div className="bg-white rounded-[8px] p-[16px] mt-2">
              <p className="text-[16px] lg:text-[20px] font-bold text-center whitespace-pre-line leading-[1.5]">
                {"写真からプロ品質の縦型動画を手軽に\n直感的な魅力で応募意欲を喚起"}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[400px] mx-auto flex flex-col">
            <div className="h-[180px] lg:h-[200px] flex items-center justify-center">
              <ChatMockup />
            </div>
            <div className="bg-white rounded-[8px] p-[16px] mt-2">
              <p className="text-[16px] lg:text-[20px] font-bold text-center whitespace-pre-line leading-[1.5]">
                {"24時間365日、\nRAG搭載AIが公式情報をもとに回答"}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[400px] mx-auto flex flex-col">
            <div className="h-[180px] lg:h-[200px] flex items-center justify-center">
              <AnalyticsMockup />
            </div>
            <div className="bg-white rounded-[8px] p-[16px] mt-2">
              <p className="text-[16px] lg:text-[20px] font-bold text-center whitespace-pre-line leading-[1.5]">
                {"候補者の「本音」を可視化し、\n採用戦略を最適化。"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
