import React from 'react';
import { Menu } from 'antd';
import {
  ShoppingCartOutlined,
  SettingOutlined,
  UserOutlined,
  WechatWorkOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom'

export const MenuLayout = () => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={[
        {
          key: '1',
          icon: <UserOutlined />,
          label: <Link to="/profile">Профиль</Link>,
        },
        {
          key: '2',
          icon: <ShoppingCartOutlined />,
          label: <Link to="/cart">Корзина</Link>,
        },
        {
          key: '3',
          icon: <SettingOutlined />,
          label: <Link to="/settings">Настройки</Link>,
        },
        {
          key: '4',
          icon: <WechatWorkOutlined />,
          label: <Link to="/news">Новости</Link>,
        },
          {
          key: '5',
          icon: <WechatWorkOutlined />,
          label: <Link to="/products">Товары</Link>,
        },
      ]}
    />
  )
}