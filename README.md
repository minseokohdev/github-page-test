# 🚀 React + Ant Design + Tailwind CSS 기술 블로그

현대적인 웹 기술 스택으로 구축된 정적 기술 블로그입니다. 마크다운 파일을 기반으로 한 자동 포스트 시스템과 하이브리드 빌드 방식을 제공합니다.

## ✨ 주요 특징

- 🎨 **현대적 디자인**: Ant Design + Tailwind CSS 통합
- 📝 **마크다운 기반**: MD 파일로 간편한 포스트 작성
- 🔄 **하이브리드 시스템**: 개발/프로덕션 환경 최적화
- 📱 **완전 반응형**: 모든 디바이스에서 완벽한 경험
- ⚡ **빠른 로딩**: 정적 사이트 생성으로 최적화
- 🎯 **SEO 친화적**: 검색 엔진 최적화
- 🌙 **다크 모드 준비**: 시스템 테마 자동 감지
- 🎭 **부드러운 애니메이션**: 사용자 경험 향상

## 🛠️ 기술 스택

### Frontend
- **React 19** - 최신 React 기능 활용
- **TypeScript** - 타입 안전성 보장
- **Vite** - 빠른 개발 환경
- **React Router** - 클라이언트 사이드 라우팅

### UI/UX
- **Ant Design 5** - 엔터프라이즈급 UI 컴포넌트
- **Tailwind CSS 3** - 유틸리티 우선 CSS 프레임워크
- **@ant-design/icons** - 아이콘 라이브러리

### 마크다운 처리
- **react-markdown** - 마크다운 렌더링
- **gray-matter** - Frontmatter 파싱
- **remark-gfm** - GitHub Flavored Markdown
- **rehype-highlight** - 코드 하이라이팅

### 기타
- **date-fns** - 날짜 처리
- **web-vitals** - 성능 모니터링

## 📁 프로젝트 구조

```
github-page-test/
├── public/
│   ├── posts/                    # 📝 마크다운 포스트 파일들
│   │   ├── css-grid-layout.md
│   │   ├── javascript-async.md
│   │   ├── new-post-example.md
│   │   └── react-hooks-guide.md
│   ├── images/                   # 🖼️ 이미지 리소스
│   └── _redirects               # 🔄 SPA 라우팅 설정
├── src/
│   ├── components/              # ⚛️ React 컴포넌트
│   │   ├── Header.tsx           # 헤더 (그라디언트 + 글래스모피즘)
│   │   ├── PostList.tsx         # 포스트 목록 (검색/필터링)
│   │   ├── PostDetail.tsx       # 포스트 상세 (마크다운 렌더링)
│   │   └── Pagination.tsx       # 페이지네이션
│   ├── data/
│   │   └── posts.ts             # 📊 자동 생성된 포스트 데이터
│   ├── utils/
│   │   └── markdownParser.ts     # 🔧 하이브리드 마크다운 파서
│   ├── types/
│   │   └── index.ts             # 📋 TypeScript 타입 정의
│   ├── App.tsx                   # 🎯 메인 앱 컴포넌트
│   └── App.css                   # 🎨 통합 스타일 (Ant Design + Tailwind)
├── scripts/
│   └── build-posts.js           # 🔨 빌드 타임 마크다운 파서
├── dist/                         # 📦 빌드 결과물 (GitHub Pages용)
└── package.json                  # 📋 프로젝트 설정
```

## 🚀 빠른 시작

### 1. 저장소 클론

```bash
git clone https://github.com/YOUR_USERNAME/github-page-test.git
cd github-page-test
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`으로 접속하여 확인하세요.

## 📝 포스트 작성 방법

### 새로운 포스트 추가하기

1. **마크다운 파일 생성**
   ```bash
   # public/posts/ 폴더에 새 파일 생성
   touch public/posts/my-new-post.md
   ```

2. **Frontmatter 작성**
   ```markdown
   ---
   title: "새로운 포스트 제목"
   date: "2024-12-20"
   author: "작성자명"
   category: "Tech"  # Tech 또는 Culture
   tags: ["React", "TypeScript", "웹개발"]
   excerpt: "포스트의 간단한 요약입니다."
   image: "/images/my-image.svg"
   imageAlt: "이미지 설명"
   ---

   # 포스트 내용

   여기에 마크다운으로 작성된 포스트 내용이 들어갑니다.

   ## 코드 예제

   ```javascript
   function hello() {
     console.log("Hello, World!");
   }
   ```

   ## 목록

   - 항목 1
   - 항목 2
   - 항목 3
   ```

3. **자동 반영**
   - **개발 환경**: 파일 저장 시 자동으로 반영
   - **프로덕션**: 빌드 시 자동으로 포함

### Frontmatter 필드 설명

| 필드 | 필수 | 설명 | 예시 |
|------|------|------|------|
| `title` | ✅ | 포스트 제목 | "React Hooks 완벽 가이드" |
| `date` | ✅ | 작성 날짜 | "2024-12-20" |
| `author` | ✅ | 작성자 | "개발자" |
| `category` | ✅ | 카테고리 | "Tech" 또는 "Culture" |
| `tags` | ✅ | 태그 배열 | ["React", "JavaScript"] |
| `excerpt` | ✅ | 요약 | "React Hooks에 대한 완벽한 가이드" |
| `image` | ❌ | 대표 이미지 | "/images/react-hero.svg" |
| `imageAlt` | ❌ | 이미지 설명 | "React 로고" |

## 🔧 빌드 및 배포

### 개발 환경 빌드

```bash
# 마크다운 파일 파싱
npm run build:posts

# 전체 빌드
npm run build
```

### GitHub Pages 배포

#### 방법 1: GitHub Actions (권장)

1. **워크플로우 파일 생성**
   ```bash
   mkdir -p .github/workflows
   ```

2. **배포 스크립트 생성**
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout
         uses: actions/checkout@v4

       - name: Setup Node.js
         uses: actions/setup-node@v4
         with:
           node-version: '20'
           cache: 'npm'

       - name: Install dependencies
         run: npm ci

       - name: Build posts
         run: npm run build:posts

       - name: Build project
         run: npm run build

       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         if: github.ref == 'refs/heads/main'
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

3. **GitHub Pages 설정**
   - 저장소 → Settings → Pages
   - Source: "GitHub Actions" 선택

#### 방법 2: 수동 배포

1. **빌드 실행**
   ```bash
   npm run build:github
   ```

2. **dist 폴더를 gh-pages 브랜치에 푸시**
   ```bash
   # gh-pages 브랜치 생성 및 체크아웃
   git checkout -b gh-pages
   
   # dist 폴더 내용을 루트로 이동
   cp -r dist/* .
   
   # 커밋 및 푸시
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

3. **GitHub Pages 설정**
   - 저장소 → Settings → Pages
   - Source: "Deploy from a branch" 선택
   - Branch: "gh-pages" 선택

## 🎨 커스터마이징

### 색상 테마 변경

`tailwind.config.js`에서 색상 팔레트를 수정하세요:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e3f2fd',
          500: '#2196f3',
          900: '#0d47a1',
        },
        // 새로운 색상 추가
        brand: {
          primary: '#your-color',
          secondary: '#your-color',
        }
      }
    }
  }
}
```

### Ant Design 테마 커스터마이징

`src/App.css`에서 Ant Design 컴포넌트 스타일을 수정하세요:

```css
@layer components {
  .ant-btn-primary {
    @apply bg-your-color hover:bg-your-color-dark;
  }
  
  .ant-card {
    @apply shadow-your-shadow;
  }
}
```

### 레이아웃 수정

각 컴포넌트 파일을 수정하여 레이아웃을 변경할 수 있습니다:

- `src/components/Header.tsx` - 헤더 레이아웃
- `src/components/PostList.tsx` - 포스트 목록 레이아웃
- `src/components/PostDetail.tsx` - 포스트 상세 레이아웃

## 🔍 검색 및 필터링

현재 구현된 기능:

- **제목 검색**: 포스트 제목에서 키워드 검색
- **내용 검색**: 포스트 내용에서 키워드 검색
- **태그 검색**: 태그에서 키워드 검색
- **카테고리 필터**: Tech/Culture 카테고리별 필터링

## 📱 반응형 디자인

### 브레이크포인트

- **모바일**: < 768px
- **태블릿**: 768px - 1024px
- **데스크톱**: > 1024px

### 반응형 기능

- **헤더**: 모바일에서 햄버거 메뉴
- **포스트 카드**: 화면 크기에 따른 레이아웃 변경
- **이미지**: 반응형 이미지 최적화
- **텍스트**: 가독성을 위한 폰트 크기 조정

## 🚀 성능 최적화

### 이미지 최적화

- SVG 이미지 사용으로 벡터 그래픽 활용
- Lazy loading으로 초기 로딩 시간 단축
- WebP 포맷 지원 (향후 구현 예정)

### 코드 최적화

- Tree shaking으로 불필요한 코드 제거
- 코드 스플리팅으로 번들 크기 최적화
- 정적 사이트 생성으로 빠른 로딩

### SEO 최적화

- 메타 태그 자동 생성
- 구조화된 데이터 (JSON-LD)
- 사이트맵 자동 생성 (향후 구현 예정)

## 🐛 문제 해결

### 자주 발생하는 문제

#### 1. 마크다운 파일이 표시되지 않음

**해결 방법:**
```bash
# 빌드 스크립트 실행
npm run build:posts

# 개발 서버 재시작
npm run dev
```

#### 2. GitHub Pages에서 라우팅 오류

**해결 방법:**
`public/_redirects` 파일이 있는지 확인하고, 다음 내용이 포함되어 있는지 확인:

```
/*    /index.html   200
```

#### 3. 이미지가 표시되지 않음

**해결 방법:**
- 이미지 경로가 `/images/`로 시작하는지 확인
- `public/images/` 폴더에 이미지 파일이 있는지 확인

#### 4. 빌드 오류

**해결 방법:**
```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install

# 캐시 클리어
npm run build:posts
```

## 🤝 기여하기

1. **저장소 포크**
   ```bash
   # GitHub에서 포크 후 클론
   git clone https://github.com/YOUR_USERNAME/github-page-test.git
   ```

2. **개발 브랜치 생성**
   ```bash
   git checkout -b feature/새기능
   ```

3. **변경사항 커밋**
   ```bash
   git add .
   git commit -m "feat: 새 기능 추가"
   ```

4. **Pull Request 생성**
   - GitHub에서 Pull Request 생성
   - 변경사항에 대한 상세한 설명 작성

## 📚 추가 리소스

### 학습 자료

- [React 공식 문서](https://react.dev/)
- [Ant Design 컴포넌트](https://ant.design/components/overview)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Vite 가이드](https://vitejs.dev/guide/)

### 유용한 도구

- [Markdown 에디터](https://dillinger.io/)
- [색상 팔레트 생성기](https://coolors.co/)
- [이미지 최적화](https://tinypng.com/)

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🔮 향후 계획

### 단기 계획
- [ ] 다크 모드 토글 기능
- [ ] 검색 기능 개선 (전문 검색)
- [ ] 댓글 시스템 (GitHub Issues 기반)
- [ ] RSS 피드 생성

### 장기 계획
- [ ] 다국어 지원 (i18n)
- [ ] 관리자 대시보드
- [ ] 포스트 통계 및 분석
- [ ] 소셜 미디어 공유 최적화

## 📞 지원

문제가 발생하거나 질문이 있으시면:

1. **Issues 탭**에서 문제 보고
2. **Discussions 탭**에서 질문
3. **Pull Request**로 기여

---

⭐ **이 프로젝트가 도움이 되었다면 스타를 눌러주세요!**

🚀 **GitHub Pages에서 라이브 데모 확인**: [https://your-username.github.io/github-page-test](https://your-username.github.io/github-page-test)