import BeforeAfterSlider from "~/components/BeforeAfterSlider";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative flex items-center justify-center">
      {/* 컨텐츠 영역 */}
      <div className="relative z-10 max-w-5xl">
        {/* Before/After 슬라이더 */}
        <BeforeAfterSlider
          beforeSrc="/images/before.jpeg"
          afterSrc="/images/after.png"
        />
      </div>
    </div>
  );
}
