import { useState } from "react";
import BeforeAfterSection from "~/components/BeforeAfterSection";
import Divider from "~/components/Divider";
import FeatureSection from "~/components/FeatureSection";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeroSection from "~/components/HeroSection";
import InstancesSection from "~/components/InstancesSection";

export default function Index() {
  const [gridSize, setGridSize] = useState(1);
  return (
    <div className="min-h-screen bg-gray-950 text-gray-400 relative overflow-hidden">
      <div className="absolute w-screen h-auto overflow-hidden">
        <img
          src="/images/3d_box_grid.svg"
          alt="grid"
          style={{ width: `${Math.max(gridSize, 30)}vw` }}
          className="opacity-10
         [mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)] 
         [-webkit-mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)]"
        />
      </div>
      {/* 컨텐츠 영역 */}

      <div className="relative w-full">
        <Header />
        <HeroSection />
        <BeforeAfterSection setGridSize={setGridSize} />
        <Divider centerText="Instances" />
        <InstancesSection />
        <Divider centerText="Features section" />
        <FeatureSection />
        <Footer />
      </div>
    </div>
  );
}
