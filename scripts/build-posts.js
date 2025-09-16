import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// public/posts 폴더에서 마크다운 파일들을 읽어서 TypeScript 파일로 변환
function buildPosts() {
  const postsDir = path.join(__dirname, '../public/posts');
  const outputFile = path.join(__dirname, '../src/data/posts.ts');
  
  console.log('📝 마크다운 파일들을 파싱하는 중...');
  
  try {
    // posts 폴더의 모든 .md 파일 읽기
    const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'));
    
    if (files.length === 0) {
      console.log('⚠️  마크다운 파일이 없습니다.');
      return;
    }
    
    const posts = [];
    
    files.forEach(file => {
      const filePath = path.join(postsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // gray-matter로 frontmatter 파싱
      const { data, content } = matter(fileContent);
      
      // slug 생성 (파일명에서 확장자 제거)
      const slug = path.basename(file, '.md');
      
      // Post 객체 생성
      const post = {
        slug,
        title: data.title || '제목 없음',
        date: data.date || new Date().toISOString().split('T')[0],
        author: data.author || '작성자',
        category: data.category || 'Tech',
        tags: data.tags || [],
        excerpt: data.excerpt || '',
        image: data.image ? data.image.replace('/images/', '/github-page-test/images/') : '/github-page-test/images/default-hero.svg',
        imageAlt: data.imageAlt || data.title || '이미지',
        content: content.trim()
      };
      
      posts.push(post);
      console.log(`✅ ${file} 파싱 완료: ${post.title}`);
    });
    
    // 날짜순으로 정렬 (최신순)
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // TypeScript 파일 생성
    const tsContent = `// 이 파일은 빌드 시점에 자동으로 생성됩니다
// public/posts 폴더의 마크다운 파일들을 파싱하여 생성
import { Post, PaginatedPostsResponse } from '../types';

// 파싱된 포스트 데이터
const posts: Post[] = ${JSON.stringify(posts, null, 2)};

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
`;
    
    // 파일 쓰기
    fs.writeFileSync(outputFile, tsContent, 'utf8');
    
    console.log(`🎉 ${posts.length}개의 포스트가 성공적으로 파싱되었습니다!`);
    console.log(`📄 생성된 파일: ${outputFile}`);
    
  } catch (error) {
    console.error('❌ 포스트 빌드 중 오류 발생:', error);
    process.exit(1);
  }
}

// 스크립트 실행
buildPosts();

export { buildPosts };
