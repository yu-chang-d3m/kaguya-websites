const plans = [
  {
    name: "動画プラン",
    icon: "video",
    description:
      "AIアバター動画で企業の魅力を直感的に訴求。写真一枚から高品質な動画を生成します。",
    features: [
      "AIアバター動画作成",
      "縦型・横型動画対応",
      "SNS・採用サイトへの埋め込み",
      "動画編集・更新サポート",
    ],
    recommendation:
      "職場の雰囲気を直感的に伝え、応募意欲を高めたい企業",
    highlighted: false,
  },
  {
    name: "セットプラン",
    icon: "bundle",
    description:
      "動画とチャットのフルパッケージ。採用の機会損失をゼロにし、応募率と内定承諾率を最大化します。",
    features: [
      "動画プランの全機能",
      "チャットプランの全機能",
      "動画×チャットのシームレス連携",
      "専任サポート担当者付き",
      "優先的な新機能アクセス",
    ],
    bonus: "AIアバター動画3本無料で作成！",
    recommendation: "採用の機会損失をゼロにしたい企業",
    highlighted: true,
  },
  {
    name: "チャットプラン",
    icon: "chat",
    description:
      "RAG搭載AIが24時間365日応募者の疑問に即答。採用担当者の工数を大幅に削減します。",
    features: [
      "RAG搭載AIチャットボット",
      "社内資料のアップロード対応",
      "対話ログの可視化ダッシュボード",
      "導入サポート・カスタマイズ対応",
    ],
    recommendation:
      "求職者の疑問を即座に解消しつつ、対応工数を削減したい企業",
    highlighted: false,
  },
];

function PlanIcon({
  type,
  highlighted,
}: {
  type: string;
  highlighted: boolean;
}) {
  const stroke = highlighted ? "white" : "#00ac92";

  if (type === "video") {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    );
  }

  if (type === "bundle") {
    return (
      <div className="flex items-center gap-2">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
        <span className="text-lg font-bold">+</span>
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>
    );
  }

  // chat
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gray-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-2xl lg:text-[32px] font-medium text-center mb-4">
          料金プラン
        </h2>
        <p className="text-center text-[14px] lg:text-[16px] font-medium text-text-light mb-16">
          初期費用無料、初月無料で始められます
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-[8px] p-6 lg:p-8 relative w-full max-w-[480px] mx-auto ${
                plan.highlighted
                  ? "bg-[#1c2a29] text-white"
                  : "bg-white text-text"
              }`}
            >
              {/* おすすめバッジ */}
              {plan.highlighted && (
                <span className="absolute -top-4 right-6 bg-primary text-white text-sm font-bold px-5 py-1.5 rounded-[50px]">
                  おすすめ
                </span>
              )}

              {/* アイコン */}
              <div className="mb-4">
                <PlanIcon type={plan.icon} highlighted={plan.highlighted} />
              </div>

              {/* プラン名 */}
              <h3 className="text-2xl lg:text-[32px] font-medium mb-3">
                {plan.name}
              </h3>

              {/* 説明 */}
              <p
                className={`text-[16px] mb-6 leading-relaxed ${
                  plan.highlighted ? "text-white/80" : "text-text-light"
                }`}
              >
                {plan.description}
              </p>

              {/* 特典（セットプランのみ） */}
              {plan.bonus && (
                <div className="bg-primary rounded-[4px] px-4 py-3 mb-6 flex items-center gap-2">
                  <span className="text-sm font-bold text-white">🎁 特典</span>
                  <span className="text-sm text-white">{plan.bonus}</span>
                </div>
              )}

              {/* 機能リスト */}
              <ul className="mb-6 space-y-1">
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    className="text-[16px] leading-[2]"
                  >
                    ・{feature}
                  </li>
                ))}
              </ul>

              {/* おすすめボックス */}
              <div
                className={`rounded-[4px] p-4 mb-6 min-h-[88px] ${
                  plan.highlighted ? "bg-gray-border" : "bg-gray-border"
                }`}
              >
                <p
                  className={`text-xs font-bold mb-1 ${
                    plan.highlighted ? "text-text" : "text-text"
                  }`}
                >
                  こんな企業様におすすめ
                </p>
                <p
                  className={`text-sm ${
                    plan.highlighted ? "text-text-light" : "text-text-light"
                  }`}
                >
                  {plan.recommendation}
                </p>
              </div>

              {/* CTA ボタン */}
              <div className="space-y-3">
                <a
                  href="#contact"
                  className="block text-center py-3 rounded-[88px] font-bold text-[16px] transition-colors bg-primary text-white hover:bg-primary-dark"
                >
                  無料トライアルに申し込む
                </a>
                <a
                  href="#contact"
                  className="block text-center py-3 rounded-[88px] font-bold text-[16px] border-3 transition-colors border-[#00ac92] bg-white text-[#00b183] hover:bg-primary/5"
                >
                  ３分でわかる資料をダウンロード
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
