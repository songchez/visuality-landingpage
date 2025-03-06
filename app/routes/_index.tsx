import BeforeAfterSection from "~/components/BeforeAfterSection";
import Divider from "~/components/Divider";
import FeatureSection from "~/components/FeatureSection";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeroSection from "~/components/HeroSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-400 relative">
      <div className="absolute w-screen h-auto overflow-hidden">
        <img
          src="/images/3d_box_grid.svg"
          alt="grid"
          className="w-[1080px] opacity-10
         [mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)] 
         [-webkit-mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)]"
        />
      </div>
      {/* 컨텐츠 영역 */}
      <div className="relative w-full">
        <Header />
        {/* Before/After 슬라이더 */}
        <HeroSection />
        <BeforeAfterSection
          beforeSrc="/images/before.jpeg"
          afterSrc="/images/after.png"
        />
        <Divider centerText="Instances" />
        <Divider centerText="Features section" />
        <FeatureSection />
        <Footer />
      </div>
    </div>
  );
}
