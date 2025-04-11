export default function HeroSection() {
  return (
    <div className="w-full flex flex-col sm:m-36 mx-5 my-20">
      <div className="flex">
        <div className="w-[30px] h-[1px] bg-white/80 self-end -mr-1 hidden sm:block"></div>
        <h1 className="text-4xl font-semibold text-left text-white/80">
          VISUALITY
        </h1>
      </div>
      <span className="pt-5 max-w-xl whitespace-pre-wrap">
        We&apos;re excited to introduce Visuality, a state-of-the-art service
        designed to revolutionize architectural design. By generative image AIs,
        it drastically reduces the time spent on the design process, enabling
        engineers to focus on their core tasks. Moreover, with its advanced
        reasoning capabilities, high-quality image generation, and visual
        processing technologies, Visuality offers unfiltered, clear solutions to
        complex challenges, paving the way for the future of architectural
        design.
      </span>
    </div>
  );
}
