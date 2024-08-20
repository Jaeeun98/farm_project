## 낙농체험 웹사이트, 위팜 - 프론트엔드 

![홈](https://github.com/user-attachments/assets/698a7c0e-2cae-404c-a7dc-6955a725ce0c)

배포 URL : [http://144.24.95.101/](http://wefarm.kro.kr/)




## 프로젝트 소개 

- 전국의 농장 및 목장 체험을 연결하여 소비자들이 손쉽게 예약할 수 있는 웹 사이트
- 농림축산식품부 공공데이터 활용 창업경진대회 출마
- 개발 기간: 2024.06




## 주요 기능 

- 농장 및 목장 체험 예약 및 관리 
- 각 농장 및 목장 체험 리뷰 & 별점 확인
- 날짜별, 체험인원별 검색




## 개발환경 & 기술스택 

기술스택 : Next.js, Typescript, Tailwind, NextAuth, ContextAPI
협업 툴 : Discord, Swagger, Github
디자인 : Figma


- Next.js: 사용자 중심의 웹 사이트이기 떄문에 검색엔진 최적화와 빠른 로딩에 좋은 Next.js를 선택
- ContextAPI: 복잡한 상태를 관리해야 하는 것이 아니였기에 간단한 구현을 위해 사용  





## 프로젝트 구조 

project-root/
├── .gitattributes
├── .gitignore
├── README.md
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   ├── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth.ts
│   │   │   ├── farm.ts
│   │   │   ├── index.ts
│   │   │   ├── user.ts
│   │   ├── detail/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── mypage/
│   │   │   └── page.tsx
│   │   ├── reservation_completed/
│   │   │   └── page.tsx
│   │   ├── reservations/
│   │   │   └── page.tsx
│   │   ├── search_list/
│   │   │   └── page.tsx
│   │   ├── sign_up/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── components/
│   │   ├── common/
│   │   ├── detail/
│   │   ├── login/
│   │   ├── main/
│   │   ├── mypage/
│   │   ├── reservation_completed/
│   │   ├── reservations/
│   │   ├── search_list/
│   │   ├── ui/
│   │   └── sign_up_contents.tsx
│   ├── context/
│   │   ├── farm_search_context.tsx
│   │   ├── pay_context.tsx
│   │   └── session_context.tsx
│   ├── pages/api/auth/
│   ├── types/
│   ├── utils/
│   └── middleware.ts





회고록: https://coding-je.com/entry/%ED%9A%8C%EA%B3%A0%EB%A1%9D-%EB%86%8D%EB%A6%BC%EC%B6%95%EC%82%B0%EC%8B%9D%ED%92%88%EB%B6%80-%EA%B3%B5%EA%B3%B5%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%99%9C%EC%9A%A9-%EC%B0%BD%EC%97%85%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C-%ED%9B%84%EA%B8%B0





