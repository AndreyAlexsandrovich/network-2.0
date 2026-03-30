import React from 'react';
import { Layout, theme } from 'antd';
const { Content } = Layout;

export const ContentLayout = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Content
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: '100vh',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}
        >
            {children}
        </Content>
    )
}