import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const painPoints = [
  {
    category: "母集団形成",
    title: "「なかなか会社の雰囲気が\n伝わらない...」",
    description:
      "テキスト・静止画だけの情報では職場の空気感や社員の魅力が伝わりません。サイトを訪れても魅力が響かず、応募に至らないという機会損失が発生しています。",
    image: `${basePath}/images/pain-boshudan.png`,
  },
  {
    category: "面接",
    title: "「カジュアル面談に、\n工数を取られすぎている…」",
    description:
      "自社のことをよく知らない候補者との面談が続き、採用担当者の時間だけが消費されていく…",
    image: `${basePath}/images/pain-mensetsu.png`,
  },
  {
    category: "内定承諾",
    title: "「実は、\n候補者のことがよくわからない…」",
    description:
      "どんな人が自社に興味があるのか、なぜ応募してくれないのか、わからない…",
    image: `${basePath}/images/pain-naitei.png`,
  },
];

export default function PainPoints() {
  return (
    <section className="relative bg-gray-bg pt-16 lg:pt-24 pb-0">
      {/* タイトル — Figma: 30px on PC, font-medium */}
      <h2 className="text-[22px] lg:text-[30px] font-medium text-center text-black mb-10 lg:mb-16 px-6">
        こんなお悩み、ありませんか？
      </h2>

      {/* 3枚のカード */}
      <div className="max-w-[1264px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-6 lg:px-12 pb-12 lg:pb-20">
        {painPoints.map((point, i) => (
          <div
            key={i}
            className="w-full lg:w-[400px] mx-auto flex flex-col overflow-hidden"
          >
            {/* 上部: イラスト画像 */}
            <div className="h-[180px] lg:h-[225px] flex items-center justify-center">
              <Image
                src={point.image}
                alt={point.category}
                width={400}
                height={225}
                className="object-contain h-full w-auto"
              />
            </div>

            {/* 下部: テキストエリア */}
            <div className="bg-white rounded-[8px] p-[24px] flex-1 flex flex-col gap-[8px]">
              <p className="text-[15px] font-light text-black/50 text-center leading-none">
                {point.category}
              </p>
              <h3 className="text-[18px] lg:text-[20px] font-bold text-black text-center leading-[1.5] h-[60px] flex items-center justify-center whitespace-pre-line">
                {point.title}
              </h3>
              <p className="text-[14px] lg:text-[16px] font-normal leading-[1.5] text-black">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
