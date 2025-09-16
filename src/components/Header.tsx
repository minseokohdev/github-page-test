import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';
import { HomeOutlined, BookOutlined } from '@ant-design/icons';
import { HeaderProps } from '../types';
import type { MenuProps } from 'antd';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: React.FC<HeaderProps> = () => {
  const menuItems: MenuProps['items'] = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: <Link to="/" className="text-white hover:text-white">홈</Link>,
    },
    // {
    //   key: 'about',
    //   icon: <InfoCircleOutlined />,
    //   label: <Link to="/about" className="text-white hover:text-white">소개</Link>,
    // },
    // {
    //   key: 'contact',
    //   icon: <MailOutlined />,
    //   label: <Link to="/contact" className="text-white hover:text-white">연락처</Link>,
    // },
  ];

  return (
    <AntHeader className="gradient-bg shadow-glass sticky top-0 z-50 px-0">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-6 relative z-10">
        <Link to="/" className="flex items-center space-x-3 text-white hover:text-white transition-all duration-300 group">
          <BookOutlined className="text-2xl group-hover:animate-bounce-gentle" />
          <Title level={3} className="!text-white !mb-0 !font-bold !text-xl group-hover:text-blue-200 transition-colors duration-300">
            기술 블로그
          </Title>
        </Link>
        
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          className="bg-transparent border-none flex-1 justify-end"
          style={{ 
            backgroundColor: 'transparent',
            border: 'none',
            flex: 1,
            justifyContent: 'flex-end',
            lineHeight: '64px'
          }}
        />
      </div>
    </AntHeader>
  );
};

export default Header;
