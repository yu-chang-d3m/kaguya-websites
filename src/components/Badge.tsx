export default function Badge({
  shadow = "default",
}: {
  shadow?: "default" | "dark";
}) {
  const shadowClass =
    shadow === "dark"
      ? "shadow-[0px_4px_32px_0px_rgba(0,0,0,0.25)]"
      : "shadow-[0px_4px_32px_0px_rgba(0,0,0,0.15)]";

  return (
    <div
      className={`w-[170px] h-[170px] rounded-[110px] bg-white flex flex-col items-center justify-center text-center ${shadowClass}`}
    >
      <span className="text-[27px] font-bold text-[#00ac92] leading-[1.2]">
        4月限定
      </span>
      <span className="text-[23px] font-bold text-[#00ac92] leading-[1.5]">
        初期費用0円
      </span>
      <span className="text-[14px] text-[#00ac92] leading-[1.5]">
        <span className="font-bold">初月無料</span>
        <span className="font-medium">でスタート</span>
      </span>
    </div>
  );
}
