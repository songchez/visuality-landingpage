import Image from "next/image";
import Divider from "./Divider";

export default function FeatureSection() {
  return (
    <section className="mt-72">
      <Divider centerText="Features" />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-300 sm:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>

              <p className="mt-4 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                doloremque saepe architecto maiores repudiandae amet perferendis
                repellendus, reprehenderit voluptas sequi.
              </p>
            </div>
          </div>

          <div>
            <Image
              src="https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded"
              alt="tete"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
          <div className="md:col-span-3">
            <Image
              src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded"
              alt=""
            />
          </div>

          <div className="md:col-span-1">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-300 sm:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>

              <p className="mt-4 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                doloremque saepe architecto maiores repudiandae amet perferendis
                repellendus, reprehenderit voluptas sequi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
          <div className="md:col-span-1">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-300 sm:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>

              <p className="mt-4 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                doloremque saepe architecto maiores repudiandae amet perferendis
                repellendus, reprehenderit voluptas sequi.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <Image
              src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
