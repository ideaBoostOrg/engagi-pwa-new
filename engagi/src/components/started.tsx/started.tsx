import { Button, Col, Image, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Started = () => {
    const navigate = useNavigate();
    const handleNaxt = () => {
        navigate('/start');
        window.location.reload();
    };
    return (
        <div className="eng-startdiv">
            <Row>
                <Col span={24} className="eng-logodiv">
                    <Image src={logo} preview={false} />
                </Col>
            </Row>
            <Row>
                <Col span={24} className="eng-buttoncontainer">
                    <Button className="eng-button eng-button_start" onClick={handleNaxt}>
                        Get started
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col span={24} className="eng-authorization">
                    2023 © Powered by ideaBoost
                </Col>
            </Row>
        </div>
    );
};

export default Started;
