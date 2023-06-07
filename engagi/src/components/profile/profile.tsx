import { Button, Col, Form, Image, Input, Row } from 'antd';
import React, { useCallback } from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import user from '../../assets/images/profile.svg';

const Profile = () => {
    const [form] = Form.useForm();
    const handleForm = useCallback(() => {
        const formValues = form.getFieldsValue();
        console.log(formValues);
    }, [form]);
    return (
        <div className="eng-maindiv">
            <Row>
                <Header />
            </Row>
            <Row className="eng-detailsdiv">
                <Col span={24}>
                    <Row className="eng-staffmain">
                        <Col span={24}>
                            <Row className="eng-titlecontainer">
                                <span className="eng-profilename">Profile</span>
                            </Row>
                            <Row className="eng-profilecontainer">
                                <div
                                    className="eng-profile-image-container eng-profile-image-container-profile"
                                >
                                    <div style={{ position: 'relative' }}>
                                        <Image src={user} style={{ objectFit: 'cover' }} />
                                    </div>
                                </div>
                            </Row>
                            <Row style={{ paddingLeft: '20px' }}>
                                <Col span={24}>
                                    <Form
                                        layout="vertical"
                                        form={form}
                                        onFinish={handleForm}
                                    >
                                        <Row>
                                            <Form.Item
                                                className="eng-form-input"
                                                name='fname'
                                                label="First Name"
                                                rules={[{ type: 'string', required: true, message: 'Please input your first name here!' }]}
                                            >
                                                <Input placeholder="Enter First Name" readOnly />
                                            </Form.Item>
                                        </Row>
                                        <Row>
                                            <Form.Item
                                                className="eng-form-input"
                                                name='lname'
                                                label="Last Name"
                                                rules={[{ type: 'string', required: true, message: 'Please input your last name here!' }]}
                                            >
                                                <Input placeholder="Enter last name" readOnly />
                                            </Form.Item>
                                        </Row>
                                        <Row>
                                            <Form.Item
                                                className="eng-form-input"
                                                name='contact'
                                                label="Contact number"
                                                rules={[{ type: 'string', required: true, message: 'Please input contact number here!' }]}
                                            >
                                                <Input placeholder="Enter contact number" readOnly />
                                            </Form.Item>
                                        </Row>
                                        <Row>
                                            <Form.Item
                                                className="eng-form-input"
                                                name='email'
                                                label="Email"
                                                rules={[{ type: 'email', required: true, message: 'Please input your email here!' }]}
                                            >
                                                <Input placeholder="Enter email" className="eng-input" readOnly />
                                            </Form.Item>
                                        </Row>
                                        <Row className="eng-editbutton-container">
                                            <Button
                                                className="eng-button eng-button-profile"
                                            >
                                                Edit profile
                                            </Button>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Navbar />
            </Row>
        </div>
    );
};

export default Profile;