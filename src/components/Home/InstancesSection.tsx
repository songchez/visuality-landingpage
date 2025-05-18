import Link from "next/link";

interface BuildingCardType {
  image: string;
  category: string;
  title: string;
  description: string;
}

/** 개별 카드 컴포넌트 */
function BuildingCard({ building }: { building: BuildingCardType }) {
  return (
    <Link
      href="#"
      className="group relative block bg-black md:w-[450px] md:h-[350px] w-60 flex-shrink-0 mx-4"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-75 transition-opacity group-hover:opacity-50"
        style={{ backgroundImage: `url(${building.image})` }}
      />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          {building.category}
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl">
          {building.title}
        </p>
        <div className="mt-10">
          <div className="text-wrap translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{building.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function InstancesSection() {
  const buildingCards: BuildingCardType[] = [
    {
      image:
        "https://images.unsplash.com/photo-1528291151377-165f5107c82a?q=80&w=3085&auhref=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Skyscraper",
      title: "Empire State Building",
      description: "뉴욕 맨해튼에 위치한 아르데코 양식의 대표적인 초고층 빌딩.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560425946-7d5830202765?q=80&w=3164&auhref=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Historical",
      title: "The Louvre",
      description: "파리에 위치한 세계적인 미술관, 원래는 왕실 궁전이었어요.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1638462798474-24ed12e5c88b?q=80&w=3087&auhref=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Modern",
      title: "Burj Khalifa",
      description:
        "두바이에 있는 세계 최고층 건물로, 현대 건축의 아이콘입니다.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590716209211-ea74d5f63573?q=80&w=3024&auhref=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Landmark",
      title: "Sydney Opera House",
      description:
        "시드니의 상징적인 건축물로, 독특한 돛 모양의 디자인을 가지고 있습니다.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1610351507635-fcd03b17699d?q=80&w=3088&auhref=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Ancient",
      title: "Colosseum",
      description:
        "로마의 고대 원형 경기장으로, 역사적 유산을 대표하는 건축물입니다.",
    },
  ];

  return (
    <section className="mt-32">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            <span className="pl-2 pb-1 text-4xl sm:block text-left">
              {" "}
              Visualize your Vision.{" "}
            </span>
            <span className="pb-1 text-9xl sm:block text-center">
              {" "}
              The Weaver{" "}
            </span>
            <span className="pb-3 text-4xl sm:block text-right">
              {" "}
              Supports Reality.{" "}
            </span>
          </h1>

          <p className="pt-3 text-1xl sm:block text-center">
            아이디어를 <strong>&apos;구상하다&apos;</strong>
          </p>
          <p className="pt-2 text-1xl sm:block text-center">
            계획을 <strong>&apos;짜다&apos;</strong>
          </p>
          <p className="pt-9 pb-3 text-1xl sm:block text-center">
            아이디어, 구상, 계획, 설계,
          </p>
          <p className="pr-12 pb-1 text-3xl sm:block text-center">
            <strong>&apos;현실&apos;</strong>로
          </p>
          <p className="pl-12 pb-3 pt-2 text-3xl sm:block text-center">
            <strong>&apos;실현&apos;</strong>되다.
          </p>
        </div>
      </div>
      <div className="relative flex overflow-x-hidden mt-10 mb-32">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...buildingCards, ...buildingCards].map((building, index) => (
            <BuildingCard key={index} building={building} />
          ))}
        </div>
        <div className="absolute top-0 flex whitespace-nowrap animate-marquee2">
          {[...buildingCards, ...buildingCards].map((building, index) => (
            <BuildingCard key={index} building={building} />
          ))}
        </div>
      </div>
    </section>
  );
}
