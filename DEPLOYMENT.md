# 🚀 GitHub Pages 배포 가이드

이 문서는 React + Ant Design + Tailwind CSS 기술 블로그를 GitHub Pages에 배포하는 상세한 방법을 설명합니다.

## 📋 배포 전 체크리스트

### 1. 프로젝트 준비
- [ ] 모든 의존성이 `package.json`에 포함되어 있는지 확인
- [ ] 마크다운 파일들이 `public/posts/` 폴더에 있는지 확인
- [ ] 이미지 파일들이 `public/images/` 폴더에 있는지 확인
- [ ] 빌드 스크립트가 정상 작동하는지 확인

### 2. GitHub 저장소 설정
- [ ] GitHub 저장소가 생성되어 있는지 확인
- [ ] 로컬 프로젝트가 GitHub 저장소와 연결되어 있는지 확인
- [ ] GitHub Pages 설정이 올바른지 확인

## 🔧 배포 방법

### 방법 1: GitHub Actions 자동 배포 (권장)

#### 1단계: 워크플로우 파일 확인
`.github/workflows/deploy.yml` 파일이 프로젝트 루트에 있는지 확인하세요.

#### 2단계: GitHub Pages 설정
1. GitHub 저장소로 이동
2. **Settings** 탭 클릭
3. 왼쪽 사이드바에서 **Pages** 클릭
4. **Source** 섹션에서 **GitHub Actions** 선택
5. **Save** 클릭

#### 3단계: 코드 푸시
```bash
# 변경사항 추가
git add .

# 커밋
git commit -m "feat: GitHub Pages 배포 설정 추가"

# 메인 브랜치에 푸시
git push origin main
```

#### 4단계: 배포 확인
1. GitHub 저장소의 **Actions** 탭으로 이동
2. 워크플로우 실행 상태 확인
3. 배포 완료 후 사이트 접속 확인

### 방법 2: 수동 배포

#### 1단계: 빌드 실행
```bash
# 마크다운 파일 파싱
npm run build:posts

# 프로덕션 빌드
npm run build:github
```

#### 2단계: gh-pages 브랜치 생성
```bash
# gh-pages 브랜치 생성 및 체크아웃
git checkout -b gh-pages

# dist 폴더 내용을 루트로 복사
cp -r dist/* .

# 불필요한 파일 제거
rm -rf dist src scripts .github

# 변경사항 추가 및 커밋
git add .
git commit -m "Deploy to GitHub Pages"

# gh-pages 브랜치에 푸시
git push origin gh-pages
```

#### 3단계: GitHub Pages 설정
1. GitHub 저장소 → **Settings** → **Pages**
2. **Source**: "Deploy from a branch" 선택
3. **Branch**: "gh-pages" 선택
4. **Save** 클릭

## 🌐 도메인 설정

### 커스텀 도메인 사용하기

#### 1단계: 도메인 구매
- 도메인 등록업체에서 도메인 구매
- DNS 설정에서 GitHub Pages IP 주소로 연결

#### 2단계: GitHub Pages 설정
1. 저장소 → **Settings** → **Pages**
2. **Custom domain** 섹션에 도메인 입력
3. **Enforce HTTPS** 체크박스 활성화

#### 3단계: CNAME 파일 생성
```bash
# public 폴더에 CNAME 파일 생성
echo "your-domain.com" > public/CNAME
```

## 🔍 배포 문제 해결

### 자주 발생하는 문제

#### 1. 빌드 실패
**증상**: GitHub Actions에서 빌드 단계에서 실패

**해결 방법**:
```bash
# 로컬에서 빌드 테스트
npm run build:posts
npm run build

# 오류 메시지 확인 후 수정
```

#### 2. 마크다운 파일 파싱 오류
**증상**: 포스트가 표시되지 않음

**해결 방법**:
- Frontmatter 형식 확인
- 파일 인코딩이 UTF-8인지 확인
- 특수 문자 이스케이프 처리

#### 3. 이미지 로딩 실패
**증상**: 이미지가 표시되지 않음

**해결 방법**:
- 이미지 경로가 `/images/`로 시작하는지 확인
- 파일명에 특수문자가 없는지 확인
- 이미지 파일이 `public/images/` 폴더에 있는지 확인

#### 4. 라우팅 오류
**증상**: 직접 URL 접근 시 404 오류

**해결 방법**:
- `public/_redirects` 파일 확인
- SPA 라우팅 설정 확인

### 디버깅 방법

#### 1. 로컬 빌드 테스트
```bash
# 빌드 실행
npm run build:github

# 빌드 결과 확인
ls -la dist/

# 로컬 서버로 테스트
npx serve dist
```

#### 2. GitHub Actions 로그 확인
1. 저장소 → **Actions** 탭
2. 실패한 워크플로우 클릭
3. 각 단계별 로그 확인

#### 3. 브라우저 개발자 도구
- F12로 개발자 도구 열기
- **Console** 탭에서 JavaScript 오류 확인
- **Network** 탭에서 리소스 로딩 상태 확인

## 📊 성능 최적화

### 이미지 최적화
```bash
# 이미지 압축 (ImageOptim, TinyPNG 등 사용)
# SVG 파일 사용 권장
# WebP 포맷 고려
```

### 번들 크기 최적화
```bash
# 번들 분석
npm run build
npx vite-bundle-analyzer dist/assets/
```

### 캐싱 전략
- 정적 자산에 적절한 캐시 헤더 설정
- Service Worker 구현 고려

## 🔄 업데이트 배포

### 새로운 포스트 추가 시
1. `public/posts/` 폴더에 마크다운 파일 추가
2. 변경사항 커밋 및 푸시
3. GitHub Actions 자동 배포 확인

### 코드 변경 시
1. 코드 수정
2. 로컬에서 테스트
3. 변경사항 커밋 및 푸시
4. 배포 상태 확인

## 📈 모니터링

### Google Analytics 설정
```javascript
// src/App.tsx에 추가
useEffect(() => {
  // Google Analytics 초기화
  gtag('config', 'GA_MEASUREMENT_ID');
}, []);
```

### 성능 모니터링
- Google PageSpeed Insights
- Web Vitals 측정
- Lighthouse 점수 확인

## 🛡️ 보안 고려사항

### HTTPS 강제
- GitHub Pages는 기본적으로 HTTPS 제공
- 커스텀 도메인 사용 시 HTTPS 설정 확인

### 콘텐츠 보안 정책 (CSP)
```html
<!-- public/index.html에 추가 -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline';">
```

## 📞 지원 및 문의

### 문제 보고
1. GitHub Issues 탭에서 문제 보고
2. 상세한 오류 메시지와 재현 단계 포함
3. 환경 정보 (OS, Node.js 버전 등) 제공

### 추가 도움
- [GitHub Pages 공식 문서](https://docs.github.com/en/pages)
- [Vite 배포 가이드](https://vitejs.dev/guide/static-deploy.html)
- [React 배포 가이드](https://create-react-app.dev/docs/deployment/)

---

🎉 **배포가 성공적으로 완료되면 기술 블로그를 전 세계와 공유할 수 있습니다!**
