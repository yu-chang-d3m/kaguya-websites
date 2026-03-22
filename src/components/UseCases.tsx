export default function UseCases() {
  return (
    <section className="bg-primary pt-12 lg:pt-20 pb-16 lg:pb-24">
      <div className="max-w-[1264px] mx-auto px-6 lg:px-12 text-center">
        {/* タイトル */}
        <h2 className="text-[24px] lg:text-[32px] font-bold text-white text-center whitespace-pre-line mb-12 lg:mb-16">
          {"さらに、\n様々なシーンでの展開が可能です"}
        </h2>

        {/* メインコンテンツ: 左アイコン + 中央モックアップ + 右アイコン */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* 左側3つのアイコン */}
          <div className="flex flex-row lg:flex-col gap-6 lg:gap-8">
            {/* 1. 会社説明資料への記載 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1c2929"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                  <line x1="8" y1="2" x2="8" y2="18" />
                  <line x1="16" y1="6" x2="16" y2="22" />
                </svg>
              </div>
              <p className="text-[14px] lg:text-[16px] font-bold text-white text-center whitespace-pre-line leading-[1.5]">
                {"会社説明資料\nへの記載"}
              </p>
            </div>

            {/* 2. 説明会でQRコードを表示 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1c2929"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </div>
              <p className="text-[14px] lg:text-[16px] font-bold text-white text-center whitespace-pre-line leading-[1.5]">
                {"説明会で\nQRコードを表示"}
              </p>
            </div>

            {/* 3. エージェントへの共有 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1c2929"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <p className="text-[14px] lg:text-[16px] font-bold text-white text-center whitespace-pre-line leading-[1.5]">
                {"エージェント\nへの共有"}
              </p>
            </div>
          </div>

          {/* 中央: Noteモックアップ + NEWバッジ */}
          <div className="flex flex-col items-center gap-3">
            {/* NEW + ラベル */}
            <div className="flex items-center gap-2">
              <span className="text-primary text-[14px] font-bold">NEW</span>
              <span className="text-[18px] lg:text-[20px] font-bold text-white">
                採用noteへの埋め込み
              </span>
            </div>

            {/* Note モックアップ (CSSで再現) */}
            <div className="bg-white rounded-[8px] w-[280px] lg:w-[340px] p-5 shadow-lg">
              {/* ヘッダー部分 */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-border" />
                <div className="flex-1">
                  <div className="h-3 w-24 bg-gray-border rounded" />
                  <div className="h-2 w-16 bg-gray-border/60 rounded mt-1" />
                </div>
              </div>
              {/* タイトル行 */}
              <div className="h-4 w-full bg-gray-border rounded mb-3" />
              <div className="h-4 w-3/4 bg-gray-border rounded mb-4" />
              {/* サムネイル */}
              <div className="w-full h-[100px] lg:h-[120px] bg-primary/10 rounded-[4px] flex items-center justify-center mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#00ac92"
                    stroke="none"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
              {/* テキスト行 */}
              <div className="h-3 w-full bg-gray-border/60 rounded mb-2" />
              <div className="h-3 w-5/6 bg-gray-border/60 rounded mb-2" />
              <div className="h-3 w-2/3 bg-gray-border/60 rounded" />
            </div>
          </div>

          {/* 右側3つのアイコン */}
          <div className="flex flex-row lg:flex-col gap-6 lg:gap-8">
            {/* 4. 採用媒体・求人票への記載 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1c2929"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <p className="text-[14px] lg:text-[16px] font-bold text-white text-center whitespace-pre-line leading-[1.5]">
                {"採用媒体・求人票\nへの記載"}
              </p>
            </div>

            {/* 5. SNSでの発信 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1c2929"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <p className="text-[14px] lg:text-[16px] font-bold text-white text-center whitespace-pre-line leading-[1.5]">
                SNSでの発信
              </p>
            </div>

            {/* 6. 自社サイトへの埋め込み */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1c2929"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </div>
              <p className="text-[14px] lg:text-[16px] font-bold text-white text-center whitespace-pre-line leading-[1.5]">
                {"自社サイト\nへの埋め込み"}
              </p>
            </div>
          </div>
        </div>

        {/* デモ動画を見るボタン */}
        <div className="mt-12 lg:mt-16">
          <a
            href="#"
            className="inline-flex items-center justify-center max-w-[400px] w-full h-[56px] bg-white border-[3px] border-[#00ac92] text-[#00b183] rounded-[88px] font-bold text-[16px] lg:text-[18px] hover:opacity-90 transition-opacity"
            style={{ boxShadow: "0px 4px 32px rgba(0,0,0,0.15)" }}
          >
            デモ動画を見る
          </a>
        </div>
      </div>
    </section>
  );
}
