import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeroSection from "~/components/HeroSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* 컨텐츠 영역 */}
      <div className="relative w-full">
        <Header />
        {/* Before/After 슬라이더 */}
        <div className="flex w-full justify-center my-10">
          <HeroSection
            beforeSrc="/images/before.jpeg"
            afterSrc="/images/after.png"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
