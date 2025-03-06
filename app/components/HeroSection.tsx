export default function HeroSection() {
  return (
    <div className="w-full flex flex-col m-36">
      <div className="flex">
        <div className="w-[32px] h-[3px] bg-white/80 self-end"></div>
        <h1 className="text-4xl font-semibold text-left">VISUALITY</h1>
      </div>
      <span className="pt-5 max-w-xl">
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
