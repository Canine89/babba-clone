# 바빠 스마트 클래스 클론

Next.js와 TypeScript를 사용하여 구현한 바빠 스마트 클래스 웹사이트 클론입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15.1.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **이미지 최적화**: Next.js Image
- **배포**: Vercel

## 📦 주요 기능

- **반응형 헤더**: 로고, 연락처, 소셜미디어 링크
- **드롭다운 네비게이션**: 6개 메뉴와 서브메뉴
- **이미지 캐러셀**: 자동/수동 슬라이드 (5개 이미지)
- **소개 섹션**: 7개 연속 이미지 표시
- **반응형 푸터**: 회사정보, 링크, 정책
- **완전 반응형 디자인**: 모바일/태블릿/데스크탑 지원

## 🛠 개발 및 배포

### 로컬 개발
```bash
npm install
npm run dev
```

### 빌드 및 배포
```bash
npm run build
npm start
```

### 코드 품질 검사
```bash
npm run lint
npx tsc --noEmit
```

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── components/
    ├── Header.tsx
    ├── Navigation.tsx
    ├── Carousel.tsx
    ├── IntroSection.tsx
    └── Footer.tsx
```

## 🖼 이미지 에셋

- **로고**: logo.png
- **캐러셀**: pc_main_01.png ~ pc_main_05.png
- **소개**: intro_01.jpg ~ intro_07.jpg

## 📱 반응형 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Vercel 배포 설정

프로젝트는 Vercel에 최적화되어 있으며, 자동 배포가 설정되어 있습니다.

## 📄 라이선스

이 프로젝트는 교육 목적으로 제작된 클론 사이트입니다.