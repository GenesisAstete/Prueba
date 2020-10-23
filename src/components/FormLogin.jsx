import React from 'react'
import { Form, Input, Button, Checkbox, Col, Row, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import ButtonGF from './ButtonGF';
import '../style/style.css'

const FormLogin = () => {

    return (
        <>
        <div>
        <Divider orientation="center"></Divider>
            <Row justify="center" align="center" style={{padding:'10px'}}>
                <Col xs={22} sm={20} md={12} lg={10} style={{backgroundColor:'white', padding:'10px'}}>
                <Form
                name="normal_login"
                >
                <Form.Item
                name="username"
                rules={[{ 
                    required: true, 
                    message: 'Please input your Username!' 
                }]}
                 >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
                
                </Form.Item>
                <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="/"> 
                Forgot password
                </a> 
                </Form.Item>

                <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
                </Button>
                Or <a href="/">register now!</a>
                <ButtonGF/>
                </Form.Item>
                </Form>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default FormLogin
