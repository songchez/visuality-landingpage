import { useState } from "react";
import BeforeAfterSection from "~/components/BeforeAfterSection";
import CTASection from "~/components/CTASection";
import FeatureSection from "~/components/FeatureSection";
import Footer from "~/components/Footer";
import HeroSection from "~/components/HeroSection";
import InstancesSection from "~/components/InstancesSection";
import ReviewSection from "~/components/ReviewSection";
import StatSection from "~/components/StatSection";

export default function Index() {
  const [gridSize, setGridSize] = useState(1);
  return (
    <div className="h-full w-full">
      <div className="absolute w-screen h-auto overflow-hidden top-20">
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
        <HeroSection />
        <BeforeAfterSection setGridSize={setGridSize} />
        <InstancesSection />
        <FeatureSection />
        <StatSection />
        <ReviewSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
