import { Col, Image, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import Header from '../../header/header';
import Navbar from '../../navbar/navbar';
import allData from '../../../data/allData.json';
import { AllDataType } from '../../../types/commonTypes';

const Qrscan = () => {
    const [eventData, setEventdata] = useState<AllDataType[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<string>('');
    const [eventImage, setEventImage] = useState<string | undefined>('qrcode');

    useEffect(() => {
        setEventdata(allData.allevents);
    }, []);

    const handleEventChange = (value: string) => {
        setSelectedEvent(value);
    };

    const loadEventImage = async () => {
        const selectedEventData = eventData.find((event) => {event.name === selectedEvent;});
        if (selectedEventData) {
            try {
                const image = await import(`../../../assets/images/${selectedEventData.image}`);
                setEventImage(image.default);
            } catch (error) {
                console.error('Error loading event image:', error);
                setEventImage(undefined);
            }
        } else {
            setEventImage(undefined);
        }
    };

    useEffect(() => {
        loadEventImage();
    }, [selectedEvent]);

    console.log(eventData);

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
                    <Col span={24}>
                        <Row>
                            <Col span={24} className="eng-middetailcontainer">
                                Maneth Wijethunga
                            </Col>
                            <Col span={24} className="eng-middetailcontainer">
                                234gbhhh
                            </Col>
                        </Row>
                    </Col>
                    <Col span={20} className="eng-middetailcontainer">
                        <Select
                            defaultValue="Select an event"
                            className="eng-select eng-select-event"
                            options={eventData.map((event) => {
                                return {
                                    value: event.name,
                                    label: event.event_name,
                                };
                            })}
                            onChange={handleEventChange}
                        />
                    </Col>
                    <Col span={24}>
                        <Row className="eng-qrcodecontainer">
                            {eventImage && <Image src={eventImage} preview={false} />}
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