import { Button, Col, Form, Image, Modal, Row, Select } from 'antd';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signup from '../../assets/images/signup.jpg';
import Footer from '../footer/footer';

const Signup = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [role, setRole] = useState('');
    const handleForm = useCallback((formValues: { role: string }) => {
        const role = formValues.role;
        setRole(role);
        handleSignup(role);
    }, []);
    const handleSubmit = useCallback(async () => {
        try {
            await form.validateFields();
            form.submit();
        } catch (error) {
            console.log('Validation error:', error);
        }
    }, [form]);
    console.log(handleForm, handleSubmit);
    const handleSignup = useCallback((role: string) => {
        if (role === 'attendee') {
            navigate('/home');
            Modal.success({ content: 'You have successfully logged in as attendee' });
        } else if (role === 'organizer') {
            navigate('/attendehome');
            Modal.success({ content: 'You have successfully logged in as organizer' });
        } else if (role === 'admin') {
            navigate('/adminhome');
            Modal.success({ content: 'You have successfully logged in as admin' });
        } else {
            Modal.warning({ content: 'Please select a role to continue' });
        }
    }, [navigate, role]);
    return (
        <div className="eng-splashscreencontainer">
            <Row>
                <Col span={24} className="eng-splashimagecontainer">
                    <Image src={signup} className="eng-splashimage" preview={false} />
                </Col>
            </Row>
            <Row className="eng-splashgrid eng-splashgrid-signup">
                <p className="eng-title">Sign up</p>
            </Row>
            <Row>
                <Col span={24} className="eng-signupcol">
                    <Form
                        layout="vertical"
                        form={form}
                        onFinish={handleForm}
                    >
                        <Form.Item
                            name='role'
                            label="Select role"
                            style={{ backgroundColor: '$background-color' }}
                            rules={[{ type: 'string', message: 'Please select your reason here!' }]}
                            className="eng-form-input"
                        >
                            <Select
                                defaultValue="Role"
                                className="eng-select"
                                options={[
                                    { value: 'attendee', label: 'Attendee' },
                                    { value: 'organizer', label: 'Organizer' },
                                    { value: 'admin', label: 'Admin' },
                                ]}
                            />
                        </Form.Item>
                        <Row className="eng-buttoncol">
                            <Button className="eng-button" onClick={handleSubmit}>
                                Sign up
                            </Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </div>
    );
};

export default Signup;