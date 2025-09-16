---
title: "JavaScript 비동기 프로그래밍 완전 정복"
date: "2024-01-25"
author: "JavaScript 개발자"
category: "Tech"
tags: ["JavaScript", "Async", "Promise", "Async/Await"]
excerpt: "JavaScript의 비동기 프로그래밍 개념과 Promise, async/await 사용법을 완벽하게 정리합니다."
image: "/images/javascript-async-hero.jpg"
imageAlt: "JavaScript 비동기 프로그래밍 다이어그램"
---

# JavaScript 비동기 프로그래밍 완전 정복

JavaScript는 단일 스레드 언어이지만, 비동기 프로그래밍을 통해 효율적인 코드를 작성할 수 있습니다.

## 콜백 함수의 한계

```javascript
// 콜백 지옥 예제
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      getFinalData(c, function(finalData) {
        console.log(finalData);
      });
    });
  });
});
```

## Promise의 등장

Promise는 비동기 작업의 성공 또는 실패를 나타내는 객체입니다.

### 기본 사용법

```javascript
const promise = new Promise((resolve, reject) => {
  // 비동기 작업
  setTimeout(() => {
    resolve('성공!');
  }, 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Promise 체이닝

```javascript
fetch('/api/users')
  .then(response => response.json())
  .then(users => {
    return fetch(`/api/users/${users[0].id}`);
  })
  .then(response => response.json())
  .then(user => console.log(user))
  .catch(error => console.error(error));
```

## Async/Await

async/await는 Promise를 더 읽기 쉽게 만들어주는 문법입니다.

### 기본 사용법

```javascript
async function fetchUserData() {
  try {
    const response = await fetch('/api/users');
    const users = await response.json();
    const userResponse = await fetch(`/api/users/${users[0].id}`);
    const user = await userResponse.json();
    console.log(user);
  } catch (error) {
    console.error('에러 발생:', error);
  }
}
```

### 병렬 처리

```javascript
async function fetchMultipleData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch('/api/users').then(res => res.json()),
      fetch('/api/posts').then(res => res.json()),
      fetch('/api/comments').then(res => res.json())
    ]);
    
    return { users, posts, comments };
  } catch (error) {
    console.error('데이터 로딩 실패:', error);
  }
}
```

## 에러 처리

```javascript
async function robustDataFetch() {
  try {
    const response = await fetch('/api/data');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'TypeError') {
      console.error('네트워크 에러:', error.message);
    } else {
      console.error('기타 에러:', error.message);
    }
    throw error;
  }
}
```

## 결론

비동기 프로그래밍은 현대 JavaScript 개발의 핵심입니다. Promise와 async/await를 적절히 활용하면 깔끔하고 유지보수하기 쉬운 코드를 작성할 수 있습니다.