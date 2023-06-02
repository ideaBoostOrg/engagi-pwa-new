import { Button, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Header from '../../header/header';
import { useNavigate } from 'react-router-dom';
import { EventDataType } from '../../../types/commonTypes';
import eventData from '../../../data/eventData.json';
import Navbar from '../../navbar/navbar';
import CardContainer from './components/cardContainer';

const Home = () => {
    const navigate = useNavigate();
    const [eventDataset, setEventDataset] = useState<EventDataType[]>([]);
    console.log(eventDataset);
    useEffect(() => {
        setEventDataset(eventData.eventData);
    }, []);
    const handleView = () => {
        navigate('/events');
    };
    return (
        <div className="eng-maindiv">
            <Row>
                <Header />
            </Row>
            <Row>
                <Col span={24} className="eng-detailsdiv">
                    <Row className="eng-staffmain">
                        <Col className="eng-titlecontainer" span={24}>
                            <Row>
                                <Col span={22}>
                                    <span className="eng-profilename">Agenda</span>
                                </Col>
                                <Col span={2} className="eng-viewmoreButton">
                                    <Button className="eng-button_view" onClick={handleView}>
                                        View More
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <CardContainer eventDataArray={eventDataset} />
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

export default Home;