import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, theme, Table, Avatar, Button, Dropdown, message, Breadcrumb, Tag, Space, Badge } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';
import CustomHeader from '../Common/Header';
import { getUser } from '../middleware/Authutils';
import { getAllBanner, deleteBanner } from '../Api/BannerService';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

export default function Categories() {
    const user = getUser()
    const { bannerId } = useParams();
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalPublished, setTotalPublished] = useState(0);
    const location = useLocation();
    const userName = user ? user.name : "Sign In";
    const [collapsed, setCollapsed] = useState(false);
    const [data, setData] = useState([]);
    const {
        token: { borderRadiusLG },
    } = theme.useToken();

    const { Column } = Table;
    const fetchProducts = async () => {
        try {
            const response = await getAllBanner();
            if (response && response.banner) {
                const totalCount = response.banner.length;
                setTotalProducts(totalCount);

                const totalPublished = response.banner.filter(item => item.status == 1).length;
                setTotalPublished(totalPublished);

                const data = response.banner.map((item, index) => ({
                    key: index,
                    id: item._id,
                    banner_url: item.banner_url,
                    image: item.image,
                    status: item.status == 1 ? <Badge status="success" text="Show" style={{ color: ' #52c41a' }} /> : <Badge status="error" text="Hide" style={{ color: ' #ff4d4f' }} />,
                    tags: item.tags,
                }));
                setData(data);
            }

        } catch (error) {
            console.error("Error fetching products:", error);

        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

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

    // delet api call 
    useEffect(() => {
        const handleDelete = async () => {
            try {
                const res = await deleteBanner(bannerId);
                // console.log("Deleted:", res);
                alert('Product deleted successfully');
                window.location.href = '/admin/banner';
            } catch (err) {
                alert('Failed to delete product');
                console.error(err);
            }
        };

        if (location.pathname.startsWith('/admin/delete-banner/')) {
            handleDelete();
        }
    }, [location.pathname, bannerId]);



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
                                title: 'Categories',
                                href: '',
                            },

                        ]}
                    />
                    <h1 className='heading mb-0'>Categories</h1>
                    <div className='row' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', color: '#9fa6bc' }}>
                        <div>
                            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '20px', margin: 0 }}>
                                <li>All ({totalProducts})</li>
                                <li>Published ({totalPublished})</li>
                            </ul>
                        </div>
                        <div className='out-btn'>
                            <Link to="/admin/add-catregory" style={{ textDecoration: 'none' }}>
                                {/* <Button type="primary" icon={<PlusOutlined className="our-icon" />} size="large"> */}
                                <Button type="primary" style={{ color: "#fff !important" }} icon={<PlusOutlined className="our-icon" />} size="large">
                                    Add Categories
                                </Button>
                            </Link>

                        </div>
                    </div>




                    <Table className='ecom-prodict-table' dataSource={data}>
                        <Column title="Categories" dataIndex="banner_url" key="banner_url" />
                        <Column title="Status" dataIndex="status" key="status" />
                        <Column
                            title="Action"
                            key="action"
                            render={(_, record) => (
                                <Space size="middle">
                                    {/* <Link to={{ pathname: '/admin/edit-product', state: { productId: record.key } }}>
                                           Edit</Link> */}
                                    <Link to={`/admin/edit-banner/${record.id}`}>Edit</Link>
                                    {/* <a >Invite {record.lastName}</a> */}
                                    <Link to={`/admin/delete-banner/${record.id}`}>Delete</Link>
                                </Space>
                            )}
                        />
                    </Table>
                </Content>
            </Layout>
        </Layout >
    )
}

