"use client";

import { useState } from "react";

const faqs = [
  "導入にはどのくらいの期間がかかりますか？",
  "AIが間違った回答をしてしまうことはありませんか？",
  "既存の採用サイトにどのように設置しますか？",
  "動画はどのように用意すればいいですか？",
  "費用はどのくらいかかりますか？",
  "対話データの分析はどのように活用できますか？",
  "セキュリティ面は大丈夫ですか？",
  "無料トライアルの内容は？",
  "他社のAIツールとの違いは？",
  "AIが間違った回答をしないか心配です",
];

const faqAnswers: Record<string, string> = {
  "導入にはどのくらいの期間がかかりますか？":
    "最短で1週間程度で導入可能です。動画素材と採用資料をご用意いただければ、弊社にて設定・構築を行います。",
  "AIが間違った回答をしてしまうことはありませんか？":
    "RAG（Retrieval Augmented Generation）技術により、お客様がアップロードした公式情報のみをもとに回答を生成するため、ハルシネーション（事実と異なる回答）のリスクを最小限に抑えています。",
  "既存の採用サイトにどのように設置しますか？":
    "埋め込みコードをコピーして、採用サイトのHTMLに貼り付けるだけで設置完了です。WordPressなどのCMSにも対応しています。",
  "動画はどのように用意すればいいですか？":
    "写真1枚からAIアバター動画を生成できます。企画や撮影は不要です。既存の採用資料やスライドをアップロードするだけで、プロ品質の動画が完成します。",
  "費用はどのくらいかかりますか？":
    "初期費用0円、初月無料でスタートできます。詳しい料金プランについては、お問い合わせください。",
  "対話データの分析はどのように活用できますか？":
    "ダッシュボードで候補者との対話ログを可視化。どんな質問が多いか、どの情報に関心が高いかなど、採用戦略の最適化に活用いただけます。",
  "セキュリティ面は大丈夫ですか？":
    "SSL/TLS暗号化通信を採用し、Google Cloud Platform上で運用しています。データは厳重に管理されています。",
  "無料トライアルの内容は？":
    "初月無料で全機能をお試しいただけます。トライアル期間中のサポートも充実しています。",
  "他社のAIツールとの違いは？":
    "V-Talkは動画とチャットを組み合わせた唯一の採用支援AIです。RAG技術によるハルシネーション防止、対話ログの可視化など、採用に特化した機能を提供しています。",
  "AIが間違った回答をしないか心配です":
    "RAG技術により、お客様の公式情報のみをもとに回答を生成します。万が一不適切な回答があった場合も、ダッシュボードで確認・修正が可能です。",
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="max-w-[919px] mx-auto px-6 lg:px-0">
        <h2 className="text-2xl lg:text-[32px] font-medium text-center text-black mb-4 leading-[1.5]">
          よくある質問
        </h2>
        <p className="text-center text-[16px] lg:text-[20px] font-normal text-black mb-12 leading-[1.5]">
          V-Talkについて、お客さまからよくいただくご質問をまとめました。
        </p>

        <div className="flex flex-col gap-[4px]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between bg-white px-[10px] py-[14px] text-left text-[14px] lg:text-[16px] font-normal text-black hover:text-primary transition-colors shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05)] leading-[1.5]"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq}</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`flex-shrink-0 ml-4 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="bg-white px-[10px] pb-[14px] text-[14px] text-text-light leading-[1.5]">
                  {faqAnswers[faq]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
