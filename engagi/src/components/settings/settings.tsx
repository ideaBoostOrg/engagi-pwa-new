import { Col, Row } from 'antd';
import React from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';

const Settings = () => {
    return (
        <div className="eng-maindiv">
            <Row>
                <Header />
            </Row>
            <div className="eng-detailsdiv">
                <Row className="eng-staffmain">
                    <Col span={24} className="eng-titlecontainer">
                        <span className="eng-profilename">Settings</span>
                    </Col>
                </Row>
            </div>
            <Row>
                <Navbar />
            </Row>
        </div>
    );
};

export default Settings;