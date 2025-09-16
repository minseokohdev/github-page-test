import React from 'react';
import { Pagination as AntPagination, Typography } from 'antd';
import { PaginationProps } from '../types';

const { Text } = Typography;

const Pagination: React.FC<PaginationProps> = ({ pagination, onPageChange }) => {
  const { currentPage, totalPages, totalPosts } = pagination;

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-6 py-12">
      <Text type="secondary" className="text-base">
        총 <span className="font-semibold text-gray-700">{totalPosts}</span>개의 포스트 중{' '}
        <span className="font-semibold text-blue-600">{currentPage}</span> /{' '}
        <span className="font-semibold text-gray-700">{totalPages}</span> 페이지
      </Text>
      
      <AntPagination
        current={currentPage}
        total={totalPosts}
        pageSize={5}
        showSizeChanger={false}
        showQuickJumper={false}
        showTotal={(total, range) => 
          `${range[0]}-${range[1]} / ${total}`
        }
        onChange={onPageChange}
        className="text-center"
        size="default"
        itemRender={(_, type, originalElement) => {
          if (type === 'prev') {
            return (
              <span className="text-blue-600 hover:text-blue-700 font-medium px-3 py-1 rounded-md hover:bg-blue-50 transition-colors">
                이전
              </span>
            );
          }
          if (type === 'next') {
            return (
              <span className="text-blue-600 hover:text-blue-700 font-medium px-3 py-1 rounded-md hover:bg-blue-50 transition-colors">
                다음
              </span>
            );
          }
          return originalElement;
        }}
      />
    </div>
  );
};

export default Pagination;
