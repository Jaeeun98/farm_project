## 낙농체험 웹사이트, 위팜 - 프론트엔드 

![홈](https://github.com/user-attachments/assets/698a7c0e-2cae-404c-a7dc-6955a725ce0c)

배포 URL : [http://144.24.95.101/](http://wefarm.kro.kr/)


<br>
   
## 프로젝트 소개 

- 전국의 농장 및 목장 체험을 연결하여 소비자들이 손쉽게 예약할 수 있는 웹 사이트
- 농림축산식품부 공공데이터 활용 창업경진대회 출마
- 개발 기간: 2024.06

<br>



## 주요 기능 

- 농장 및 목장 체험 예약 및 관리 
- 각 농장 및 목장 체험 리뷰 & 별점 확인
- 날짜별, 체험인원별 검색

<br>



## 개발환경 & 기술스택 

- 기술스택 : Next.js, Typescript, Tailwind, NextAuth, ContextAPI
  - Next.js: 사용자 중심의 웹 사이트이기 떄문에 검색엔진 최적화와 빠른 로딩에 좋은 Next.js를 선택
  - ContextAPI: 복잡한 상태를 관리해야 하는 것이 아니였기에 간단한 구현을 위해 사용 
- 협업 툴 : Discord, Swagger, Github
- 디자인 : Figma


<br>


## 핵심내용

- NextAuth를 사용해 안전한 로그인 및 회원가입 기능 구현 <br>
   localStorage에 사용자 정보를 저장하는 방법을 고려했으나, 보안에 취약하다는 것을 인식하고 NextAuth를 도입해 안전한 인증 시스템을 구축.
   NextAuth의 Credentials 기능을 사용해 백엔드와 연동된 로그인 및 회원가입 기능을 구현.
   API 호출 시 토큰이 적용되지 않는 문제가 발생하였으며, 서버 컴포넌트에서 클라이언트 측 세션 정보를 사용하는 과정에서 발생한 에러를 해결하기 위해 getServerSession을 사용하여 서버 컴포넌트에서도 토큰을 받아올 수 있도록 설정.

- Context API를 사용해 전역 상태 관리 및 컴포넌트 간 데이터 공유 최적화 <br>
   Context API를 도입해 SessionProvider를 통해 사용자 인증 정보를 전역적으로 관리.
   SessionProvider로 앱 전체를 감싸 모든 자식 컴포넌트가 React Context를 통해 인증 정보에 쉽게 접근할 수 있도록 설정하여 prop drilling을 방지하고, 각 컴포넌트에서 중복된 prop 전달 없이 인증 상태를 실시간으로 참조 가능하도록 함.
   세션 정보의 변경이나 세션 만료 상태 변화 발생 시 해당 상태가 전역적으로 자동 업데이트되도록 구현하여 인증 상태 관리의 복잡성을 줄이고 애플리케이션 전반에서 유지보수성을 향상시킴.

- Google Maps API를 활용해 사용자에게 각 농장의 위치를 직관적으로 제공 <br>
   사용자가 농장 위치를 직관적으로 확인할 수 있도록 Google Maps API를 활용해 각 농장의 위치 정보를 지도에 표시하는 기능을 추가.
   사용자는 지도에서 해당 농장을 클릭해 정보를 쉽게 확인할 수 있음.




<br>




## 프로젝트 구조 

```
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

```



회고록: [농림축산식품부 공공데이터 활용 창업경진대회 후기](https://coding-je.com/entry/%ED%9A%8C%EA%B3%A0%EB%A1%9D-%EB%86%8D%EB%A6%BC%EC%B6%95%EC%82%B0%EC%8B%9D%ED%92%88%EB%B6%80-%EA%B3%B5%EA%B3%B5%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%99%9C%EC%9A%A9-%EC%B0%BD%EC%97%85%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C-%ED%9B%84%EA%B8%B0)





