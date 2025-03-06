import { useState, useRef, useEffect, useCallback } from "react";

type SliderProps = {
  beforeSrc: string;
  afterSrc: string;
};

export default function BeforeAfterSection({
  beforeSrc,
  afterSrc,
}: SliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));
    setSliderPosition(newPosition);
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
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, isDragging]);

  return (
    <div className="flex w-full justify-center my-10">
      <div className="w-full h-full flex flex-col justify-center items-center max-w-5xl">
        <div className="flex justify-center items-center">
          <button className="border border-transparent hover:border-white/70 rounded-2xl p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 26 25"
              strokeWidth="3"
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <div
            ref={containerRef}
            className="relative w-full overflow-hidden select-none m-2 rounded-lg"
          >
            {/* INSIDE */}
            <h1 className="absolute text-[6rem] font-bold opacity-40 select-none p-5 bottom-0">
              VISUALITY AI
            </h1>
            {/* Before 이미지 */}
            <img
              src={beforeSrc}
              alt="Before"
              className="w-full h-full object-cover"
            />
            {/* After 이미지 (클리핑 처리) */}
            <div
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* OUTSIDE */}
              <h1 className="absolute text-[6rem] text-nowrap font-bold opacity-85 select-none p-5 text-black bottom-0">
                VISUALITY AI
              </h1>

              <img
                src={afterSrc}
                alt="After"
                className="w-full h-full object-cover object-left"
              />
            </div>
            {/* 슬라이더 핸들 */}
            <div
              role="button"
              tabIndex={0}
              className="absolute top-0 h-full"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
            >
              <div className="w-[4px] h-full flex bg-black/80 text-black/80 hover:text-blue-900 active:text-blue-900 hover:bg-blue-900 active:bg-blue-900 opacity-80 cursor-ew-resize">
                <div className="flex self-center justify-self-center -ml-[22px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="size-6"
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
                    className="size-6 rotate-180"
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
          </div>
          <button className="border border-transparent hover:border-white/70 rounded-2xl p-1 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 26 25"
              strokeWidth="3"
              stroke="currentColor"
              className="size-8 rotate-180"
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
