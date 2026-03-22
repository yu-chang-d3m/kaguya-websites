const securityItems = [
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00ac92"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "RAGによる\nハルシネーション防止",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00ac92"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "SSL/TLS\n暗号化通信",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00ac92"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    title: "Google Cloud\nPlatformで運用",
  },
];

export default function Security() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-xl lg:text-[32px] font-medium text-center mb-3">
          セキュリティについて
        </h2>
        <p className="text-center text-[16px] lg:text-[20px] font-medium text-text-light mb-12">
          安心して導入いただけます
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-8 max-w-[1264px] mx-auto">
          {securityItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-[#f8f8f8] rounded-lg p-[10px] w-full md:w-[400px]"
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                {item.icon}
              </div>
              <p className="text-[16px] font-medium whitespace-pre-line leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
