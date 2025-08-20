'use client';

import Image from 'next/image';

const bannerImages = [
  {
    id: 1,
    src: '/images/pc_main_1.png',
    alt: '바빠 스마트 클래스 메인 배너 1',
    title: '바빠 스마트 클래스',
    description: '초등학생을 위한 맞춤형 학습 프로그램'
  },
  {
    id: 2,
    src: '/images/pc_main_2.png',
    alt: '바빠 스마트 클래스 메인 배너 2',
    title: '수학 전문 교육',
    description: '체계적인 수학 학습 시스템'
  },
  {
    id: 3,
    src: '/images/pc_main_3.png',
    alt: '바빠 스마트 클래스 메인 배너 3',
    title: '문해력 향상',
    description: '독해와 어휘력 집중 향상'
  },
  {
    id: 4,
    src: '/images/pc_main_4.png',
    alt: '바빠 스마트 클래스 메인 배너 4',
    title: '선생님 지원',
    description: '교사를 위한 전문 자료'
  },
  {
    id: 5,
    src: '/images/pc_main_5.png',
    alt: '바빠 스마트 클래스 메인 배너 5',
    title: '학습 진단',
    description: '개별 맞춤 학습 진단'
  },
  {
    id: 6,
    src: '/images/pc_main_6.png',
    alt: '바빠 스마트 클래스 메인 배너 6',
    title: '온라인 수업',
    description: '언제 어디서나 학습 가능'
  }
];

export default function Banner() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bannerImages.map((banner) => (
            <div
              key={banner.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200">
                {/* Placeholder for banner image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">{banner.id}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{banner.title}</h3>
                    <p className="text-sm text-gray-600">{banner.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}