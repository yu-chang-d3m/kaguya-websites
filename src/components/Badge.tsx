export default function Badge() {
  return (
    <div className="w-[140px] h-[140px] lg:w-[170px] lg:h-[170px] rounded-full bg-white flex flex-col items-center justify-center text-center shadow-[0px_4px_32px_rgba(0,0,0,0.25)]">
      <span className="text-[12px] lg:text-[14px] text-[#008878] leading-tight">
        先着
      </span>
      <span className="text-[22px] lg:text-[27px] font-bold text-[#008878] leading-tight">
        10社限定
      </span>
      <span className="text-[19px] lg:text-[23px] font-bold text-[#008878] leading-tight mt-0.5">
        初期費用0円
      </span>
      <span className="text-[12px] lg:text-[14px] text-[#008878] leading-tight mt-0.5">
        初月無料でスタート
      </span>
    </div>
  );
}
