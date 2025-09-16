// 포스트 관련 타입 정의
export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  image?: string;  // 포스트 리스트용 이미지 (선택적)
  imageAlt?: string;  // 이미지 alt 텍스트 (선택적)
}

// 페이지네이션 관련 타입 정의
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPosts: number;
}

// 페이지네이션된 포스트 응답 타입
export interface PaginatedPostsResponse {
  posts: Post[];
  pagination: PaginationInfo;
}

// 메뉴 아이템 타입
export interface MenuItem {
  key: string;
  icon: React.ReactNode;
  label: React.ReactNode;
}

// 컴포넌트 Props 타입들
export interface HeaderProps {
  // 현재는 props가 없지만 향후 확장 가능
}

export interface PostListProps {
  // 현재는 props가 없지만 향후 확장 가능
}

export interface PostDetailProps {
  // 현재는 props가 없지만 향후 확장 가능
}

export interface PaginationProps {
  pagination: PaginationInfo;
  onPageChange: (page: number) => void;
}