import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="overflow-hidden sm:grid sm:grid-cols-2 my-24">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-200 md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>

          <p className="hidden text-gray-300 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              href="#"
              className="inline-block rounded-md bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:ring-3 focus:ring-blue-400 focus:outline-hidden"
            >
              디자인 견적 요청하기
            </Link>
          </div>
        </div>
      </div>

      <Image
        width={1980}
        height={1080}
        alt="CTA Image"
        src="https://images.unsplash.com/photo-1462556791646-c201b8241a94?q=80&w=2896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="h-56 w-full object-cover sm:h-full"
      />
    </section>
  );
}
