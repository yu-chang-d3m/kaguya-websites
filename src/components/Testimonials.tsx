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
      <div className="max-w-[1264px] mx-auto px-6 lg:px-0">
        <h2 className="text-[16px] lg:text-[20px] font-medium text-black text-center mb-12 leading-[1.5]">
          お客様の声
        </h2>

        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-light-gray w-full lg:w-[400px] h-auto lg:h-[139px] flex items-center gap-4 px-6 py-4 lg:py-0"
            >
              <div className="w-[75px] h-[75px] rounded-[110px] bg-[#d9d9d9] shrink-0" />
              <p className="text-[16px] font-medium text-black whitespace-pre-line leading-[1.5]">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
