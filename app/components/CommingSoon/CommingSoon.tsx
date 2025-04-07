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
      <div className="flex flex-col w-[500px] h-96 justify-center gap-5 items-left">
        <h1 className="text-3xl">Visuality 페이지 준비중입니다...</h1>
        <p className="max-w-xl whitespace-pre-wrap">
          We&apos;re excited to introduce Visuality, a state-of-the-art service
          designed to revolutionize architectural design. By generative image
          AIs, it drastically reduces the time spent on the design process,
          enabling engineers to focus on their core tasks. Moreover, with its
          advanced reasoning capabilities, high-quality image generation, and
          visual processing technologies, Visuality offers unfiltered, clear
          solutions to complex challenges, paving the way for the future of
          architectural design.
        </p>
      </div>
    </div>
  );
}
