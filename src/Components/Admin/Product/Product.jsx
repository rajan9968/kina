import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, theme, Table, Avatar, Button, Dropdown, message, Breadcrumb, Tag, Space, Badge } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';
import CustomHeader from '../Common/Header';
import { getUser } from '../middleware/Authutils';
import { getAllProduct } from '../Api/ProductService';
const { Header, Sider, Content } = Layout;


export default function Product() {
    const user = getUser()
    const userName = user ? user.name : "Sign In";
    const [collapsed, setCollapsed] = useState(false);
    const [data, setData] = useState([]);
    const {
        token: { borderRadiusLG },
    } = theme.useToken();

    const { Column } = Table;
    const fetchProducts = async () => {
        try {
            const response = await getAllProduct();
            if (response && response.product) {
                const data = response.product.map((item, index) => ({
                    key: index,
                    id: item._id,
                    image: item.image,
                    productName: item.name,
                    category: item.category,
                    sale: '₹ ' + item.mrp_price,
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

    // const data = fetchProducts.map((items, index) => ({
    //     key: index,
    //     firstName: items.name,
    //     lastName: items.description,
    //     age: items.mrp_price,
    //     address: items.sale_price,
    //     tags: items.tags,

    // }));

    // const data = [
    //     {
    //         key: '1',
    //         firstName: 'John',
    //         lastName: 'Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         firstName: 'Jim',
    //         lastName: 'Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         firstName: 'Joe',
    //         lastName: 'Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];

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
                                title: 'Products',
                                href: '',
                            },

                        ]}
                    />
                    <h1 className='heading mb-0'>Products</h1>
                    <div className='row' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', color: '#9fa6bc' }}>
                        <div>
                            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '20px', margin: 0 }}>
                                <li>All (68817)</li>
                                <li>Published (68817)</li>
                                <li>Published (68817)</li>
                                <li>Drafts (68817)</li>
                                <li>On discount (68817)</li>
                            </ul>
                        </div>
                        <div className='out-btn'>
                            <Link to="/admin/add-product">
                                {/* <Button type="primary" icon={<PlusOutlined className="our-icon" />} size="large"> */}
                                <Button type="primary" style={{ color: "#fff !important" }} icon={<PlusOutlined className="our-icon" />} size="large">
                                    Add product
                                </Button>
                            </Link>

                        </div>
                    </div>




                    <Table className='ecom-prodict-table' dataSource={data}>
                        <Column
                            dataIndex="image"
                            key="image"
                            render={(image) => {
                                const fixedPath = image.replace(/\\/g, '/');
                                return (
                                    <img
                                        src={`http://localhost:8000/${fixedPath}`}
                                        alt="Product"
                                        width={60}
                                        height={60}
                                        style={{ objectFit: 'cover', borderRadius: 8 }}
                                    />

                                );
                            }}
                        />

                        <Column title="Product Name" dataIndex="productName" key="productName" />
                        <Column title="Price" dataIndex="sale" key="sale" />
                        <Column title="Category" dataIndex="category" key="category" />
                        <Column
                            title="Tags"
                            dataIndex="tags"
                            key="tags"
                            render={tags => (
                                <>
                                    {tags.map(tag => {
                                        let color = tag.length > 5 ? 'geekblue' : 'green';
                                        if (tag === 'loser') {
                                            color = 'volcano';
                                        }
                                        return (
                                            <Tag color={color} key={tag}>
                                                {tag.toUpperCase()}
                                            </Tag>
                                        );
                                    })}
                                </>
                            )}
                        />
                        <Column title="Status" dataIndex="status" key="status" />
                        <Column
                            title="Action"
                            key="action"
                            render={(_, record) => (
                                <Space size="middle">
                                    {/* <Link to={{ pathname: '/admin/edit-product', state: { productId: record.key } }}>
                                        Edit</Link> */}
                                    <Link to={`/admin/edit-product/${record.id}`}>Edit</Link>
                                    {/* <a >Invite {record.lastName}</a> */}
                                    <a>Delete</a>
                                </Space>
                            )}
                        />
                    </Table>
                </Content>
            </Layout>
        </Layout >
    )
}
