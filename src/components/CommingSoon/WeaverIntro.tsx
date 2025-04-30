import Image from "next/image";
import Divider from "../Divider";

// WeaverIntro.tsx
export default function WeaverIntro() {
  return (
    <section className="z-10 flex flex-col justify-center items-center">
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
      <div className="my-40 flex flex-col md:flex-row justify-center items-center gap-20">
        <div>
          <div className="max-w-screen-xl px-4 lg:flex lg:items-center">
            <div className="max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                <p className="pl-2 pb-1 text-2xl sm:block text-left">
                  Visualize your Vision.
                </p>
                <p className="pb-1 text-7xl sm:block text-center">The Weaver</p>
                <p className="pb-3 text-2xl sm:block text-right">
                  Supports Reality.
                </p>
              </h1>
              <div className="w-full py-5">
                <Divider />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-xl w-full gap-3">
            <div className="flex h-10 gap-4 justify-center items-center">
              <Image
                src="images/blocks-shuffle-3.svg"
                width={40}
                height={40}
                alt="block animation"
              />
              <h1 className="text-4xl font-semibold text-white">
                Comming Soon
              </h1>
            </div>
            <p className="text-lg font-mono">2025.04.07. ~ 2025.05.20(예정)</p>
          </div>
        </div>
        <div className="shadow-xl shadow-violet-900 m-5 md:m-0 overflow-hidden rounded-lg border-1 border-violet-400">
          <video controls autoPlay muted loop width="512" preload="auto">
            <source src="/videos/landing-main-video.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-5 justify-center items-center m-10">
        <video controls autoPlay muted loop width="400">
          <source src="/videos/landing_video_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls autoPlay muted loop width="400">
          <source src="/videos/landing_video_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls autoPlay muted loop width="400">
          <source src="/videos/landing-video-3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls autoPlay muted loop width="400">
          <source src="/videos/landing-video-4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls autoPlay muted loop width="400">
          <source src="/videos/landing-video-5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls autoPlay muted loop width="400">
          <source src="/videos/landing-video-6.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
