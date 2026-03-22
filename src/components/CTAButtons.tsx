export default function CTAButtons({
  variant = "default",
}: {
  variant?: "default" | "dark";
}) {
  const primaryClass =
    variant === "dark"
      ? "bg-white text-primary hover:bg-gray-100"
      : "bg-[#00ac92] text-white hover:bg-primary-dark";
  const secondaryClass =
    variant === "dark"
      ? "border-3 border-white text-white hover:bg-white/10"
      : "bg-white border-3 border-[#00ac92] text-[#00b183] hover:bg-primary/5";

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <a
        href="#contact"
        className={`inline-flex items-center justify-center w-full sm:w-[400px] h-[56px] rounded-[88px] font-bold text-[16px] transition-colors shadow-[0px_4px_32px_rgba(0,0,0,0.15)] ${primaryClass}`}
      >
        無料トライアルに申し込む
      </a>
      <a
        href="#contact"
        className={`inline-flex items-center justify-center w-full sm:w-[400px] h-[56px] rounded-[88px] font-bold text-[16px] transition-colors shadow-[0px_4px_32px_rgba(0,0,0,0.15)] ${secondaryClass}`}
      >
        ３分でわかる資料をダウンロード
      </a>
    </div>
  );
}
