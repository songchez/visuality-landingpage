import { useState, useRef, useEffect, useCallback } from "react";
import * as motion from "motion/react-client";

type SliderProps = {
  setGridSize: React.Dispatch<React.SetStateAction<number>>;
};

type ImageSet = {
  before: string;
  after: string;
};

const imageSets: ImageSet[] = [
  {
    before: "images/beforeAfters/before1.webp",
    after: "images/beforeAfters/after1.webp",
  },
  {
    before: "images/beforeAfters/before2.webp",
    after: "images/beforeAfters/after2.webp",
  },
  {
    before: "images/beforeAfters/before3.webp",
    after: "images/beforeAfters/after3.webp",
  },
  {
    before: "images/beforeAfters/before4.webp",
    after: "images/beforeAfters/after4.webp",
  },
  {
    before: "images/beforeAfters/before5.webp",
    after: "images/beforeAfters/after5.webp",
  },
];

export default function BeforeAfterCarousel({ setGridSize }: SliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  // direction: 1이면 다음, -1이면 이전 전환 효과
  const [direction, setDirection] = useState(1);
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
      setGridSize(sliderPosition);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, isDragging, setGridSize, sliderPosition]);

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

  // 렌더링할 슬라이드 내용. After 이미지는 clip-path를 사용하여 sliderPosition에 따라 노출 영역을 결정합니다.
  const renderSlide = (index: number) => (
    <div className="relative w-full">
      {/* 배경 타이포그래피 */}
      <h1 className="absolute text-[6rem] font-bold opacity-40 select-none p-5 bottom-0">
        VISUALITY AI
      </h1>
      {/* Before 이미지 */}
      <img
        src={imageSets[index].before}
        alt="Before"
        className="w-full h-auto object-cover"
      />
      {/* After 이미지 (clip-path 적용) */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          transition: isDragging ? "none" : "clip-path 0.1s ease-out",
        }}
      >
        <h1 className="absolute text-[6rem] font-bold opacity-85 select-none p-5 text-black bottom-0">
          VISUALITY AI
        </h1>
        <img
          src={imageSets[index].after}
          alt="After"
          className="w-full h-full object-cover object-left"
        />
      </div>
    </div>
  );

  return (
    <div className="flex w-full justify-center my-10">
      <div className="w-full flex flex-col justify-center items-center max-w-5xl">
        <div className="flex justify-center items-center">
          {/* 이전 슬라이드 버튼 */}
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

          {/* 슬라이드 컨테이너 */}
          <motion.div
            ref={containerRef}
            className="relative w-full overflow-hidden select-none m-2 rounded-lg"
          >
            {/* 이전 슬라이드 (exit 애니메이션) */}
            {prevSlide !== null && (
              <motion.div
                initial={{ opacity: 1, x: 0, scale: 1 }}
                animate={{ opacity: 0, x: -direction * 50, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                style={{ position: "absolute", width: "100%" }}
              >
                {renderSlide(prevSlide)}
              </motion.div>
            )}
            {/* 현재 슬라이드 (enter 애니메이션) */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: direction * 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              onAnimationComplete={() => setPrevSlide(null)}
              style={{ position: "relative", width: "100%" }}
            >
              {renderSlide(currentSlide)}
            </motion.div>
            {/* 슬라이더 핸들 (After 이미지 클리핑 조절) */}
            <div
              role="button"
              tabIndex={0}
              className="absolute top-0 h-full"
              style={{
                left: `${sliderPosition}%`,
                transition: isDragging ? "none" : "left 0.1s ease-out",
              }}
              onMouseDown={handleMouseDown}
            >
              <div className="w-[4px] h-full flex bg-black/60 hover:bg-black active:bg-black opacity-80 cursor-ew-resize">
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

          {/* 다음 슬라이드 버튼 */}
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
    </div>
  );
}
