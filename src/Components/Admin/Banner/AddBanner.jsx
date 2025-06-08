import React, { useState, } from 'react';
import { Layout, theme, Avatar, Button, Dropdown, message, Breadcrumb, Input, Upload, Row, Col, Tabs, Select, Space, Form } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, InboxOutlined } from '@ant-design/icons';
import CustomHeader from '../Common/Header';
import { getUser } from '../middleware/Authutils';
import { addBanner } from '../Api/BannerService';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const { Dragger } = Upload;


const props = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};
export default function AddBanner() {
    const navigate = useNavigate();
    const user = getUser()
    const userName = user ? user.name : "Sign In";

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { borderRadiusLG, colorBgContainer },
    } = theme.useToken();

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
    const onFinish = async (values) => {
        const formData = new FormData();
        formData.append('tags', values.tags);
        formData.append('banner_url', values.banner_url); // If you have a banner URL field
        const file = values.image && values.image.fileList[0]; // Assuming a single file upload
        if (file) {
            formData.append('image', file.originFileObj); // Append the file itself
        }
        // console.log('Sending FormData:', [...formData.entries()]);
        try {
            const response = await addBanner(formData);

            if (response.success === true) {
                toast.success("Banner added successfully");
                navigate('/admin/banner');
                // form.resetFields();

            } else {
                toast.error("Please fill all required fields");
            }
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };
    return (
        <Layout style={{ minHeight: '160vh' }}>
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
                                title: 'Add Banner',
                                href: '',
                            },

                        ]}
                    />
                    <h1 className='heading mb-0'>Add Banner</h1>
                    <h4 className='sub-heading mb-0 pb-2'>Highlight Product in top</h4>

                    <Form layout="vertical" onFinish={onFinish} encType="multipart/form-data">
                        <Row className="product-form" gutter={[16, 16]}>
                            <Col span={24}>

                                <Form.Item label="Images" name="image">
                                    <Dragger {...props} style={{ marginBottom: 24, height: 100, display: 'block' }}>
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                        </p>
                                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                        <p className="ant-upload-hint">
                                            Support for single or bulk upload. Do not upload confidential or banned files.
                                        </p>
                                    </Dragger>
                                </Form.Item>
                                <Form.Item label="Alt Tag" name="tags" rules={[{ required: false, message: 'Please enter product name' }]}>
                                    <Input placeholder="Enter Book Name" />
                                </Form.Item>
                                <Form.Item label="Banner URL" name="banner_url" rules={[{ required: false, message: 'Please enter banner URL' }]}>
                                    <Input placeholder="Enter Banner URL" />
                                </Form.Item>

                                <Form.Item>
                                    <Button htmlType="submit" type="primary" style={{ width: '100%' }} size="large">
                                        Add product
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>



                </Content>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    closeOnClick
                    pauseOnHover
                    draggable
                    theme="dark"
                    style={{ zIndex: 9999, position: 'fixed' }}
                />
            </Layout>
        </Layout >
    )
}
