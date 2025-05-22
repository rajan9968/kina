import React, { useState } from 'react';
import {
    Layout,
    theme,
    Table,
    Card,
    List,
    Avatar,
    Button,
    Dropdown,
    message,
    Breadcrumb
} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import CustomHeader from './Common/Header';
import { getUser } from './middleware/Authutils';
const { Header, Sider, Content } = Layout;

const AdminDashboard = () => {
    const user = getUser()
    const userName = user ? user.name : "Sign In";
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { borderRadiusLG, colorBgContainer },
    } = theme.useToken();

    const data = [
        { title: 'Title 1' },
        { title: 'Title 2' },
        { title: 'Title 3' },
        { title: 'Title 4' },
    ];

    const columns = [
        { title: 'Name', dataIndex: 'name' },
        { title: 'Age', dataIndex: 'age' },
        { title: 'Address', dataIndex: 'address' },
    ];

    const dataSource = Array.from({ length: 10 }).map((_, i) => ({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    }));

    const handleMenuClick = e => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    const items = [
        {
            label: 'Profile',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: 'Dashboard',
            key: '2',
            icon: <UserOutlined />,
        },
        {
            label: 'Settings & Privacy',
            key: '3',
            icon: <UserOutlined />,
        },
        {
            label: 'Sign Out',
            key: '4',
            icon: <UserOutlined />,
            danger: true,
        },
    ];

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* Sidebar Section */}
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: '#111', minHeight: '100vh' }}>
                <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
            </Sider>

            {/* Right side layout */}
            <Layout>
                {/* Top Header */}
                <Header
                    style={{
                        padding: '0 24px',
                        background: '#001529',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '18px',
                            color: '#fff',
                        }}
                    />
                    <Dropdown menu={menuProps} placement="bottomRight">
                        <a onClick={(e) => e.preventDefault()}>
                            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<UserOutlined />} />&nbsp;
                            {userName}
                        </a>
                    </Dropdown>
                </Header>

                {/* Content Area */}
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#001529', // Dark background to match
                        color: '#fff',
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Breadcrumb
                        separator=">"
                        items={[
                            {
                                title: 'Home',
                            },
                            {
                                title: 'Dashboard',
                                href: '',
                            },

                        ]}
                    />
                    <h1 className='heading mb-0'>Welcome Ambition Publication</h1>
                    <h4 className='sub-heading mb-0 pb-2'>Here's what's going on at your business right now</h4>

                    <List
                        className="card-ecom-fro"
                        grid={{ gutter: 16, column: 4 }}
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <Card title={item.title}>Card content</Card>
                            </List.Item>
                        )}
                    />

                    <Table
                        className='ecom-prodict-table'
                        columns={columns}
                        dataSource={dataSource}
                        style={{ marginTop: 24 }}
                    />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminDashboard;
