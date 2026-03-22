import Logo from "./Logo";
import CTAButtons from "./CTAButtons";
import Badge from "./Badge";

export default function Footer() {
  return (
    <footer className="bg-[#1c2a29] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center">
          <div className="text-center max-w-3xl">
            {/* V-Talk ロゴ */}
            <div className="flex justify-center mb-8">
              <Logo className="h-[37px]" variant="white" />
            </div>

            <h2 className="text-xl lg:text-[32px] font-medium text-white leading-[1.6] mb-4">
              採用の未来を、今日から変えよう。
            </h2>
            <p className="text-[14px] lg:text-[16px] text-white/80 mb-2">
              V-Talkの導入で、採用活動を次のステージへ。
            </p>
            <p className="text-[12px] lg:text-[14px] text-white/60 mb-10">
              初期費用無料、初月無料で始められます
            </p>

            <div className="flex justify-center">
              <CTAButtons variant="dark" />
            </div>
          </div>

          {/* Badge（PC のみ） */}
          <div className="hidden lg:block ml-8 flex-shrink-0">
            <Badge />
          </div>
        </div>

        {/* コピーライト */}
        <div id="company" className="mt-16 text-center">
          <p className="text-xs text-white/40">
            &copy; 2026 V-Talk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
