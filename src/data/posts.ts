// 이 파일은 빌드 시점에 자동으로 생성됩니다
// public/posts 폴더의 마크다운 파일들을 파싱하여 생성
import { Post, PaginatedPostsResponse } from '../types';

// 파싱된 포스트 데이터
const posts: Post[] = [
  {
    "slug": "new-post-example",
    "title": "새로운 기술 트렌드와 미래 전망",
    "date": "2024-02-15",
    "author": "기술 트렌드 분석가",
    "category": "Culture",
    "tags": [
      "트렌드",
      "미래기술",
      "혁신",
      "디지털전환"
    ],
    "excerpt": "2024년 주요 기술 트렌드와 향후 5년간의 기술 발전 방향을 분석합니다.",
    "image": "/github-page-test/images/tech-trends-hero.svg",
    "imageAlt": "기술 트렌드와 미래 전망 이미지",
    "content": "# 새로운 기술 트렌드와 미래 전망\r\n\r\n2024년을 맞이하여 기술 분야에서 주목받고 있는 주요 트렌드들과 향후 발전 방향을 살펴보겠습니다.\r\n\r\n## 주요 기술 트렌드\r\n\r\n### 1. 인공지능의 발전\r\n\r\nAI 기술이 계속해서 발전하고 있으며, 특히 다음과 같은 영역에서 큰 변화가 예상됩니다:\r\n\r\n- **생성형 AI**: 텍스트, 이미지, 음성 생성 기술의 발전\r\n- **자율주행**: 완전 자율주행 기술의 상용화\r\n- **의료 AI**: 진단 및 치료 지원 시스템의 확산\r\n\r\n### 2. 메타버스와 가상현실\r\n\r\n메타버스 생태계가 점점 더 현실적인 형태로 발전하고 있습니다:\r\n\r\n```javascript\r\n// 메타버스 환경에서의 사용자 인터랙션 예제\r\nclass MetaverseUser {\r\n  constructor(name, avatar) {\r\n    this.name = name;\r\n    this.avatar = avatar;\r\n    this.position = { x: 0, y: 0, z: 0 };\r\n  }\r\n\r\n  moveTo(x, y, z) {\r\n    this.position = { x, y, z };\r\n    this.updateAvatarPosition();\r\n  }\r\n\r\n  interactWith(object) {\r\n    return object.respondToInteraction(this);\r\n  }\r\n}\r\n```\r\n\r\n### 3. 양자 컴퓨팅\r\n\r\n양자 컴퓨팅 기술이 실용화 단계에 접어들고 있습니다:\r\n\r\n- **암호화**: 양자 내성 암호화 기술의 필요성 증가\r\n- **최적화**: 복잡한 최적화 문제 해결 능력 향상\r\n- **시뮬레이션**: 과학적 시뮬레이션의 정확도 대폭 향상\r\n\r\n## 미래 기술 전망\r\n\r\n### 2025-2030년 예상 기술\r\n\r\n1. **뇌-컴퓨터 인터페이스 (BCI)**\r\n   - 생각만으로 컴퓨터를 조작하는 기술\r\n   - 의료 분야에서의 혁신적 응용\r\n\r\n2. **6G 네트워크**\r\n   - 초고속, 초저지연 통신\r\n   - 홀로그램 통신의 실현\r\n\r\n3. **핵융합 에너지**\r\n   - 무한한 청정 에너지의 실현\r\n   - 에너지 위기의 근본적 해결\r\n\r\n## 기술 윤리와 사회적 영향\r\n\r\n### 윤리적 고려사항\r\n\r\n새로운 기술의 발전과 함께 다음과 같은 윤리적 문제들이 대두되고 있습니다:\r\n\r\n- **개인정보 보호**: AI와 빅데이터 시대의 프라이버시\r\n- **일자리 변화**: 자동화로 인한 직업 구조 변화\r\n- **디지털 격차**: 기술 접근성의 불평등\r\n\r\n### 사회적 대응 방안\r\n\r\n```markdown\r\n## 기술 발전에 따른 사회적 대응\r\n\r\n1. **교육 시스템 개편**\r\n   - 디지털 리터러시 교육 강화\r\n   - 평생학습 체계 구축\r\n\r\n2. **정책적 지원**\r\n   - 기술 혁신 지원 정책\r\n   - 사회 안전망 강화\r\n\r\n3. **국제 협력**\r\n   - 글로벌 기술 표준 수립\r\n   - 윤리 가이드라인 공유\r\n```\r\n\r\n## 결론\r\n\r\n기술의 발전은 인류에게 새로운 기회와 도전을 동시에 가져다줍니다. 우리는 이러한 변화에 적극적으로 대응하면서도, 기술이 인간 중심의 가치를 추구할 수 있도록 노력해야 합니다.\r\n\r\n미래는 우리가 만들어가는 것이며, 기술은 그 목표를 달성하기 위한 도구일 뿐입니다."
  },
  {
    "slug": "react-hooks-guide",
    "title": "React Hooks 완벽 가이드",
    "date": "2024-02-01",
    "author": "React 개발자",
    "category": "Tech",
    "tags": [
      "React",
      "Hooks",
      "useState",
      "useEffect"
    ],
    "excerpt": "React Hooks의 모든 것을 알아보는 완벽한 가이드입니다.",
    "image": "/github-page-test/images/react-hooks-hero.svg",
    "imageAlt": "React Hooks 로고와 예제 코드",
    "content": "# React Hooks 완벽 가이드\r\n\r\nReact Hooks는 함수형 컴포넌트에서 상태와 생명주기를 관리할 수 있게 해주는 기능입니다.\r\n\r\n## Hooks란?\r\n\r\nHooks는 React 16.8에서 도입된 기능으로, 함수형 컴포넌트에서도 클래스형 컴포넌트의 기능을 사용할 수 있게 해줍니다.\r\n\r\n## 기본 Hooks\r\n\r\n### useState\r\n\r\n상태를 관리하는 가장 기본적인 Hook입니다.\r\n\r\n```javascript\r\nimport React, { useState } from 'react';\r\n\r\nfunction Counter() {\r\n  const [count, setCount] = useState(0);\r\n\r\n  return (\r\n    <div>\r\n      <p>현재 카운트: {count}</p>\r\n      <button onClick={() => setCount(count + 1)}>\r\n        증가\r\n      </button>\r\n      <button onClick={() => setCount(count - 1)}>\r\n        감소\r\n      </button>\r\n    </div>\r\n  );\r\n}\r\n```\r\n\r\n### useEffect\r\n\r\n컴포넌트의 생명주기를 관리하는 Hook입니다.\r\n\r\n```javascript\r\nimport React, { useState, useEffect } from 'react';\r\n\r\nfunction UserProfile({ userId }) {\r\n  const [user, setUser] = useState(null);\r\n  const [loading, setLoading] = useState(true);\r\n\r\n  useEffect(() => {\r\n    async function fetchUser() {\r\n      try {\r\n        const response = await fetch(`/api/users/${userId}`);\r\n        const userData = await response.json();\r\n        setUser(userData);\r\n      } catch (error) {\r\n        console.error('사용자 데이터 로딩 실패:', error);\r\n      } finally {\r\n        setLoading(false);\r\n      }\r\n    }\r\n\r\n    fetchUser();\r\n  }, [userId]); // userId가 변경될 때만 실행\r\n\r\n  if (loading) return <div>로딩 중...</div>;\r\n  if (!user) return <div>사용자를 찾을 수 없습니다.</div>;\r\n\r\n  return (\r\n    <div>\r\n      <h1>{user.name}</h1>\r\n      <p>{user.email}</p>\r\n    </div>\r\n  );\r\n}\r\n```\r\n\r\n## 커스텀 Hooks\r\n\r\n자신만의 Hook을 만들어 로직을 재사용할 수 있습니다.\r\n\r\n```javascript\r\nimport { useState, useEffect } from 'react';\r\n\r\nfunction useApi(url) {\r\n  const [data, setData] = useState(null);\r\n  const [loading, setLoading] = useState(true);\r\n  const [error, setError] = useState(null);\r\n\r\n  useEffect(() => {\r\n    async function fetchData() {\r\n      try {\r\n        setLoading(true);\r\n        const response = await fetch(url);\r\n        if (!response.ok) {\r\n          throw new Error('네트워크 응답이 올바르지 않습니다');\r\n        }\r\n        const result = await response.json();\r\n        setData(result);\r\n        setError(null);\r\n      } catch (err) {\r\n        setError(err.message);\r\n      } finally {\r\n        setLoading(false);\r\n      }\r\n    }\r\n\r\n    fetchData();\r\n  }, [url]);\r\n\r\n  return { data, loading, error };\r\n}\r\n\r\n// 사용 예제\r\nfunction PostList() {\r\n  const { data: posts, loading, error } = useApi('/api/posts');\r\n\r\n  if (loading) return <div>로딩 중...</div>;\r\n  if (error) return <div>에러: {error}</div>;\r\n\r\n  return (\r\n    <ul>\r\n      {posts?.map(post => (\r\n        <li key={post.id}>{post.title}</li>\r\n      ))}\r\n    </ul>\r\n  );\r\n}\r\n```\r\n\r\n## 고급 Hooks\r\n\r\n### useReducer\r\n\r\n복잡한 상태 로직을 관리할 때 사용합니다.\r\n\r\n```javascript\r\nimport React, { useReducer } from 'react';\r\n\r\nconst initialState = { count: 0 };\r\n\r\nfunction reducer(state, action) {\r\n  switch (action.type) {\r\n    case 'increment':\r\n      return { count: state.count + 1 };\r\n    case 'decrement':\r\n      return { count: state.count - 1 };\r\n    case 'reset':\r\n      return { count: 0 };\r\n    default:\r\n      throw new Error();\r\n  }\r\n}\r\n\r\nfunction Counter() {\r\n  const [state, dispatch] = useReducer(reducer, initialState);\r\n\r\n  return (\r\n    <div>\r\n      <p>카운트: {state.count}</p>\r\n      <button onClick={() => dispatch({ type: 'increment' })}>\r\n        증가\r\n      </button>\r\n      <button onClick={() => dispatch({ type: 'decrement' })}>\r\n        감소\r\n      </button>\r\n      <button onClick={() => dispatch({ type: 'reset' })}>\r\n        리셋\r\n      </button>\r\n    </div>\r\n  );\r\n}\r\n```\r\n\r\n### useMemo와 useCallback\r\n\r\n성능 최적화를 위한 Hook들입니다.\r\n\r\n```javascript\r\nimport React, { useState, useMemo, useCallback } from 'react';\r\n\r\nfunction ExpensiveComponent({ items }) {\r\n  const [filter, setFilter] = useState('');\r\n\r\n  // 비용이 큰 계산을 메모이제이션\r\n  const filteredItems = useMemo(() => {\r\n    return items.filter(item => \r\n      item.name.toLowerCase().includes(filter.toLowerCase())\r\n    );\r\n  }, [items, filter]);\r\n\r\n  // 함수를 메모이제이션\r\n  const handleItemClick = useCallback((itemId) => {\r\n    console.log('아이템 클릭:', itemId);\r\n  }, []);\r\n\r\n  return (\r\n    <div>\r\n      <input\r\n        value={filter}\r\n        onChange={(e) => setFilter(e.target.value)}\r\n        placeholder=\"아이템 검색...\"\r\n      />\r\n      <ul>\r\n        {filteredItems.map(item => (\r\n          <li key={item.id} onClick={() => handleItemClick(item.id)}>\r\n            {item.name}\r\n          </li>\r\n        ))}\r\n      </ul>\r\n    </div>\r\n  );\r\n}\r\n```\r\n\r\n## Hooks 규칙\r\n\r\n1. **최상위에서만 Hook을 호출하세요**\r\n   - 반복문, 조건문, 중첩된 함수 내에서 Hook을 호출하지 마세요\r\n\r\n2. **React 함수에서만 Hook을 호출하세요**\r\n   - 일반 JavaScript 함수에서 Hook을 호출하지 마세요\r\n\r\n## 결론\r\n\r\nReact Hooks는 함수형 컴포넌트를 더욱 강력하게 만들어주는 기능입니다. 적절히 활용하면 코드의 재사용성과 가독성을 크게 향상시킬 수 있습니다."
  },
  {
    "slug": "javascript-async",
    "title": "JavaScript 비동기 프로그래밍 완전 정복",
    "date": "2024-01-25",
    "author": "JavaScript 개발자",
    "category": "Tech",
    "tags": [
      "JavaScript",
      "Async",
      "Promise",
      "Async/Await"
    ],
    "excerpt": "JavaScript의 비동기 프로그래밍 개념과 Promise, async/await 사용법을 완벽하게 정리합니다.",
    "image": "/github-page-test/images/javascript-async-hero.svg",
    "imageAlt": "JavaScript 비동기 프로그래밍 다이어그램",
    "content": "# JavaScript 비동기 프로그래밍 완전 정복\r\n\r\nJavaScript는 단일 스레드 언어이지만, 비동기 프로그래밍을 통해 효율적인 코드를 작성할 수 있습니다.\r\n\r\n## 콜백 함수의 한계\r\n\r\n```javascript\r\n// 콜백 지옥 예제\r\ngetData(function(a) {\r\n  getMoreData(a, function(b) {\r\n    getEvenMoreData(b, function(c) {\r\n      getFinalData(c, function(finalData) {\r\n        console.log(finalData);\r\n      });\r\n    });\r\n  });\r\n});\r\n```\r\n\r\n## Promise의 등장\r\n\r\nPromise는 비동기 작업의 성공 또는 실패를 나타내는 객체입니다.\r\n\r\n### 기본 사용법\r\n\r\n```javascript\r\nconst promise = new Promise((resolve, reject) => {\r\n  // 비동기 작업\r\n  setTimeout(() => {\r\n    resolve('성공!');\r\n  }, 1000);\r\n});\r\n\r\npromise\r\n  .then(result => console.log(result))\r\n  .catch(error => console.error(error));\r\n```\r\n\r\n### Promise 체이닝\r\n\r\n```javascript\r\nfetch('/api/users')\r\n  .then(response => response.json())\r\n  .then(users => {\r\n    return fetch(`/api/users/${users[0].id}`);\r\n  })\r\n  .then(response => response.json())\r\n  .then(user => console.log(user))\r\n  .catch(error => console.error(error));\r\n```\r\n\r\n## Async/Await\r\n\r\nasync/await는 Promise를 더 읽기 쉽게 만들어주는 문법입니다.\r\n\r\n### 기본 사용법\r\n\r\n```javascript\r\nasync function fetchUserData() {\r\n  try {\r\n    const response = await fetch('/api/users');\r\n    const users = await response.json();\r\n    const userResponse = await fetch(`/api/users/${users[0].id}`);\r\n    const user = await userResponse.json();\r\n    console.log(user);\r\n  } catch (error) {\r\n    console.error('에러 발생:', error);\r\n  }\r\n}\r\n```\r\n\r\n### 병렬 처리\r\n\r\n```javascript\r\nasync function fetchMultipleData() {\r\n  try {\r\n    const [users, posts, comments] = await Promise.all([\r\n      fetch('/api/users').then(res => res.json()),\r\n      fetch('/api/posts').then(res => res.json()),\r\n      fetch('/api/comments').then(res => res.json())\r\n    ]);\r\n    \r\n    return { users, posts, comments };\r\n  } catch (error) {\r\n    console.error('데이터 로딩 실패:', error);\r\n  }\r\n}\r\n```\r\n\r\n## 에러 처리\r\n\r\n```javascript\r\nasync function robustDataFetch() {\r\n  try {\r\n    const response = await fetch('/api/data');\r\n    \r\n    if (!response.ok) {\r\n      throw new Error(`HTTP error! status: ${response.status}`);\r\n    }\r\n    \r\n    const data = await response.json();\r\n    return data;\r\n  } catch (error) {\r\n    if (error.name === 'TypeError') {\r\n      console.error('네트워크 에러:', error.message);\r\n    } else {\r\n      console.error('기타 에러:', error.message);\r\n    }\r\n    throw error;\r\n  }\r\n}\r\n```\r\n\r\n## 결론\r\n\r\n비동기 프로그래밍은 현대 JavaScript 개발의 핵심입니다. Promise와 async/await를 적절히 활용하면 깔끔하고 유지보수하기 쉬운 코드를 작성할 수 있습니다."
  },
  {
    "slug": "css-grid-layout",
    "title": "CSS Grid 레이아웃 마스터하기",
    "date": "2024-01-20",
    "author": "프론트엔드 개발자",
    "category": "Tech",
    "tags": [
      "CSS",
      "Grid",
      "Layout",
      "반응형"
    ],
    "excerpt": "CSS Grid를 활용한 현대적인 웹 레이아웃 디자인 방법을 알아봅니다.",
    "image": "/github-page-test/images/css-grid-hero.svg",
    "imageAlt": "CSS Grid 레이아웃 예제 이미지",
    "content": "# CSS Grid 레이아웃 마스터하기\r\n\r\nCSS Grid는 2차원 레이아웃 시스템으로, 행과 열을 동시에 제어할 수 있는 강력한 도구입니다.\r\n\r\n## Grid 기본 개념\r\n\r\n### Grid Container와 Grid Item\r\n\r\n```css\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 1fr;\r\n  grid-template-rows: auto 1fr auto;\r\n  gap: 20px;\r\n}\r\n```\r\n\r\n### 명시적 그리드와 암시적 그리드\r\n\r\n- **명시적 그리드**: `grid-template-columns`와 `grid-template-rows`로 정의\r\n- **암시적 그리드**: 자동으로 생성되는 추가 행/열\r\n\r\n## 실용적인 예제\r\n\r\n### 카드 레이아웃\r\n\r\n```css\r\n.card-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  gap: 2rem;\r\n  padding: 2rem;\r\n}\r\n```\r\n\r\n### 복잡한 레이아웃\r\n\r\n```css\r\n.layout {\r\n  display: grid;\r\n  grid-template-areas:\r\n    \"header header header\"\r\n    \"sidebar main aside\"\r\n    \"footer footer footer\";\r\n  grid-template-columns: 200px 1fr 200px;\r\n  grid-template-rows: auto 1fr auto;\r\n  min-height: 100vh;\r\n}\r\n\r\n.header { grid-area: header; }\r\n.sidebar { grid-area: sidebar; }\r\n.main { grid-area: main; }\r\n.aside { grid-area: aside; }\r\n.footer { grid-area: footer; }\r\n```\r\n\r\n## 반응형 디자인\r\n\r\n```css\r\n.responsive-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n  gap: 1rem;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .responsive-grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n```\r\n\r\n## 결론\r\n\r\nCSS Grid는 현대적인 웹 레이아웃을 만들기 위한 필수 도구입니다. Flexbox와 함께 사용하면 더욱 강력한 레이아웃을 구현할 수 있습니다."
  }
];

// 포스트 목록을 가져오는 함수
export const getPostList = (): Post[] => {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// 특정 포스트를 가져오는 함수
export const getPostBySlug = (slug: string): Post | null => {
  return posts.find(post => post.slug === slug) || null;
};

// 페이지네이션을 위한 함수
export const getPaginatedPosts = (page: number = 1, postsPerPage: number = 5): PaginatedPostsResponse => {
  const allPosts = getPostList();
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  
  return {
    posts: allPosts.slice(startIndex, endIndex),
    pagination: {
      currentPage: page,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
      totalPosts: allPosts.length
    }
  };
};
