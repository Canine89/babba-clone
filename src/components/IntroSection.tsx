'use client';

import Image from 'next/image';

const introImages = [
  { src: '/images/intro_01.jpg', alt: '스마트 클래스 소개 이미지 1' },
  { src: '/images/intro_02.jpg', alt: '스마트 클래스 소개 이미지 2' },
  { src: '/images/intro_03.jpg', alt: '스마트 클래스 소개 이미지 3' },
  { src: '/images/intro_04.jpg', alt: '스마트 클래스 소개 이미지 4' },
  { src: '/images/intro_05.jpg', alt: '스마트 클래스 소개 이미지 5' },
  { src: '/images/intro_06.jpg', alt: '스마트 클래스 소개 이미지 6' },
  { src: '/images/intro_07.jpg', alt: '스마트 클래스 소개 이미지 7' }
];

export default function IntroSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="introImage">
          {introImages.map((image, index) => (
            <div key={index} className="w-full mb-0">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={600}
                className="w-full h-auto block"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}