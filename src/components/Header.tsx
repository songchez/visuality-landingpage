import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="shadow-md">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-blue-700" href="/">
          <span className="sr-only">Home</span>
          <Image src="/images/Logo.svg" alt="logo" />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/about"
                >
                  {" "}
                  About{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/careers"
                >
                  {" "}
                  Careers{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/history"
                >
                  {" "}
                  History{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/services"
                >
                  {" "}
                  Services{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/projects"
                >
                  {" "}
                  Projects{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-400 transition hover:text-gray-400/75"
                  href="/blog"
                >
                  {" "}
                  Blog{" "}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="block rounded-md bg-blue-900/40 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800/40"
                href="/login"
              >
                Login
              </Link>

              <Link
                className="hidden rounded-md bg-white/10 px-5 py-2.5 text-sm font-medium text-blue-200 transition hover:text-blue-300/75 sm:block"
                href="/register"
              >
                Register
              </Link>
            </div>

            <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
