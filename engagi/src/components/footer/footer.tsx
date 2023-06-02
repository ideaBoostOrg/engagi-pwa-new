import { Col, Row } from 'antd';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <Row>
                <Col className="eng-footerdiv">
                    <p>2023 © Powered by <span className="eng-footerspan">ideaBoost</span></p>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;