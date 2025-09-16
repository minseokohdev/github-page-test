import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Card, Typography, Spin, Empty, Input, Select, Space } from 'antd';
import { CalendarOutlined, UserOutlined, ArrowRightOutlined, SearchOutlined, FilterOutlined } from '@ant-design/icons';
import { getPaginatedPosts } from '../utils/markdownParser';
import Pagination from './Pagination';
import { PostListProps, Post, PaginationInfo } from '../types';

const { Title, Paragraph, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const PostList: React.FC<PostListProps> = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
    totalPosts: 0
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const loadAllPosts = async (): Promise<void> => {
    setLoading(true);
    try {
      const data = await getPaginatedPosts(1, 1000); // 모든 포스트 로드
      setAllPosts(data.posts);
    } catch (error) {
      console.error('포스트를 불러오는 중 오류:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterAndPaginatePosts = useCallback((): void => {
    let filteredPosts = allPosts;

    // 검색 필터링
    if (searchTerm) {
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // 카테고리 필터링
    if (selectedCategory !== 'all') {
      filteredPosts = filteredPosts.filter(post => post.category === selectedCategory);
    }

    // 페이지네이션
    const postsPerPage = 5;
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    setPosts(paginatedPosts);
    setPagination({
      currentPage,
      totalPages,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
      totalPosts: filteredPosts.length
    });
  }, [allPosts, searchTerm, selectedCategory, currentPage]);

  useEffect(() => {
    loadAllPosts();
  }, []);

  useEffect(() => {
    filterAndPaginatePosts();
  }, [filterAndPaginatePosts]);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (value: string): void => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string): void => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center min-h-96">
            <Spin size="large" />
            <Text className="mt-6 text-gray-600 text-lg">포스트를 불러오는 중...</Text>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* 헤더 섹션 */}
        <div className="text-center mb-12">
          <Title level={1} className="!text-4xl !text-gray-900 !mb-6 !font-bold">
            최신 포스트
          </Title>
          <Paragraph className="text-lg text-gray-600 !mb-8 max-w-2xl mx-auto">
            개발과 기술에 대한 이야기를 공유합니다. 실무 경험과 인사이트를 담은 콘텐츠를 만나보세요.
          </Paragraph>
        </div>

        {/* 검색 및 필터 섹션 */}
        <div className="mb-8">
          <Space direction="vertical" size="middle" className="w-full">
            <div className="flex flex-col sm:flex-row gap-4">
              <Search
                placeholder="포스트 검색..."
                allowClear
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={handleSearch}
                className="flex-1"
              />
              <Select
                placeholder="카테고리 선택"
                value={selectedCategory}
                onChange={handleCategoryChange}
                size="large"
                className="w-full sm:w-48"
                suffixIcon={<FilterOutlined />}
              >
                <Option value="all">전체</Option>
                <Option value="Tech">Tech</Option>
                <Option value="Culture">Culture</Option>
              </Select>
            </div>
            {(searchTerm || selectedCategory !== 'all') && (
              <div className="text-center">
                <Text type="secondary">
                  {searchTerm && `"${searchTerm}" 검색 결과`}
                  {searchTerm && selectedCategory !== 'all' && ' • '}
                  {selectedCategory !== 'all' && `${selectedCategory} 카테고리`}
                  {' • '}총 {pagination.totalPosts}개 포스트
                </Text>
              </div>
            )}
          </Space>
        </div>

        {/* 포스트 리스트 (세로 레이아웃) */}
        <div className="space-y-6 mb-12">
          {posts.map((post, index) => (
            <Card
              key={post.slug}
              hoverable
              className="blog-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              styles={{ body: { padding: '0' } }}
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* 이미지 섹션 */}
                  <div className="flex-shrink-0 lg:w-48">
                    <img 
                      src={post.image || '/images/default-hero.svg'} 
                      alt={post.imageAlt || post.title}
                      className="post-image mb-4"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/default-hero.svg';
                      }}
                      loading="lazy"
                    />
                    <div className="flex flex-col gap-3">
                      <span className={`category-badge ${post.category === 'Tech' ? 'category-tech' : 'category-culture'} w-fit`}>
                        {post.category || 'Tech'}
                      </span>
                      <Text type="secondary" className="text-sm">
                        <CalendarOutlined className="mr-2" />
                        {format(new Date(post.date), 'yyyy-MM-dd')}
                      </Text>
                      <Text type="secondary" className="text-sm">
                        <UserOutlined className="mr-2" />
                        by {post.author}
                      </Text>
                    </div>
                  </div>

                  {/* 콘텐츠 */}
                  <div className="flex-1">
                    <Title level={3} className="post-title !mb-4 !text-2xl !leading-tight">
                      <Link to={`/post/${post.slug}`} className="text-inherit hover:text-inherit">
                        {post.title}
                      </Link>
                    </Title>

                    <Paragraph 
                      className="post-excerpt !mb-6 text-lg"
                      ellipsis={{ rows: 3, expandable: false }}
                    >
                      {post.excerpt}
                    </Paragraph>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="tag-list">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="tag-item">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <Link 
                        to={`/post/${post.slug}`}
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors self-start"
                      >
                        더 읽기 <ArrowRightOutlined className="text-sm" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* 포스트가 없을 때 */}
        {posts.length === 0 && !loading && (
          <div className="flex justify-center py-20">
            <Empty 
              description={
                searchTerm || selectedCategory !== 'all' 
                  ? "검색 결과가 없습니다" 
                  : "아직 포스트가 없습니다"
              }
              className="text-gray-500"
            />
          </div>
        )}

        {/* 페이지네이션 */}
        <Pagination
          pagination={pagination}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PostList;