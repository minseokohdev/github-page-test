---
title: "CSS Grid 레이아웃 마스터하기"
date: "2024-01-20"
author: "프론트엔드 개발자"
category: "Tech"
tags: ["CSS", "Grid", "Layout", "반응형"]
excerpt: "CSS Grid를 활용한 현대적인 웹 레이아웃 디자인 방법을 알아봅니다."
image: "/images/css-grid-hero.jpg"
imageAlt: "CSS Grid 레이아웃 예제 이미지"
---

# CSS Grid 레이아웃 마스터하기

CSS Grid는 2차원 레이아웃 시스템으로, 행과 열을 동시에 제어할 수 있는 강력한 도구입니다.

## Grid 기본 개념

### Grid Container와 Grid Item

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}
```

### 명시적 그리드와 암시적 그리드

- **명시적 그리드**: `grid-template-columns`와 `grid-template-rows`로 정의
- **암시적 그리드**: 자동으로 생성되는 추가 행/열

## 실용적인 예제

### 카드 레이아웃

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
```

### 복잡한 레이아웃

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
```

## 반응형 디자인

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

@media (max-width: 768px) {
  .responsive-grid {
    grid-template-columns: 1fr;
  }
}
```

## 결론

CSS Grid는 현대적인 웹 레이아웃을 만들기 위한 필수 도구입니다. Flexbox와 함께 사용하면 더욱 강력한 레이아웃을 구현할 수 있습니다.