import { Col, Image, Row } from 'antd';
import React from 'react';
import Header from '../../header/header';
import Navbar from '../../navbar/navbar';
import qrCode from '../../../assets/images/qrcode.svg';
import profile from '../../../assets/images/profile.svg';

const Qrscan = () => {
    return (
        <div className="eng-maindiv">
            <Row>
                <Header />
            </Row>
            <div className="eng-detailsdiv">
                <Row className="eng-staffmain">
                    <Col span={24} className="eng-titlecontainer">
                        <span className="eng-profilename">QR</span>
                    </Col>
                    <Col span={24} className="eng-imagecontainer">
                        <Row className="eng-profileImeage">
                            <Image src={profile} preview={false} />
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row className="eng-middetailcontainer">
                            Maneth Wijethunga
                        </Row>
                        <Row className="eng-middetailcontainer">
                            234gbhhh
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row className="eng-qrcodecontainer">
                            <Image src={qrCode} preview={false} />
                        </Row>
                    </Col>
                </Row>
            </div>
            <Row>
                <Navbar />
            </Row>
        </div>
    );
};

export default Qrscan;