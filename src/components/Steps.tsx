const steps = [
  {
    step: "STEP1",
    title: "動画素材と採用資料を\nアップロード",
    icons: (
      <>
        {/* Folder アイコン */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00ac92"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
        {/* Image アイコン */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00ac92"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </>
    ),
  },
  {
    step: "STEP2",
    title: "動画の入稿と\nチャットボットの構築",
    icons: (
      <>
        {/* Video アイコン */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00ac92"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
        {/* MessageSquare アイコン */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00ac92"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </>
    ),
  },
  {
    step: "STEP3",
    title: "採用サイトに\n埋め込みコードを貼るだけ",
    icons: (
      <>
        {/* Copy アイコン */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00ac92"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        {/* Code アイコン */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00ac92"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </>
    ),
  },
];

export default function Steps() {
  return (
    <section id="steps" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-xl lg:text-[32px] font-medium text-center text-black mb-16 leading-[1.5]">
          企画も撮影も不要。今の資料が動画に変わります。
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-6">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-4 lg:gap-6">
              {/* ステップカード */}
              <div className="flex flex-col items-center text-center w-[280px] lg:w-[340px]">
                {/* ステップ番号バッジ */}
                <div className="bg-primary text-white text-[20px] lg:text-[24px] font-bold rounded-[40px] h-[56px] lg:h-[70px] w-full flex items-center justify-center mb-6">
                  {s.step}
                </div>

                {/* アイコン円 */}
                <div className="w-[100px] lg:w-[128px] h-[100px] lg:h-[128px] rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <div className="flex gap-1">
                    {s.icons}
                  </div>
                </div>

                {/* テキスト */}
                <p className="text-[16px] lg:text-[20px] font-normal text-black whitespace-pre-line leading-[1.5] text-center">
                  {s.title}
                </p>
              </div>

              {/* 矢印（最後のステップ以外、PC のみ） */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center self-center pt-4">
                  <svg
                    width="24"
                    height="32"
                    viewBox="0 0 24 32"
                    fill="none"
                  >
                    <path
                      d="M4 4l16 12-16 12"
                      stroke="#00ac92"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
