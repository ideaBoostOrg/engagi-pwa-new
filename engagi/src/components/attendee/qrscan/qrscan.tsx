import { Button, Col, Form, Image, Input, Modal, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import Header from '../../header/header';
import Navbar from '../../navbar/navbar';
import allData from '../../../data/allData.json';
import { AllDataType } from '../../../types/commonTypes';
import qrcode from '../../../assets/images/qrcode.svg';

const Qrscan = () => {
    const [eventData, setEventdata] = useState<AllDataType[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eventImage, setEventImage] = useState<string>('qrcode');

    useEffect(() => {
        setEventdata(allData.allevents);
    }, []);

    const handleEventChange = (value: string) => {
        setSelectedEvent(value);
    };

    const handleUnable = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const loadEventImage = async () => {
        console.log('called');
        const selectedEventData = eventData.find((event) => { event.name === selectedEvent; });
        console.log('selected event', selectedEventData);
        if (selectedEventData) {
            console.log('called2');
            try {
                const image = await import(`../../../assets/images/${selectedEventData.image}`);
                console.log('image', image);
                setEventImage(image.default);
            } catch (error) {
                console.error('Error loading event image:', error);
                setEventImage('qrcode');
            }
        } else {
            setEventImage('qrcode');
        }
    };

    useEffect(() => {
        loadEventImage();
    }, [selectedEvent]);

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
                            {eventImage !== undefined && <Image src={qrcode} preview={false} />}
                        </Row>
                    </Col>
                    <Col span={24} className="eng-viewmoreButton eng-viewmoreButton-unable">
                        <Button onClick={handleUnable}>Unable to scan</Button>
                    </Col>
                    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText={'Submit'}>
                        <span className="eng-subtitle eng-subtitle-popup">Unable to scan QR</span>
                        <Row style={{ paddingTop: '20px' }}>
                            <Col span={24}>
                                <Form
                                    layout="vertical"
                                >
                                    <Row>
                                        <Form.Item
                                            className="eng-form-input"
                                            name='email'
                                            label="Enter email"
                                            rules={[{ type: 'email', message: 'Please input your email here!' }]}
                                        >
                                            <Input placeholder="Enter Email" />
                                        </Form.Item>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Modal>
                </Row>
            </div>
            <Row>
                <Navbar />
            </Row>
        </div>
    );
};

export default Qrscan;