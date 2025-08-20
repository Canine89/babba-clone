'use client';

import { useState } from 'react';
import Link from 'next/link';

const menuItems = [
  {
    name: '추천상품',
    href: '/recommended',
    subMenus: []
  },
  {
    name: '수학',
    href: '/math',
    subMenus: [
      { name: '초등 1학년', href: '/math/grade1' },
      { name: '초등 2학년', href: '/math/grade2' },
      { name: '초등 3학년', href: '/math/grade3' },
      { name: '초등 4학년', href: '/math/grade4' },
      { name: '초등 5학년', href: '/math/grade5' },
      { name: '초등 6학년', href: '/math/grade6' },
    ]
  },
  {
    name: '문해력',
    href: '/literacy',
    subMenus: [
      { name: '독해', href: '/literacy/reading' },
      { name: '어휘', href: '/literacy/vocabulary' },
      { name: '작문', href: '/literacy/writing' },
    ]
  },
  {
    name: '부교재',
    href: '/supplementary',
    subMenus: [
      { name: '국어', href: '/supplementary/korean' },
      { name: '영어', href: '/supplementary/english' },
      { name: '사회', href: '/supplementary/social' },
      { name: '과학', href: '/supplementary/science' },
    ]
  },
  {
    name: '바빠시리즈',
    href: '/babba-series',
    subMenus: [
      { name: '바빠 연산법', href: '/babba-series/calculation' },
      { name: '바빠 도형', href: '/babba-series/geometry' },
      { name: '바빠 응용', href: '/babba-series/application' },
    ]
  },
  {
    name: '선생님자료',
    href: '/teacher-resources',
    subMenus: [
      { name: '교안', href: '/teacher-resources/lesson-plans' },
      { name: '시험지', href: '/teacher-resources/test-papers' },
      { name: '참고자료', href: '/teacher-resources/references' },
    ]
  }
];

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-center">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className="block px-4 py-4 text-white hover:text-blue-200 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
                
                {item.subMenus.length > 0 && (
                  <div
                    className={`absolute top-full left-0 bg-white shadow-lg border border-gray-200 min-w-[180px] z-50 transition-all duration-200 ${
                      activeMenu === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                  >
                    <ul className="py-2">
                      {item.subMenus.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}