import { Card, Image } from 'antd';
import React from 'react';
import EventState from './eventState';
import event1 from '../../../../assets/images/event_images/image1.jpg';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { EventDataType } from '../../../../types/commonTypes';

interface cardContainerProps {
    eventDataArray: EventDataType[];
};

const CardContainer = ({ eventDataArray }: cardContainerProps) => {
    const navigate = useNavigate();
    const handleView = () => {
        navigate('/home/view');
    };
    return (
        <Row>
            {eventDataArray.map((eventData) => {
                return (
                    <Row key={eventData.id}>
                        <Col>
                            <Row>
                                <EventState eventStatus={eventData.state} />
                            </Row>
                        </Col>
                        <Card className="eng-eventcard" onClick={handleView}>
                            <Row className="eng-detailscard">
                                <Col className="eng-eventimage" xs={7}>
                                    <div className="eng-imag">
                                        <Image src={event1}  style={{ objectFit: 'cover', borderRadius: '10px' }} />
                                    </div>
                                </Col>
                                <Col className="eng-eventdescription" xs={16}>
                                    <Row><span className="eng-detailtitle">{eventData.event_name}</span></Row>
                                    <Row><span>{eventData.host_name}</span></Row>
                                    <Row><span>{eventData.venue}</span></Row>
                                    <Row className="eng-carddiv">
                                        <Row className="eng-cardleft"><span>{eventData.date}</span></Row>
                                        <Row className="eng-cardleft"><span>{eventData.time}</span></Row>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Row>
                );
            })}
        </Row>
    );
};

export default CardContainer;
