const testimonials = [
  {
    quote: "採用の対応の工数が減って\n仕事が楽になりました...！",
  },
  {
    quote: "採用の対応の工数が減って\n仕事が楽になりました...！",
  },
  {
    quote: "採用の対応の工数が減って\n仕事が楽になりました...！",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-[16px] lg:text-[20px] font-medium text-center mb-12">
          お客様の声
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1280px] mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#f8f8f8] rounded-[8px] p-6 lg:p-8 flex flex-col items-center text-center"
            >
              <div className="w-[60px] lg:w-[75px] h-[60px] lg:h-[75px] rounded-full bg-[#d9d9d9] mb-4" />
              <p className="text-[14px] lg:text-[16px] font-medium whitespace-pre-line leading-relaxed">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
