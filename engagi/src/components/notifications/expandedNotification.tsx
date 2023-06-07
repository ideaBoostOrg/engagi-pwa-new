import React from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import GoBack from '../common/goBack';
import { useLocation } from 'react-router';
import { Col, Row } from 'antd';

const expandedNotification = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const notificationData = useLocation();
    console.log(notificationData.state.notifyData);
    const dataSet = notificationData.state.notifyData;

    return (
        <div className="eng-maindiv">
            <div>
                <Header />
            </div>
            <div className="eng-detailsdiv">
                <Row className="eng-staffmain">
                    <GoBack />
                    <Col className="eng-notificationdetailscontainer" span={24}>
                        <Row>
                            <Col>
                                <div className="eng-titlecontainer">
                                    <span className="eng-subtitle">{dataSet.notification_title}</span>
                                </div>
                                <div>
                                    <div className="eng-notificationsdetails">
                                        <div className="eng-notificationdetailsright">
                                            <p className="eng-detailstag">{dataSet.notification_description}</p>
                                        </div>
                                        <div className="eng-notificationdate">
                                            <p className="eng-detailstag">
                                                {dataSet.notification_date} </p>
                                            <p className="eng-detailstag">{'\u00A0'}at{'\u00A0'}{dataSet.notification_time}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    );
};

export default expandedNotification;