import ContactUs from "./ContactUs";
import WeaverIntro from "./WeaverIntro"; // 추가

export default function CommingSoon() {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center px-4 py-10">
      <div className="absolute w-screen h-auto overflow-hidden left-1/4 -z-10">
      <img
          src="/images/3d_box_grid.svg"
          alt="grid"
          style={{ width: `${Math.max(0.5, 30)}vw` }}
          className="opacity-15
         [mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)] 
         [-webkit-mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)]"
        />
      </div>
      {/* 실제 콘텐츠 영역 */}
      <div className="flex flex-col lg:flex-row w-full max-w-screen-xl gap-10">
        {/* 좌측: 텍스트 + WeaverIntro */}
        <div className="flex flex-col w-full lg:w-1/2 gap-10">
          <div className="flex flex-col items-start max-w-xl w-full gap-3">
            <h1 className="pb-2 text-5xl font-semibold text-white/80 flex items-center gap-3">
              <svg
              className="w-8 h-8 text-white/100 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-35"
                cx="12"
                cy="12"
                r="13"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            홈페이지 준비 중...
          </h1>

          <div className="w-full flex ">
            <div className="pl-12 pr-5 pb-14 text-2xl font-semibold text-white/60">
              Comming Soon
            </div>
            <div className="pl-2 pr-5 pt-2 text-1xl font-semibold text-white/40">
              2025.04.07. ~
            </div>
          </div>
          <div className="pl-12 text-xl font-semibold text-white/80">
            서비스 문의
            <span className="text-sm pl-2 font-light">Contact US</span>
          </div>
          <span className="pl-14">
            <strong>E-Mail</strong>: jesuh.yoo@gmail.com
          </span>
          <span className="pl-14">
            <strong>Mobile</strong>: +82) 10-9619-1204
          </span>
        </div>
        
        {/* WeaverIntro 컴포넌트를 아래쪽에 삽입 */}
          <WeaverIntro />
        </div>

        {/* 우측: ContactUs */}
        <div className="w-full lg:w-1/2 max-w-lg self-center">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}