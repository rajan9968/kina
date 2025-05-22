import React, { useState, useEffect } from 'react';
import { Layout, theme, Avatar, Button, Dropdown, message, Breadcrumb, Input, Upload, Row, Col, Tabs, Select, Space, Form } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, UploadOutlined } from '@ant-design/icons';
import CustomHeader from '../Common/Header';
import { getUser } from '../middleware/Authutils';
import { product, fetchProductById } from '../Api/ProductService';
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

export default function EditProduct() {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);
    const { productIds } = useParams();
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
            const response = await fetchProductById(productIds);
            if (response.success === true) {
                const productData = response.product;
                form.setFieldsValue({
                    name: productData.name,
                    description: productData.description,
                    mrp_price: productData.mrp_price,
                    sale_price: productData.sale_price,
                    quantity: productData.quantity,
                    no_of_page: productData.no_of_page,
                    no_of_lesson: productData.no_of_lesson,
                    no_of_topic: productData.no_of_topic,
                    publisher: productData.publisher,
                    product_type: productData.product_type,
                    category: productData.category,
                    tags: productData.tags,
                    image: productData.image,
                });
                setFileList([
                    {
                        uid: '-1',
                        name: 'image.jpg',
                        status: 'done',
                        url: `${process.env.REACT_APP_API_URL}${productData.image.replace(/\\/g, '/')}`,

                    }
                ]);

            } else {
                toast.error("Failed to fetch product data");
            }
        } catch (error) {
            console.error("Error fetching product data:", error);
            toast.error("Error fetching product data");
        }
    };
    useEffect(() => {
        if (productIds) getProductById();
    }, [productIds]);

    const onFinish = async (values) => {
        const formData = new FormData();

        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('mrp_price', values.mrp_price);
        formData.append('sale_price', values.sale_price);
        formData.append('quantity', values.quantity);
        formData.append('no_of_page', values.no_of_page);
        formData.append('no_of_lesson', values.no_of_lesson);
        formData.append('no_of_topic', values.no_of_topic);
        formData.append('publisher', values.publisher);
        formData.append('product_type', values.product_type);
        formData.append('category', values.category);
        formData.append('tags', values.tags);

        const file = values.image && values.image.fileList[0]; // Assuming a single file upload
        if (file) {
            formData.append('image', file.originFileObj); // Append the file itself
        }
        console.log('Sending FormData:', [...formData.entries()]);
        try {
            const response = await product(formData);

            if (response.success === true) {
                toast.success("Product added successfully");

                // localStorage.setItem("token", response.data.token);
                // localStorage.setItem("user", JSON.stringify(response.data.user));
                // localStorage.setItem("isLoggedIn", "true");

                // Optional: Redirect or reset form
                navigate('/admin/products');
                // form.resetFields();

            } else {
                toast.error("Please fill all required fields");
            }
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    const options = [
        {
            label: 'China',
            value: 'china',
            emoji: '🇨🇳',
            desc: 'China (中国)',
        },
        {
            label: 'USA',
            value: 'usa',
            emoji: '🇺🇸',
            desc: 'USA (美国)',
        },
        {
            label: 'Japan',
            value: 'japan',
            emoji: '🇯🇵',
            desc: 'Japan (日本)',
        },
        {
            label: 'Korea',
            value: 'korea',
            emoji: '🇰🇷',
            desc: 'Korea (韩国)',
        },
    ];
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
                                title: 'Edit Product',
                                href: '',
                            },

                        ]}
                    />
                    <h1 className='heading mb-0'>Edit Product</h1>
                    <h4 className='sub-heading mb-0 pb-2'>Orders placed across your store</h4>

                    <Form layout="vertical" onFinish={onFinish} encType="multipart/form-data" form={form}>
                        <Row className="product-form" gutter={[16, 16]}>
                            <Col span={16}>
                                <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter product name' }]}>
                                    <Input placeholder="Enter Book Name" />
                                </Form.Item>

                                <Form.Item label="Description" name="description">
                                    <TextArea rows={4} placeholder='Enter Description' />
                                </Form.Item>

                                {/* <Form.Item label="Images" name="image">
                                    <Dragger {...props} style={{ marginBottom: 24, height: 100, display: 'block' }}>
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                        </p>
                                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                        <p className="ant-upload-hint">
                                            Support for single or bulk upload. Do not upload confidential or banned files.
                                        </p>
                                    </Dragger>
                                </Form.Item> */}
                                <Form.Item label="Image" name="image">
                                    <Upload
                                        accept="image/*"
                                        fileList={fileList}
                                        listType="picture"
                                        showUploadList={{ showRemoveIcon: false }}
                                        beforeUpload={() => false} // prevent auto upload
                                    >
                                        <UploadOutlined /> Click to Upload
                                    </Upload>
                                </Form.Item>

                                <Tabs className="tabs" tabPosition={tabPosition} items={[
                                    {
                                        label: 'Pricing',
                                        key: '1',
                                        children: (
                                            <Row gutter={[16, 16]}>
                                                <Col xs={24} sm={12}>
                                                    <Form.Item label="MRP Price" name="mrp_price">
                                                        <Input placeholder='Enter MRP Price' />
                                                    </Form.Item>
                                                </Col>
                                                <Col xs={24} sm={12}>
                                                    <Form.Item label="Sale Price" name="sale_price">
                                                        <Input placeholder='Enter Sale Price' />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        ),
                                    },
                                    {
                                        label: 'Restock',
                                        key: '2',
                                        children: (
                                            <>
                                                <Row gutter={[16, 16]}>
                                                    <Col xs={24} sm={12}>
                                                        <Form.Item label="Quantity" name="quantity">
                                                            <Input placeholder='Enter Quantity' />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col xs={24} sm={12}>
                                                        <Form.Item label="No Of Pages" name="no_of_page">
                                                            <Input placeholder='Enter No Of Pages' />
                                                        </Form.Item>
                                                    </Col>
                                                </Row>
                                                <Row gutter={[16, 16]}>
                                                    <Col xs={24} sm={12}>
                                                        <Form.Item label="No Of Lesson" name="no_of_lesson">
                                                            <Input placeholder='Enter No Of Lesson' />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col xs={24} sm={12}>
                                                        <Form.Item label="No Of Topic" name="no_of_topic">
                                                            <Input placeholder='Enter No Of Topic' />
                                                        </Form.Item>
                                                    </Col>
                                                </Row>
                                            </>
                                        ),
                                    },
                                    {
                                        label: 'Publisher',
                                        key: '3',
                                        children: (
                                            <Row gutter={[16, 16]}>
                                                <Col span={24}>
                                                    <Form.Item label="Publisher" name="publisher">
                                                        <Input placeholder="Publisher Name" />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        ),
                                    },
                                    {
                                        label: 'Product Type',
                                        key: '4',
                                        children: (
                                            <Row gutter={[16, 16]}>
                                                <Col span={24}>
                                                    <Form.Item label="Type" name="product_type">
                                                        <Select
                                                            showSearch
                                                            placeholder="Select a type"
                                                            filterOption={(input, option) =>
                                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                            }
                                                            options={[
                                                                { value: '1', label: 'Jack' },
                                                                { value: '2', label: 'Lucy' },
                                                                { value: '3', label: 'Tom' },
                                                            ]}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        ),
                                    },
                                ]} />
                            </Col>

                            <Col span={8}>
                                <Form.Item label="Category" name="category">
                                    <Select
                                        showSearch
                                        placeholder="Select a category"
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={[
                                            { value: '1', label: 'Jack' },
                                            { value: '2', label: 'Lucy' },
                                            { value: '3', label: 'Tom' },
                                        ]}
                                    />
                                </Form.Item>

                                <Form.Item label="Tags" name="tags">
                                    <Select
                                        mode="multiple"
                                        style={{ width: '100%' }}
                                        placeholder="Select tags"
                                        // onChange={handleChange}
                                        options={options}
                                        optionRender={(option) => (
                                            <Space>
                                                <span role="img" aria-label={option.data.label}>
                                                    {option.data.emoji}
                                                </span>
                                                {option.data.desc}
                                            </Space>
                                        )}
                                    />
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
