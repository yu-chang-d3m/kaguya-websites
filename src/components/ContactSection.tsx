"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-2xl lg:text-[32px] font-medium text-center text-black mb-4 leading-[1.5]">
          採用の未来を、共に。
        </h2>
        <p className="text-center text-[16px] lg:text-[20px] font-normal text-black mb-12 leading-[1.5]">
          デモの実装や、貴社専用のAIコンシェルジュ動画制作に関するご相談など、
          <br className="hidden lg:block" />
          お気軽にお問い合わせください。
        </p>

        {/* お問い合わせフォーム */}
        <div className="max-w-[819px] mx-auto bg-white p-6 lg:p-[40px]">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-[10px]">
            <div className="flex flex-col sm:flex-row gap-[16px]">
              <div className="flex-1 flex flex-col gap-[4px]">
                <label className="text-[12px] font-normal text-black/50 leading-[1.5]">
                  会社名<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="KAGUYA株式会社"
                  className="w-full px-[16px] py-[12px] bg-[rgba(217,217,217,0.24)] rounded-[4px] text-[14px] text-black/50 leading-[1.5] focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="flex-1 flex flex-col gap-[4px]">
                <label className="text-[12px] font-normal text-black/50 leading-[1.5]">
                  お名前<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="佐藤 雄一郎"
                  className="w-full px-[16px] py-[12px] bg-[rgba(217,217,217,0.24)] rounded-[4px] text-[14px] text-black/50 leading-[1.5] focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] font-normal text-black/50 leading-[1.5]">
                メールアドレス<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="sato@kaguya.com"
                className="w-full px-[16px] py-[12px] bg-[rgba(217,217,217,0.24)] rounded-[4px] text-[16px] text-black/50 leading-[1.5] focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] font-normal text-black/50 leading-[1.5]">
                お問い合わせ内容<span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="お問い合わせ内容をご記入ください"
                className="w-full px-[16px] py-[12px] bg-[rgba(217,217,217,0.24)] rounded-[4px] text-[16px] text-black/50 leading-[1.5] focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none h-[166px]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-[12px] px-[16px] bg-primary text-white rounded-[56px] font-bold text-[16px] hover:bg-primary-dark transition-colors leading-[1.5]"
            >
              無料で相談する
            </button>

            <p className="text-center text-[12px] text-black/50 leading-[1.5]">
              個人情報は厳重に管理します。
              <br />
              しつこい営業は一切しません。
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
