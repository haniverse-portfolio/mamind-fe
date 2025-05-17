# 마마인드 (Mamind) - 심리 상담 중개 플랫폼

https://youtube.com/shorts/b7zy3Oqc0bs

마마인드는 사용자의 심리 상태를 진단하고, 자가 관리 및 전문 상담사 연결을 제공하는 심리 상담 중개 플랫폼입니다. 사용자는 심리 테스트를 통해 자신의 상태를 파악하고, 개인적 노력이나 전문가의 도움을 통해 심리 건강을 관리할 수 있습니다.

## 주요 기능

### 심리 테스트 기능

- 다양한 심리 상태(우울증, 불안 등)에 대한 전문적인 진단 테스트
- 사용자 친화적인 인터페이스로 쉽게 테스트 진행
- 단계별 진행 상황 표시 및 직관적인 응답 방식

### 심리 진단 결과 확인

- 테스트 결과에 대한 상세한 분석 및 시각화
- 사용자의 심리 상태에 대한 명확한 설명
- 결과 기반 맞춤형 추천 제공

### 개인적 노력으로 심리 극복

- 일일 목표 설정 및 관리
- 심리 상태 개선을 위한 활동 추천
- 진행 상황 추적 및 그래프 시각화

### 외부 노력(상담 중개)으로 심리 극복

- 사용자의 상태에 맞는 전문 상담사 추천
- 상담사 정보 및 리뷰 제공
- 간편한 상담 예약 시스템

## 기술 스택

### 프론트엔드

- [React](https://reactjs.org/) - 사용자 인터페이스 구축을 위한 JavaScript 라이브러리
- [React Router](https://reactrouter.com/) - 클라이언트 사이드 라우팅
- [Mantine UI](https://mantine.dev/) - 모던 React UI 컴포넌트 라이브러리
- [Recoil](https://recoiljs.org/) - 상태 관리 라이브러리
- [Styled Components](https://styled-components.com/) - 컴포넌트 기반 스타일링
- [Tabler Icons](https://tabler-icons.io/) - 아이콘 라이브러리

### 개발 도구

- [Create React App](https://create-react-app.dev/) - React 애플리케이션 초기 설정
- [Tailwind CSS](https://tailwindcss.com/) - 유틸리티 우선 CSS 프레임워크
- [Axios](https://axios-http.com/) - HTTP 클라이언트

## 프로젝트 구조

```
mamind-fe/
├── public/             # 정적 파일
├── src/                # 소스 코드
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── config/         # 설정 파일
│   ├── navigation/     # 네비게이션 관련 컴포넌트
│   ├── routes/         # 페이지 컴포넌트
│   │   ├── main/       # 메인 페이지 컴포넌트
│   │   │   ├── goal/   # 목표 관리 관련 컴포넌트
│   │   ├── onBoard/    # 온보딩 페이지 컴포넌트
│   ├── state/          # 상태 관리 (Recoil)
│   ├── static/         # 정적 자원
│   ├── utils/          # 유틸리티 함수
│   ├── App.js          # 앱 진입점
│   └── index.js        # React 렌더링 진입점
├── .env                # 환경 변수
├── package.json        # 의존성 및 스크립트
├── tailwind.config.js  # Tailwind CSS 설정
└── postcss.config.js   # PostCSS 설정
```

## 주요 페이지 설명

### 로그인 페이지 (`/login`)

- 사용자 인증 및 로그인 기능
- 소셜 로그인 지원

### 테스트 페이지 (`/test`)

- 심리 상태 진단을 위한 테스트 진행
- 단계별 질문 및 응답 입력

### 결과 페이지 (`/result`)

- 테스트 결과 시각화 및 분석
- 사용자 심리 상태에 대한 설명

### 추천 페이지 (`/recommend`)

- 사용자 상태에 맞는 활동 및 상담사 추천

### 목표 페이지 (`/goal`)

- 일일 목표 설정 및 관리
- 진행 상황 추적

### 상담 페이지 (`/consult`)

- 상담사 정보 및 리뷰 확인
- 상담 예약 및 관리

## 시작하기

### 개발 환경 설정

1. 저장소 클론

```bash
git clone [repository-url]
cd mamind-fe
```

2. 의존성 설치

```bash
npm install
# 또는
yarn install
```

3. 개발 서버 실행

```bash
npm start
# 또는
yarn start
```

4. 브라우저에서 확인

- [http://localhost:3000](http://localhost:3000)

## 빌드 및 배포

프로덕션 빌드를 생성하려면:

```bash
npm run build
# 또는
yarn build
```

빌드된 파일은 `build` 디렉토리에 생성됩니다.

# Mamind - Psychological Counseling Platform

https://youtube.com/shorts/b7zy3Oqc0bs

MaMind is a psychological counseling platform that diagnoses users' mental states and provides self-management and professional counselor connections. Users can understand their condition through psychological tests and manage their mental health through personal efforts or professional help.

## Key Features

### Psychological Testing

- Professional diagnostic tests for various mental states (depression, anxiety, etc.)
- User-friendly interface for easy test completion
- Step-by-step progress indication and intuitive response methods

### Psychological Diagnosis Results

- Detailed analysis and visualization of test results
- Clear explanation of the user's mental state
- Customized recommendations based on results

### Personal Efforts for Mental Health

- Daily goal setting and management
- Recommended activities for improving mental state
- Progress tracking and graph visualization

### External Support (Counseling Mediation)

- Professional counselor recommendations based on user's condition
- Counselor information and reviews
- Simple counseling reservation system

## Technology Stack

### Frontend

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [React Router](https://reactrouter.com/) - Client-side routing
- [Mantine UI](https://mantine.dev/) - Modern React UI component library
- [Recoil](https://recoiljs.org/) - State management library
- [Styled Components](https://styled-components.com/) - Component-based styling
- [Tabler Icons](https://tabler-icons.io/) - Icon library

### Development Tools

- [Create React App](https://create-react-app.dev/) - Initial React application setup
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Axios](https://axios-http.com/) - HTTP client

## Project Structure

```
mamind-fe/
├── public/             # Static files
├── src/                # Source code
│   ├── components/     # Reusable components
│   ├── config/         # Configuration files
│   ├── navigation/     # Navigation-related components
│   ├── routes/         # Page components
│   │   ├── main/       # Main page components
│   │   │   ├── goal/   # Goal management components
│   │   ├── onBoard/    # Onboarding page components
│   ├── state/          # State management (Recoil)
│   ├── static/         # Static resources
│   ├── utils/          # Utility functions
│   ├── App.js          # App entry point
│   └── index.js        # React rendering entry point
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## Main Pages Description

### Login Page (`/login`)

- User authentication and login functionality
- Social login support

### Test Page (`/test`)

- Psychological state diagnosis tests
- Step-by-step questions and response input

### Result Page (`/result`)

- Test result visualization and analysis
- Explanation of user's psychological state

### Recommendation Page (`/recommend`)

- Activity and counselor recommendations based on user's state

### Goal Page (`/goal`)

- Daily goal setting and management
- Progress tracking

### Consultation Page (`/consult`)

- Counselor information and reviews
- Counseling reservation and management

## Getting Started

### Development Environment Setup

1. Clone the repository

```bash
git clone [repository-url]
cd mamind-fe
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run development server

```bash
npm start
# or
yarn start
```

4. View in browser

- [http://localhost:3000](http://localhost:3000)

## Build and Deploy

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be created in the `build` directory.
