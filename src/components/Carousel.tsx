'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const carouselImages = [
  {
    src: '/images/pc_main_01.png',
    alt: '바빠 스마트 클래스 1'
  },
  {
    src: '/images/pc_main_02.png',
    alt: '바빠 스마트 클래스 2'
  },
  {
    src: '/images/pc_main_03.png',
    alt: '바빠 스마트 클래스 3'
  },
  {
    src: '/images/pc_main_04.png',
    alt: '바빠 스마트 클래스 4'
  },
  {
    src: '/images/pc_main_05.png',
    alt: '바빠 스마트 클래스 5'
  }
];

const menuButtons = [
  "바빠 스마트 클래스",
  "바빠 수학 전문 교실", 
  "바빠 초등 문해력 교실",
  "교사 성장 프로그램",
  "가입 상담 문의"
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedButton, setSelectedButton] = useState(1); // 기본으로 "바빠 수학 전문 교실" 선택

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5초마다 자동 슬라이드

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <section className="relative w-full bg-white">
      {/* 상단 파도 모양 */}
      <div className="absolute top-0 left-0 w-full z-10">
        <svg viewBox="0 0 1200 40" className="w-full h-10">
          <path
            d="M0,40 Q150,10 300,30 T600,20 T900,30 T1200,40 L1200,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto">
        {/* 메인 이미지 영역 */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselImages.map((image, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          {/* 이전/다음 버튼 */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity z-10"
            aria-label="이전 이미지"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity z-10"
            aria-label="다음 이미지"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* 하단 5개 버튼 (인디케이터 대체) */}
        <div className="bg-gray-100 py-6">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="flex justify-center space-x-4">
              {menuButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedButton(index);
                    setCurrentIndex(index);
                  }}
                  className={`px-6 py-3 rounded font-medium transition-colors ${
                    selectedButton === index
                      ? 'bg-black text-white'
                      : 'bg-white text-black border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}