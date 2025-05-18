import BeforeAfterCarousel from "@/components/Home/BeforeAfterSection";
import CTASection from "@/components/Home/CTASection";
import FeatureSection from "@/components/Home/FeatureSection";
import HeroSection from "@/components/Home/HeroSection";
import InstancesSection from "@/components/Home/InstancesSection";
import ReviewSection from "@/components/Home/ReviewSection";
import StatSection from "@/components/Home/StatSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="absolute w-screen h-auto top-20">
        <Image
          src="/images/3d_box_grid.svg"
          alt="grid"
          width={Math.max(0.9, 600)}
          height={200}
          className="opacity-10
         [mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)] 
         [-webkit-mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)]"
        />
      </div>
      <HeroSection />
      <BeforeAfterCarousel />
      <FeatureSection />
      <CTASection />
      <InstancesSection />
      <ReviewSection />
      <StatSection />
    </div>
  );
}
