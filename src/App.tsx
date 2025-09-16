import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import koKR from 'antd/locale/ko_KR';
import Header from './components/Header';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import './App.css';

const App: React.FC = () => {
  return (
    <ConfigProvider locale={koKR}>
      <Router basename="/">
        <div className="App">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/post/:slug" element={<PostDetail />} />
              {/* 모든 다른 경로를 홈으로 리다이렉트 */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ConfigProvider>
  );
};

export default App;
