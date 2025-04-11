import Image from "next/image";
import Divider from "../Divider";

// WeaverIntro.tsx
export default function WeaverIntro() {
  return (
    <section className="z-10 h-screen flex flex-col justify-center items-center">
      <div className="absolute w-screen h-auto left-1/4">
        <Image
          src="/images/3d_box_grid.svg"
          alt="grid"
          width={Math.max(0.9, 30)}
          height={200}
          className="opacity-10
         [mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)] 
         [-webkit-mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)]"
        />
      </div>
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
          <h1 className="text-4xl font-semibold text-white">Comming Soon</h1>
        </div>
        <p className="text-lg font-mono">2025.04.07. ~ 2025.05.20(예정)</p>
      </div>
    </section>
  );
}
