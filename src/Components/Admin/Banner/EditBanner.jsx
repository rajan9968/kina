import React, { useState, useEffect } from 'react';
import { Layout, theme, Avatar, Button, Dropdown, message, Breadcrumb, Input, Upload, Row, Col, Tabs, Select, Space, Form } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, UploadOutlined } from '@ant-design/icons';
import CustomHeader from '../Common/Header';
import { getUser } from '../middleware/Authutils';
import { getBannerbyId, updateBanner } from '../Api/BannerService';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const { TextArea } = Input;
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

export default function EditBanner() {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);
    const [originalProductData, setOriginalProductData] = React.useState(null);
    const { bannerId } = useParams();
    const user = getUser()
    const userName = user ? user.name : "Sign In";
    const [tabPosition, setTabPosition] = useState('left');
    const changeTabPosition = e => {
        setTabPosition(e.target.value);
    };
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
    // getting Data by id
    const getProductById = async () => {
        try {
            const response = await getBannerbyId(bannerId);
            console.log("Response from getBannerbyId:", response);
            if (response.banner) {
                const productData = response.banner;
                setOriginalProductData(productData);
                form.setFieldsValue({
                    tags: productData.tags,
                    status: productData.status == 1 ? "Active" : "Inactive",

                    banner_url: productData.banner_url, image: productData.image ? [
                        {
                            uid: '-1',
                            name: 'image.jpg', // or use actual filename if you have it
                            status: 'done',
                            url: `${process.env.REACT_APP_API_URL}${productData.image.replace(/\\/g, '/')}`,
                        }
                    ] : [],

                });

            } else {
                toast.error("Failed to fetch product data");
            }
        } catch (error) {
            console.error("Error fetching product data:", error);
            toast.error("Error fetching product data");
        }
    };
    useEffect(() => {
        if (bannerId) getProductById();
    }, [bannerId]);

    const onFinish = async (values) => {
        const formData = new FormData();
        formData.append('id', bannerId);

        // Check if a new image is uploaded
        const uploadedFile = values.image?.[0]?.originFileObj;

        if (uploadedFile) {
            formData.append('image', uploadedFile); // real file
        } else if (originalProductData?.image) {
            formData.append('existingImage', originalProductData.image); // just image path
        }

        formData.append('tags', values.tags);
        formData.append('banner_url', values.banner_url);
        formData.append('status', values.status);

        console.log('Sending FormData:', [...formData.entries()]);

        try {
            const response = await updateBanner(formData);

            if (response.banner) {
                toast.success("Product updated successfully");
                navigate('/admin/banner');
                // Optionally reset the form: form.resetFields();
            } else {
                toast.error("Please fill all required fields or try again");
            }
        } catch (error) {
            console.error("Error updating banner:", error);
            toast.error("Something went wrong while updating the banner");
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
                                title: 'Edit Banner',
                                href: '',
                            },

                        ]}
                    />
                    <h1 className='heading mb-0'>Edit Banner</h1>
                    <h4 className='sub-heading mb-0 pb-2'>Highlight Product in top</h4>

                    <Form layout="vertical" onFinish={onFinish} encType="multipart/form-data" form={form}>
                        <Row className="product-form" gutter={[16, 16]}>
                            <Col span={24}>
                                <Form.Item
                                    label="Image"
                                    name="image"
                                    valuePropName="fileList"
                                    getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                                >
                                    <Upload
                                        accept="image/*"
                                        listType="picture"
                                        beforeUpload={() => false} // Prevent auto upload
                                        maxCount={1}
                                    >
                                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                    </Upload>
                                </Form.Item>
                                <Form.Item label="Alt Tag" name="tags" rules={[{ required: false, message: 'Please enter product name' }]}>
                                    <Input placeholder="Enter Book Name" />
                                </Form.Item>
                                <Form.Item label="Banner URL" name="banner_url" rules={[{ required: false, message: 'Please enter banner URL' }]}>
                                    <Input placeholder="Enter Banner URL" />
                                </Form.Item>

                                <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Please select status' }]}>
                                    <Select placeholder="Select Status" style={{ width: '100%' }}>
                                        <Select.Option value="1">Active</Select.Option>
                                        <Select.Option value="0">Inactive</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item>
                                    <Button htmlType="submit" type="primary" style={{ width: '100%' }} size="large">
                                        Update Banner
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

