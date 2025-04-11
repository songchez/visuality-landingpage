import ContactUs from "./ContactUs";
import WeaverIntro from "./WeaverIntro"; // 추가

export default function CommingSoon() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      {/* 실제 콘텐츠 영역 */}
      {/* WeaverIntro 컴포넌트를 아래쪽에 삽입 */}
      <WeaverIntro />
      <div className="flex w-full justify-center gap-10">
        {/* 우측: ContactUs */}
        <div className="w-full">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}
