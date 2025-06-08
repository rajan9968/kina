import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import Container from 'react-bootstrap/Container';
import { login } from './Api/AuthService';

export default function Login() {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        if (!values.email || !values.password) {
            toast.error("Please fill all fields");
            return;
        }

        try {
            const response = await login(values);
            if (response.success === true) {
                toast.success("Login successful");
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                localStorage.setItem("isLoggedIn", true);
                navigate("/admin/dashboard");
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Login failed";
            toast.error(errorMessage);
        }
    };

    return (
        <Container
            fluid
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#0f111a',
                color: '#fff',
                padding: 0,
            }}
        >
            <Form
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                style={{ width: '30%', padding: '3%', borderRadius: '5px', border: '1px solid #31374a' }}
                className='ecom-login'
            >
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h1 className="text-white text-uppercase">Kina</h1>
                </div>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Row justify="space-between" align="middle">
                        <Col>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox className='text-white'>Remember me</Checkbox>
                            </Form.Item>
                        </Col>
                        <Col>
                            <a href="">Forgot password</a>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>
                <ToastContainer />
            </Form>
        </Container>
    );
}
