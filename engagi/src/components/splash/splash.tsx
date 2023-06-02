import React from 'react';
import { useNavigate } from 'react-router-dom';
import splash from '../../assets/images/home_two.jpg';
import Footer from '../footer/footer';
import { Button, Col, Image, Row } from 'antd';

const Splash = () => {
    const navigate = useNavigate();
    const signUpTrigger = () => {
        navigate('/signup');
    };
    const loginTrigger = () => {
        navigate('/home');
    };
    return (
        <div className="eng-splashscreencontainer">
            <Row className="eng-splashimagecontainer">
                <Col span={24}>
                    <Image src={splash} className="eng-splashimage" />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <p className="eng-title">Empowering events, engaging experiences</p>
                </Col>
            </Row>
            <Row>
                <Col span={24} className="eng-buttoncol">
                    <Button className="eng-button eng-button_splash" onClick={signUpTrigger}>
                        Signup here
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col span={24} className="eng-loginbuttoncontainer">
                    <Row className="eng-loginbuttoncontainer">
                        <Col span={18}>
                            <p className="eng-linktext">Already have an account?&nbsp;&nbsp;</p>
                        </Col>
                        <Col span={6}>
                            <Button
                                className="eng-button-link eng-button-link-login"
                                onClick={loginTrigger}
                            >
                                Login
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Footer />
        </div>
    );
};

export default Splash;
