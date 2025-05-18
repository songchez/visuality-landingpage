"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import * as motion from "motion/react-client";
import Image from "next/image";

// setGridSize는 뒤에 그리드의 사이즈를 조절해주는 기능을 위해 있는것.
// type SliderProps = {
//   setGridSize: React.Dispatch<React.SetStateAction<number>>;
// };

type ImageSet = {
  before: string;
  after: string;
};

const imageSets: ImageSet[] = [
  {
    before: "/images/beforeAfters/before1.webp",
    after: "/images/beforeAfters/after1.webp",
  },
  {
    before: "/images/beforeAfters/before2.webp",
    after: "/images/beforeAfters/after2.webp",
  },
  {
    before: "/images/beforeAfters/before3.webp",
    after: "/images/beforeAfters/after3.webp",
  },
  {
    before: "/images/beforeAfters/before4.webp",
    after: "/images/beforeAfters/after4.webp",
  },
  {
    before: "/images/beforeAfters/before5.webp",
    after: "/images/beforeAfters/after5.webp",
  },
];

// export default function BeforeAfterCarousel({ setGridSize }: SliderProps) {
export default function BeforeAfterCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const animationFrameRef = useRef<number | null>(null);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    if (animationFrameRef.current !== null) return;

    animationFrameRef.current = requestAnimationFrame(() => {
      const rect = containerRef.current!.getBoundingClientRect();
      let newPosition = ((e.clientX - rect.left) / rect.width) * 100;
      newPosition = Math.max(0, Math.min(100, newPosition));
      setSliderPosition(newPosition);
      animationFrameRef.current = null;
    });
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      // setGridSize(sliderPosition);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, isDragging, sliderPosition]);

  const handlePrev = () => {
    setDirection(-1);
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev - 1 + imageSets.length) % imageSets.length);
    setSliderPosition(50);
  };

  const handleNext = () => {
    setDirection(1);
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev + 1) % imageSets.length);
    setSliderPosition(50);
  };

  // 2) Provide a min-height to prevent jumping.
  // Adjust to match your intended image height if you know it.

  const renderSlide = (index: number) => (
    <div className="relative w-full h-full">
      {/* Before image */}
      <Image
        src={imageSets[index].before}
        width={1980}
        height={1080}
        alt="Before"
        className="w-full h-full object-cover"
      />
      {/* After image */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          transition: isDragging ? "none" : "clip-path 0.1s ease-out",
        }}
      >
        <h1 className="absolute md:text-[5rem] text-3xl font-bold opacity-85 select-none p-5 text-black bottom-0">
          VISUALITY AI
        </h1>
        <Image
          src={imageSets[index].after}
          width={1980}
          height={1080}
          alt="After"
          className="w-full h-full object-cover object-left"
        />
      </div>
    </div>
  );

  // You can tweak the transition to be more "springy" or alter easing/duration.
  // For example: transition={{ type: "spring", damping: 20, stiffness: 200 }}
  // That would give it a more bouncy feel.
  const transitionConfig = {
    duration: 1,
    ease: "easeOut",
  };

  return (
    <section className="flex w-full justify-center mt-20 mb-44 min-h-96">
      <div className="w-full flex flex-col justify-center items-center max-w-5xl">
        <div className="flex justify-center items-center">
          {/* Previous slide button */}
          <button
            onClick={handlePrev}
            className="border border-transparent hover:border-white/70 rounded-2xl p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 26 25"
              strokeWidth="3"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Slider container */}
          <motion.div
            ref={containerRef}
            className="relative w-full overflow-hidden select-none m-2 rounded-lg"
            style={{ minHeight: 600 }} // <-- ensure stable height
          >
            {/**
             * "Exit" animation on the previous slide
             * Renders only when prevSlide != null, then we animate it out.
             */}
            {prevSlide !== null && (
              <motion.div
                initial={{ opacity: 1, x: 0, scale: 1 }}
                animate={{ opacity: 0, x: -direction * 30, scale: 0.95 }}
                transition={transitionConfig}
                style={{ position: "absolute", width: "100%" }}
              >
                {renderSlide(prevSlide)}
              </motion.div>
            )}

            {/**
             * "Enter" animation on the current slide
             * We fade/slide it in from the opposite side.
             */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: direction * 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={transitionConfig}
              onAnimationComplete={() => setPrevSlide(null)}
              style={{ position: "relative", width: "100%" }}
            >
              {renderSlide(currentSlide)}
            </motion.div>

            {/* Slider handle */}
            <div
              role="button"
              tabIndex={0}
              className="absolute top-0 h-full cursor-ew-resize"
              style={{
                left: `${sliderPosition}%`,
                transition: isDragging ? "none" : "left 0.1s ease-out",
              }}
              onMouseDown={handleMouseDown}
            >
              <div className="w-[4px] h-full flex bg-black/60 hover:bg-black active:bg-black opacity-80">
                <div className="flex self-center -ml-[22px] text-black/60 hover:text-black active:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-6 h-6 rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Next slide button */}
          <button
            onClick={handleNext}
            className="border border-transparent hover:border-white/70 rounded-2xl p-1 flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 26 25"
              strokeWidth="3"
              stroke="currentColor"
              className="w-8 h-8 rotate-180"
              role="button"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
