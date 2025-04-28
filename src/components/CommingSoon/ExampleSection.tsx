"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ImageSet {
  before: string;
  middle: string;
  after: string;
}

export default function ExampleSection() {
  const [index] = useState(0); // 단일 이미지 세트만 사용하므로 index 고정
  const [sliderPosition1, setSliderPosition1] = useState(33); // 첫 번째 슬라이더 위치
  const [sliderPosition2, setSliderPosition2] = useState(66); // 두 번째 슬라이더 위치
  const [draggingSlider, setDraggingSlider] = useState<null | 1 | 2>(null); // 현재 드래그 중인 슬라이더
  const containerRef = useRef<HTMLDivElement>(null);

  const imageSets: ImageSet[] = [
    {
      before: "/images/examples/1.jpeg",
      middle: "/images/examples/2.png",
      after: "/images/examples/3.png",
    },
  ];

  // 슬라이더 위치 계산 함수
  const updateSliderPosition = (clientX: number, slider: 1 | 2) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    let percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));

    if (slider === 1) {
      // 슬라이더 1은 슬라이더 2보다 왼쪽에 있어야 함
      percentage = Math.min(percentage, sliderPosition2 - 5); // 최소 간격 5%
      setSliderPosition1(percentage);
    } else {
      // 슬라이더 2는 슬라이더 1보다 오른쪽에 있어야 함
      percentage = Math.max(percentage, sliderPosition1 + 5); // 최소 간격 5%
      setSliderPosition2(percentage);
    }
  };

  // 마우스 이벤트 핸들러
  const handleMouseDown = (slider: 1 | 2) => (e: React.MouseEvent) => {
    setDraggingSlider(slider);
    updateSliderPosition(e.clientX, slider);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingSlider) {
      updateSliderPosition(e.clientX, draggingSlider);
    }
  };

  const handleMouseUp = () => {
    setDraggingSlider(null);
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = (slider: 1 | 2) => (e: React.TouchEvent) => {
    setDraggingSlider(slider);
    updateSliderPosition(e.touches[0].clientX, slider);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (draggingSlider) {
      updateSliderPosition(e.touches[0].clientX, draggingSlider);
    }
  };

  const handleTouchEnd = () => {
    setDraggingSlider(null);
  };

  // 마우스 벗어날 때 드래그 종료
  useEffect(() => {
    const handleGlobalMouseUp = () => setDraggingSlider(null);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  return (
    <div className="max-w-7xl rounded-md w-full p-4 md:p-20">
      <h1 className="w-full flex justify-left items-left text-3xl py-3">
        Before & After
      </h1>
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
          src={imageSets[index].before}
          fill
          alt="Before"
          className="object-cover"
          priority
        />

        {/* Middle image with clip-path */}
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{
            clipPath: `polygon(${sliderPosition1}% 0, ${sliderPosition2}% 0, ${sliderPosition2}% 100%, ${sliderPosition1}% 100%)`,
            transition: draggingSlider ? "none" : "clip-path 0.1s ease-out",
          }}
        >
          <Image
            draggable="false"
            src={imageSets[index].middle}
            fill
            alt="Middle"
            className="object-cover"
            priority
          />
        </div>

        {/* After image with clip-path */}
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{
            clipPath: `polygon(${sliderPosition2}% 0, 100% 0, 100% 100%, ${sliderPosition2}% 100%)`,
            transition: draggingSlider ? "none" : "clip-path 0.1s ease-out",
          }}
        >
          <Image
            draggable="false"
            src={imageSets[index].after}
            fill
            alt="After"
            className="object-cover"
            priority
          />
        </div>

        {/* Slider 1 handle */}
        <div
          className="absolute top-0 h-full w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition1}%` }}
          onMouseDown={handleMouseDown(1)}
          onTouchStart={handleTouchStart(1)}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-800"
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

        {/* Slider 2 handle */}
        <div
          className="absolute top-0 h-full w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition2}%` }}
          onMouseDown={handleMouseDown(2)}
          onTouchStart={handleTouchStart(2)}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-800"
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
