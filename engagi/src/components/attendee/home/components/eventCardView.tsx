import { Card, Col, Row } from 'antd';
import React from 'react';
import Header from '../../../header/header';
import Navbar from '../../../navbar/navbar';
import { useLocation } from 'react-router-dom';
import GoBack from '../../../common/goBack';

const EventCardView = () => {
    const location = useLocation();
    const dataArray = location.state.eventData;
    return (
        <div className="eng-maindiv">
            <Row>
                <Header />
            </Row>
            <div className="eng-detailsdiv">
                <Row className="eng-staffmain">
                    <GoBack />
                    <Col className="eng-titlecontainer eng-titlecontainer-view" span={24}>
                        <Row>
                            <Card>
                                <Col span={24}>
                                    <span className="eng-viewtitle eng-viewtitle-topic">{dataArray.event_name}</span>
                                </Col>
                                <Row className="eng-detailscard">
                                    <Col className="eng-eventdescription" xs={24}>
                                        <Row>
                                            <Col span={12}>
                                                <Row className="eng-viewtitle"><span>Host Name</span></Row>
                                                <Row className="eng-viewtitle"><span>Venue</span></Row>
                                                <Row className="eng-viewtitle"><span>Date</span></Row>
                                                <Row className="eng-viewtitle"><span>Time</span></Row>
                                            </Col>
                                            <Col span={12}>
                                                <Row><span className="eng-viewspan">{dataArray.host_name}</span></Row>
                                                <Row><span className="eng-viewspan">{dataArray.venue}</span></Row>
                                                <Row><span className="eng-viewspan">{dataArray.date}</span></Row>
                                                <Row><span className="eng-viewspan">{dataArray.time}</span></Row>
                                            </Col>
                                        </Row>
                                        <Row className="eng-viewtitle">Description</Row>
                                        <Row><span className="eng-viewspan">{dataArray.description}</span></Row>
                                    </Col>
                                </Row>
                            </Card>
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

export default EventCardView;