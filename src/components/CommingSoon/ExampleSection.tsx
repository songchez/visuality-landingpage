"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ImageSet {
  before: string;
  after: string;
}

export default function ImageComparison() {
  const [sliderPosition, setSliderPosition] = useState(50); // 슬라이더 위치 (0-100%)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const imageSet: ImageSet = {
    before: "/images/examples/2.png",
    after: "/images/examples/3.png",
  };

  // 슬라이더 위치 계산 함수
  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPosition(percentage);
  };

  // 마우스 이벤트 핸들러
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // 마우스 벗어날 때 드래그 종료
  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  return (
    <div className="max-w-7xl rounded-md w-full p-4 md:p-20">
      <div className="mb-10">
        <Image
          className="rounded-2xl"
          draggable="false"
          src="/images/examples/1.jpeg"
          width={1980}
          height={1080}
          alt="Request image"
          priority
        />
      </div>
      <div
        className="relative w-full h-[50vh] md:h-[80vh] select-none rounded-2xl"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Before image */}
        <Image
          draggable="false"
          src={imageSet.before}
          fill
          alt="Before"
          className="object-cover rounded-2xl"
          priority
        />

        {/* After image with clip-path */}
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{
            clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
            transition: isDragging ? "none" : "clip-path 0.1s ease-out",
          }}
        >
          <Image
            draggable="false"
            src={imageSet.after}
            fill
            alt="After"
            className="object-cover rounded-2xl"
            priority
          />
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 h-full w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 5l-7 7 7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
