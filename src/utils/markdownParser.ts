import { getPostList as getPosts, getPostBySlug as getPost, getPaginatedPosts as getPaginated } from '../data/posts';
import { Post, PaginatedPostsResponse } from '../types';

// 개발 환경에서 동적 로딩을 위한 함수들
const isDevelopment = import.meta.env.DEV;

// MD 파일 목록을 가져오는 함수
export const getPostList = async (): Promise<Post[]> => {
  try {
    if (isDevelopment) {
      // 개발 환경: 동적 로딩
      return await loadMarkdownFiles();
    } else {
      // 프로덕션 환경: 빌드 타임에 생성된 데이터 사용
      return getPosts();
    }
  } catch (error) {
    console.error('포스트 목록을 가져오는 중 오류:', error);
    // 폴백으로 정적 데이터 사용
    return getPosts();
  }
};

// 특정 포스트를 가져오는 함수
export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    if (isDevelopment) {
      // 개발 환경: 동적 로딩
      return await loadMarkdownContent(slug);
    } else {
      // 프로덕션 환경: 빌드 타임에 생성된 데이터 사용
      return getPost(slug);
    }
  } catch (error) {
    console.error(`포스트 ${slug}를 가져오는 중 오류:`, error);
    // 폴백으로 정적 데이터 사용
    return getPost(slug);
  }
};

// 페이지네이션을 위한 함수
export const getPaginatedPosts = async (page: number = 1, postsPerPage: number = 5): Promise<PaginatedPostsResponse> => {
  try {
    if (isDevelopment) {
      // 개발 환경: 동적 로딩 후 페이지네이션
      const allPosts = await loadMarkdownFiles();
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
    } else {
      // 프로덕션 환경: 빌드 타임에 생성된 데이터 사용
      return getPaginated(page, postsPerPage);
    }
  } catch (error) {
    console.error('페이지네이션된 포스트를 가져오는 중 오류:', error);
    // 폴백으로 정적 데이터 사용
    return getPaginated(page, postsPerPage);
  }
};

// 개발 환경에서 MD 파일들을 동적으로 로드하는 함수
export const loadMarkdownFiles = async (): Promise<Post[]> => {
  try {
    // 알려진 마크다운 파일들 목록
    const knownFiles = [
      'css-grid-layout.md',
      'javascript-async.md', 
      'new-post-example.md',
      'react-hooks-guide.md'
    ];
    
    const posts: Post[] = [];
    
    // 각 파일을 순차적으로 로드
    for (const filename of knownFiles) {
      try {
        const post = await loadMarkdownContent(filename);
        if (post) {
          posts.push(post);
        }
      } catch (error) {
        console.warn(`파일 ${filename} 로드 실패:`, error);
      }
    }
    
    // 날짜순으로 정렬 (최신순)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('MD 파일들 로드 중 오류:', error);
    return [];
  }
};

// 특정 MD 파일의 내용을 로드하고 파싱하는 함수
export const loadMarkdownContent = async (filename: string): Promise<Post | null> => {
  try {
    const response = await fetch(`/posts/${filename}`);
    if (!response.ok) {
      throw new Error(`MD 파일 ${filename}을 가져올 수 없습니다`);
    }
    
    const content = await response.text();
    
    // gray-matter를 사용하여 frontmatter 파싱
    const { data, content: markdownContent } = parseMarkdown(content);
    
    // slug 생성 (파일명에서 확장자 제거)
    const slug = filename.replace('.md', '');
    
    // Post 객체 생성
    const post: Post = {
      slug,
      title: data.title || '제목 없음',
      date: data.date || new Date().toISOString().split('T')[0],
      author: data.author || '작성자',
      category: data.category || 'Tech',
      tags: data.tags || [],
      excerpt: data.excerpt || '',
      image: data.image || '/images/default-hero.svg',
      imageAlt: data.imageAlt || data.title || '이미지',
      content: markdownContent.trim()
    };
    
    return post;
  } catch (error) {
    console.error(`MD 파일 ${filename} 로드 중 오류:`, error);
    return null;
  }
};

// 간단한 frontmatter 파싱 함수 (gray-matter 대신 사용)
function parseMarkdown(content: string): { data: any; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content };
  }
  
  const [, frontmatter, markdownContent] = match;
  
  // 간단한 YAML 파싱
  const data: any = {};
  const lines = frontmatter.split('\n');
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine && trimmedLine.includes(':')) {
      const [key, ...valueParts] = trimmedLine.split(':');
      let value = valueParts.join(':').trim();
      
      // 따옴표 제거
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // 배열 파싱 (tags 등)
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value);
        } catch {
          // JSON 파싱 실패 시 문자열 그대로 사용
        }
      }
      
      data[key.trim()] = value;
    }
  }
  
  return { data, content: markdownContent };
}
