# 🤝 기여 가이드

React + Ant Design + Tailwind CSS 기술 블로그 프로젝트에 기여해주셔서 감사합니다! 이 문서는 프로젝트에 기여하는 방법을 안내합니다.

## 🚀 시작하기

### 개발 환경 설정

1. **저장소 포크**
   ```bash
   # GitHub에서 이 저장소를 포크한 후 클론
   git clone https://github.com/YOUR_USERNAME/github-page-test.git
   cd github-page-test
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```

4. **브라우저에서 확인**
   - `http://localhost:5173`으로 접속
   - 모든 기능이 정상 작동하는지 확인

## 📝 기여 방법

### 새로운 포스트 작성

1. **마크다운 파일 생성**
   ```bash
   # public/posts/ 폴더에 새 파일 생성
   touch public/posts/my-awesome-post.md
   ```

2. **Frontmatter 작성**
   ```markdown
   ---
   title: "멋진 포스트 제목"
   date: "2024-12-20"
   author: "작성자명"
   category: "Tech"
   tags: ["React", "TypeScript", "웹개발"]
   excerpt: "포스트의 간단한 요약입니다."
   image: "/images/my-image.svg"
   imageAlt: "이미지 설명"
   ---

   # 포스트 내용

   여기에 마크다운으로 작성된 포스트 내용이 들어갑니다.
   ```

3. **로컬에서 테스트**
   ```bash
   npm run dev
   ```

### 버그 수정

1. **이슈 확인**
   - GitHub Issues 탭에서 해결할 버그 확인
   - 해당 이슈에 댓글로 작업 시작 알림

2. **브랜치 생성**
   ```bash
   git checkout -b fix/bug-description
   ```

3. **수정 작업**
   - 버그 원인 파악
   - 수정 코드 작성
   - 테스트 케이스 추가

4. **테스트**
   ```bash
   npm run build
   npm run lint
   ```

### 새로운 기능 추가

1. **기능 제안**
   - GitHub Issues에서 새로운 기능 제안
   - 커뮤니티 피드백 수집

2. **브랜치 생성**
   ```bash
   git checkout -b feature/new-feature-name
   ```

3. **개발 작업**
   - 기능 구현
   - 문서 업데이트
   - 테스트 작성

4. **코드 리뷰 준비**
   ```bash
   npm run build
   npm run lint
   npm test  # 테스트가 있다면
   ```

## 📋 코딩 스타일

### TypeScript 규칙

- **타입 정의**: 모든 props와 함수에 타입 정의
- **인터페이스**: 복잡한 객체는 인터페이스로 정의
- **any 사용 금지**: 가능한 한 구체적인 타입 사용

```typescript
// ✅ 좋은 예
interface PostProps {
  post: Post;
  onEdit?: (post: Post) => void;
}

// ❌ 나쁜 예
function Component(props: any) {
  // ...
}
```

### React 컴포넌트 규칙

- **함수형 컴포넌트**: 클래스형 컴포넌트 대신 함수형 사용
- **Hooks**: 상태 관리는 useState, useEffect 등 사용
- **Props**: props는 구조분해할당으로 받기

```typescript
// ✅ 좋은 예
const PostCard: React.FC<PostProps> = ({ post, onEdit }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // 사이드 이펙트
  }, []);
  
  return (
    <div className="post-card">
      {/* 컴포넌트 내용 */}
    </div>
  );
};

// ❌ 나쁜 예
class PostCard extends React.Component {
  // ...
}
```

### CSS/Styling 규칙

- **Tailwind CSS**: 유틸리티 클래스 우선 사용
- **Ant Design**: 기본 컴포넌트 활용
- **커스텀 스타일**: `src/App.css`의 `@layer` 사용

```css
/* ✅ 좋은 예 */
@layer components {
  .custom-button {
    @apply bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded;
  }
}

/* ❌ 나쁜 예 */
.custom-button {
  background-color: #3b82f6;
  /* 인라인 스타일 */
}
```

### 파일 명명 규칙

- **컴포넌트**: PascalCase (예: `PostCard.tsx`)
- **유틸리티**: camelCase (예: `markdownParser.ts`)
- **상수**: UPPER_SNAKE_CASE (예: `API_ENDPOINTS.ts`)
- **마크다운**: kebab-case (예: `react-hooks-guide.md`)

## 🧪 테스트

### 로컬 테스트

```bash
# 개발 서버 실행
npm run dev

# 빌드 테스트
npm run build

# 린트 검사
npm run lint

# 마크다운 파싱 테스트
npm run build:posts
```

### 브라우저 테스트

- **Chrome**: 최신 버전
- **Firefox**: 최신 버전
- **Safari**: 최신 버전
- **Edge**: 최신 버전

### 반응형 테스트

- **모바일**: 375px, 414px
- **태블릿**: 768px, 1024px
- **데스크톱**: 1200px, 1920px

## 📤 Pull Request 가이드

### PR 생성 전 체크리스트

- [ ] 코드가 로컬에서 정상 작동하는지 확인
- [ ] 린트 오류가 없는지 확인
- [ ] 빌드가 성공하는지 확인
- [ ] 브라우저에서 테스트 완료
- [ ] 문서 업데이트 (필요한 경우)

### PR 제목 규칙

```
type(scope): 간단한 설명

예시:
feat(components): PostCard 컴포넌트에 애니메이션 추가
fix(parser): 마크다운 파싱 오류 수정
docs(readme): 설치 가이드 업데이트
style(css): 버튼 스타일 개선
refactor(utils): 마크다운 파서 리팩토링
```

### PR 설명 템플릿

```markdown
## 변경 사항
- 변경된 내용을 간단히 설명

## 테스트
- [ ] 로컬에서 테스트 완료
- [ ] 브라우저 호환성 확인
- [ ] 반응형 디자인 확인

## 스크린샷 (UI 변경 시)
- 변경 전/후 스크린샷 첨부

## 관련 이슈
- Closes #이슈번호
```

## 🐛 버그 리포트

### 버그 리포트 템플릿

```markdown
## 버그 설명
버그에 대한 명확하고 간결한 설명

## 재현 단계
1. '...' 페이지로 이동
2. '...' 버튼 클릭
3. '...' 오류 발생

## 예상 동작
어떤 일이 일어나야 하는지 설명

## 실제 동작
실제로 일어난 일을 설명

## 환경 정보
- OS: [예: Windows 10]
- 브라우저: [예: Chrome 120]
- Node.js 버전: [예: v20.10.0]

## 추가 정보
스크린샷, 로그, 기타 관련 정보
```

## 💡 기능 제안

### 기능 제안 템플릿

```markdown
## 기능 설명
제안하는 기능에 대한 명확한 설명

## 사용 사례
이 기능이 왜 필요한지 설명

## 구현 아이디어
구현 방법에 대한 아이디어나 제안

## 대안
다른 해결 방법이 있다면 설명

## 추가 정보
스크린샷, 목업, 참고 자료 등
```

## 📚 문서화

### 코드 주석

```typescript
/**
 * 마크다운 파일을 파싱하여 Post 객체로 변환
 * @param filename - 파싱할 마크다운 파일명
 * @returns 파싱된 Post 객체 또는 null
 */
export const loadMarkdownContent = async (filename: string): Promise<Post | null> => {
  // 구현 내용
};
```

### README 업데이트

- 새로운 기능 추가 시 README.md 업데이트
- 설치/사용 방법 변경 시 문서 수정
- 예제 코드가 정확한지 확인

## 🏷️ 릴리스

### 버전 관리

- **Major**: 호환성을 깨는 변경
- **Minor**: 새로운 기능 추가
- **Patch**: 버그 수정

### 릴리스 노트

```markdown
## v1.2.0 (2024-12-20)

### 새로운 기능
- 다크 모드 토글 기능 추가
- 검색 기능 개선

### 개선사항
- 페이지 로딩 속도 최적화
- 모바일 반응형 개선

### 버그 수정
- 마크다운 파싱 오류 수정
- 이미지 로딩 문제 해결
```

## 🤔 질문과 도움

### 도움이 필요한 경우

1. **GitHub Discussions**: 일반적인 질문
2. **GitHub Issues**: 버그 리포트, 기능 제안
3. **Pull Request**: 코드 리뷰 요청

### 커뮤니티 가이드라인

- **존중**: 모든 기여자를 존중하고 친절하게 대하기
- **건설적**: 건설적인 피드백과 제안 제공
- **학습**: 서로 배우고 성장하는 환경 조성
- **포용성**: 다양한 배경과 경험을 가진 사람들 환영

## 📄 라이선스

이 프로젝트에 기여함으로써 귀하는 기여 내용이 MIT 라이선스 하에 배포되는 것에 동의합니다.

---

🎉 **기여해주셔서 감사합니다! 함께 멋진 기술 블로그를 만들어가요!**
