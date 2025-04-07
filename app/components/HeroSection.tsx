export default function HeroSection() {
  return (
    <div className="w-full flex justify-center my-20">
      <div className="flex flex-col items-start max-w-xl w-full mx-5 sm:mx-0">
        <div className="flex">
          <h1 className="pb-2 text-6xl font-semibold text-white/80">
            사이트 준비 중
          </h1>
        </div>
      
        <div className="w-full flex ">
          <div className="pl-5 pr-5 pb-14 text-2xl font-semibold text-white/60">
          Comming Soon
          </div>
          <div className="pl-5 pr-5 pt-2 text-1xl font-semibold text-white/40">
          2025.04.07. ~ 
          </div>
        </div>

        <div className="pl-5 pb-3 text-2xl font-semibold text-white/80">
            서비스 문의
        </div>
        <ul className="pl-7 pb-3 text-left text-white/70 list-disc list-inside space-y-1">
          <li className= "pb-2">
            <strong>E-Mail</strong>: jesuh.yoo@gmail.com
          </li>
          <li className= "pb-2">
            <strong>Mobile</strong>: +82) 10-9619-1204
          </li>
        </ul>
        </div>
      </div>
  );
}