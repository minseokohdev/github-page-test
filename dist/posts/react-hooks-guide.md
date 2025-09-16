---
title: "React Hooks 완벽 가이드"
date: "2024-02-01"
author: "React 개발자"
category: "Tech"
tags: ["React", "Hooks", "useState", "useEffect"]
excerpt: "React Hooks의 모든 것을 알아보는 완벽한 가이드입니다."
image: "/images/react-hooks-hero.jpg"
imageAlt: "React Hooks 로고와 예제 코드"
---

# React Hooks 완벽 가이드

React Hooks는 함수형 컴포넌트에서 상태와 생명주기를 관리할 수 있게 해주는 기능입니다.

## Hooks란?

Hooks는 React 16.8에서 도입된 기능으로, 함수형 컴포넌트에서도 클래스형 컴포넌트의 기능을 사용할 수 있게 해줍니다.

## 기본 Hooks

### useState

상태를 관리하는 가장 기본적인 Hook입니다.

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        증가
      </button>
      <button onClick={() => setCount(count - 1)}>
        감소
      </button>
    </div>
  );
}
```

### useEffect

컴포넌트의 생명주기를 관리하는 Hook입니다.

```javascript
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('사용자 데이터 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]); // userId가 변경될 때만 실행

  if (loading) return <div>로딩 중...</div>;
  if (!user) return <div>사용자를 찾을 수 없습니다.</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

## 커스텀 Hooks

자신만의 Hook을 만들어 로직을 재사용할 수 있습니다.

```javascript
import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('네트워크 응답이 올바르지 않습니다');
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// 사용 예제
function PostList() {
  const { data: posts, loading, error } = useApi('/api/posts');

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <ul>
      {posts?.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

## 고급 Hooks

### useReducer

복잡한 상태 로직을 관리할 때 사용합니다.

```javascript
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>카운트: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        증가
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        감소
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        리셋
      </button>
    </div>
  );
}
```

### useMemo와 useCallback

성능 최적화를 위한 Hook들입니다.

```javascript
import React, { useState, useMemo, useCallback } from 'react';

function ExpensiveComponent({ items }) {
  const [filter, setFilter] = useState('');

  // 비용이 큰 계산을 메모이제이션
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // 함수를 메모이제이션
  const handleItemClick = useCallback((itemId) => {
    console.log('아이템 클릭:', itemId);
  }, []);

  return (
    <div>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="아이템 검색..."
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id} onClick={() => handleItemClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## Hooks 규칙

1. **최상위에서만 Hook을 호출하세요**
   - 반복문, 조건문, 중첩된 함수 내에서 Hook을 호출하지 마세요

2. **React 함수에서만 Hook을 호출하세요**
   - 일반 JavaScript 함수에서 Hook을 호출하지 마세요

## 결론

React Hooks는 함수형 컴포넌트를 더욱 강력하게 만들어주는 기능입니다. 적절히 활용하면 코드의 재사용성과 가독성을 크게 향상시킬 수 있습니다.