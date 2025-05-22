// CustomHeader.jsx
import React from 'react';
import '../../../font.css';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { getToken, getUser } from '../middleware/Authutils';
import { useEffect } from 'react';
const { Header, Sider } = Layout;
export default function CustomHeader({ collapsed, setCollapsed }) {
    const navigate = useNavigate();
    useEffect(() => {

        const token = getToken(navigate);
        if (!token) {
            navigate("/admin");
        }
    }, [navigate]);

    return (
        <>

            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" style={{ color: '#fff', padding: 20 }}>
                    {collapsed ? 'A' : 'Admin Panel'}
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: <Link to="/admin/dashboard">Dashboard</Link>,

                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: <Link to="/admin/products">Products</Link>,
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Slider',
                        },
                    ]}
                />
            </Sider>


        </>
    );
}