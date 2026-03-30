import { MenuLayout } from "./menu";
import { Layout } from 'antd';
import React from 'react';
const { Sider } = Layout;


export const SiderLayout = ({collapsed, setCollapsed}) => {
    return (
        <Sider trigger={null} collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <MenuLayout />
        </Sider>
    )
}