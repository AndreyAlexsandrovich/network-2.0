import React from 'react';
import { ContentLayout } from "./layout/content"
import { HeaderLayout } from "./layout/header"
import { SiderLayout } from "./layout/sider"
import { Layout } from "antd"
import { useState } from 'react'
import { Profile } from './pages/Profile/profile';
import { Cart } from './pages/Cart/cart';
import { Settings } from './pages/Settings/settings';
import { News } from './pages/News/news';
import { Products } from './pages/Products/products'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


export const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Router>
      <Layout>
        <SiderLayout collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout>
          <HeaderLayout collapsed={collapsed} setCollapsed={setCollapsed} />
          <ContentLayout >
            <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/news' element={<News />} />
              <Route path='/' element={<Products />} />
            </Routes>
          </ContentLayout>
        </Layout>
      </Layout>
    </Router>
  )
}