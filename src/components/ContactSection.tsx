"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-2xl lg:text-[32px] font-medium text-center mb-4">
          採用の未来を、共に。
        </h2>
        <p className="text-center text-[16px] lg:text-[20px] text-text-light mb-12">
          デモの実装や、貴社専用のAIコンシェルジュ動画制作に関するご相談など、
          <br className="hidden lg:block" />
          お気軽にお問い合わせください。
        </p>

        {/* お問い合わせフォーム */}
        <div className="max-w-[819px] mx-auto bg-white rounded-2xl p-6 lg:p-[40px] shadow-sm">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium mb-1">
                  会社名<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="KAGUYA株式会社"
                  className="w-full px-4 py-3 bg-[rgba(217,217,217,0.24)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">
                  お名前<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="佐藤 雄一郎"
                  className="w-full px-4 py-3 bg-[rgba(217,217,217,0.24)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-1">
                メールアドレス<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="sato@kaguya.com"
                className="w-full px-4 py-3 bg-[rgba(217,217,217,0.24)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-1">
                お問い合わせ内容<span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="お問い合わせ内容をご記入ください"
                className="w-full px-4 py-3 bg-[rgba(217,217,217,0.24)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-[56px] font-bold text-sm hover:bg-primary-dark transition-colors"
            >
              無料で相談する
            </button>

            <p className="text-center text-[12px] text-text-light leading-relaxed">
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
