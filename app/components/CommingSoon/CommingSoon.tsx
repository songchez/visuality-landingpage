import ContactUs from "./ContactUs";

export default function CommingSoon() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="absolute w-screen h-auto overflow-hidden left-1/4">
        <img
          src="/images/3d_box_grid.svg"
          alt="grid"
          style={{ width: `${Math.max(0.5, 30)}vw` }}
          className="opacity-15
         [mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)] 
         [-webkit-mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)]"
        />
      </div>
      <div className="w-full flex justify-center my-20 items-center">
        <div className="flex flex-col items-start max-w-xl w-full gap-4 mx-5 sm:mx-0">
          <h1 className="pb-2 text-5xl font-semibold text-white/80">
            홈페이지 준비 중...
          </h1>
          <div className="w-full flex ">
            <div className="pl-5 pr-5 pb-14 text-2xl font-semibold text-white/60">
              Comming Soon
            </div>
            <div className="pl-5 pr-5 pt-2 text-1xl font-semibold text-white/40">
              2025.04.07. ~
            </div>
          </div>
          <div className="text-xl font-semibold text-white/80">
            서비스 문의
            <span className="text-sm pl-2 font-light">Contact US</span>
          </div>
          <span>
            <strong>E-Mail</strong>: jesuh.yoo@gmail.com
          </span>
          <span>
            <strong>Mobile</strong>: +82) 10-9619-1204
          </span>
        </div>
        <ContactUs />
      </div>
    </div>
  );
}
