import CTAButtons from "./CTAButtons";
import Badge from "./Badge";

export default function CTABanner() {
  return (
    <section className="relative bg-[#1c2a29] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center">
          <div className="text-center max-w-3xl">
            <h2 className="text-xl lg:text-[32px] font-medium text-white leading-[1.6] mb-6">
              初期費用0円・初月無料で、
              <br />
              まずは試してみませんか？
            </h2>
            <p className="text-[14px] lg:text-[16px] text-white mb-10">
              導入事例やデモのご案内、料金プランの詳細など、
              <br className="hidden lg:block" />
              貴社の採用課題に合わせてご提案いたします。
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
      </div>
    </section>
  );
}
