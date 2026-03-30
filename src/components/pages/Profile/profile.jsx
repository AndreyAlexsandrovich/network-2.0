import React from 'react';
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { EditModal } from '../../EditForm';
import { useState } from 'react'
const profileStyle = {
    display: 'flex',
    flexDirection: 'column'
}


export const Profile = () => {
    const [data, setData] = useState({
            name: 'Майкл Майерс',
            email: 'maikl.maiers@mail.ru',
            url: 'https://i.ytimg.com/vi/X_TtUOjMG_A/maxresdefault.jpg'
    })
    return (
        <>
            <Space wrap size={16}>
                <div style={profileStyle}>
                    <Avatar shape="square" size={520} src={data.url || undefined} icon={<UserOutlined />} />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
                        <p style={{ fontSize: 24, fontWeight: 600, margin: 0 }}>{data.name}</p>
                        <EditModal setData={setData} />
                    </div>
                    <p style={{ fontSize: 16, fontWeight: 200, margin: 0, color: '#747474b0' }}>
                        <span style={{ fontSize: 16, fontWeight: 200 }}>Эл.почта :</span>
                    {data.email}
                    </p>
                </div>
            </Space>
        </>
    )
}