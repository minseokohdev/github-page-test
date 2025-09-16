import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Card, Typography, Spin, Button, Result } from 'antd';
import { CalendarOutlined, UserOutlined, ArrowLeftOutlined, TagOutlined } from '@ant-design/icons';
import { getPostBySlug } from '../utils/markdownParser';
import { PostDetailProps, Post } from '../types';
import 'highlight.js/styles/github.css';

const { Title, Paragraph, Text } = Typography;

const PostDetail: React.FC<PostDetailProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPost();
  }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadPost = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      const postData = await getPostBySlug(slug!);
      if (postData) {
        setPost(postData);
      } else {
        setError('포스트를 찾을 수 없습니다.');
      }
    } catch (err) {
      setError('포스트를 불러오는 중 오류가 발생했습니다.');
      console.error('포스트 로딩 오류:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center min-h-96">
            <Spin size="large" />
            <Text className="mt-6 text-gray-600 text-lg">포스트를 불러오는 중...</Text>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Result
            status="error"
            title="오류가 발생했습니다"
            subTitle={error}
            extra={
              <Button type="primary" icon={<ArrowLeftOutlined />}>
                <Link to="/">홈으로 돌아가기</Link>
              </Button>
            }
          />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Result
            status="404"
            title="포스트를 찾을 수 없습니다"
            subTitle="요청하신 포스트가 존재하지 않습니다."
            extra={
              <Button type="primary" icon={<ArrowLeftOutlined />}>
                <Link to="/">홈으로 돌아가기</Link>
              </Button>
            }
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* 뒤로가기 버튼 */}
        <div className="mb-8">
          <Button 
            type="text" 
            icon={<ArrowLeftOutlined />}
            className="text-blue-600 hover:text-blue-700 font-medium"
            size="large"
          >
            <Link to="/">목록으로 돌아가기</Link>
          </Button>
        </div>

        {/* 포스트 카드 */}
        <Card className="blog-card shadow-lg animate-slide-up">
          {/* 헤더 */}
          <div className="mb-10 pb-8 border-b border-gray-200">
            {/* 메타 정보 */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <span className={`category-badge ${post.category === 'Tech' ? 'category-tech' : 'category-culture'}`}>
                  {post.category || 'Tech'}
                </span>
                <Text type="secondary" className="text-sm">
                  <CalendarOutlined className="mr-2" />
                  {format(new Date(post.date), 'yyyy년 M월 d일', { locale: ko })}
                </Text>
              </div>
              <Text type="secondary" className="text-sm">
                <UserOutlined className="mr-2" />
                by {post.author}
              </Text>
            </div>

            {/* 제목 */}
            <Title level={1} className="!text-4xl !text-gray-900 !mb-6 !font-bold !leading-tight">
              {post.title}
            </Title>

            {/* 요약 */}
            {post.excerpt && (
              <Paragraph className="text-xl text-gray-600 !mb-8 italic leading-relaxed">
                {post.excerpt}
              </Paragraph>
            )}

            {/* 포스트 이미지 */}
            {post.image && (
              <div className="mb-8">
                <img 
                  src={post.image} 
                  alt={post.imageAlt || post.title}
                  className="post-image-large"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/default-hero.svg';
                  }}
                />
              </div>
            )}

            {/* 태그 */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center gap-3">
                <TagOutlined className="text-gray-400 text-lg" />
                <div className="tag-list">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="tag-item">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 콘텐츠 */}
          <div className="prose prose-lg max-w-none custom-selection">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                code({ className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || '');
                  const isInline = !match;
                  return !isInline && match ? (
                    <pre className="bg-gray-50 p-6 rounded-lg overflow-x-auto my-6 border border-gray-200">
                      <code className={className} {...props}>
                        {children}
                      </code>
                    </pre>
                  ) : (
                    <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono text-gray-800" {...props}>
                      {children}
                    </code>
                  );
                },
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold text-gray-900 mt-12 mb-6 pb-3 border-b-2 border-gray-200">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-semibold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                    {children}
                  </h4>
                ),
                p: ({ children }) => (
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 text-lg">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2 text-lg">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="leading-relaxed">
                    {children}
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-600 my-8 text-lg bg-blue-50 py-4 rounded-r-lg">
                    {children}
                  </blockquote>
                ),
                a: ({ children, href }) => (
                  <a 
                    href={href} 
                    className="text-blue-600 hover:text-blue-700 underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                table: ({ children }) => (
                  <div className="overflow-x-auto my-8 border border-gray-200 rounded-lg">
                    <table className="min-w-full">
                      {children}
                    </table>
                  </div>
                ),
                th: ({ children }) => (
                  <th className="bg-gray-50 border-b border-gray-200 px-6 py-4 text-left font-semibold text-gray-900">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border-b border-gray-100 px-6 py-4 text-gray-700">
                    {children}
                  </td>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-gray-900">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-gray-600">
                    {children}
                  </em>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PostDetail;
