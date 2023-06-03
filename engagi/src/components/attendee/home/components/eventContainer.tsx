import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Image, Input, Popover, Row } from 'antd';
import Header from '../../../header/header';
import Navbar from '../../../navbar/navbar';
import { FilterOutlined } from '@ant-design/icons';
import { AllDataType } from '../../../../types/commonTypes';
import allEvents from '../../../../data/allData.json';
import image1 from '../../../../assets/images/event_images/image4.jpg';

const { Search } = Input;

const EventContainer = () => {
    const navigate = useNavigate();
    const [allDataset, setAllDataset] = useState<AllDataType[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    useEffect(() => {
        setAllDataset(allEvents.allevents);
    }, []);
    const actions = (
        <Row>
            <Col span={24}>
                <p>yesterday</p>
            </Col>
            <Col span={24}>
                <p>today</p>
            </Col>
            <Col span={24}>
                <p>nextday</p>
            </Col>
        </Row>
    );
    const onSearch = (value: string) => {
        console.log(value);
        const filteredDataset = allEvents.allevents.filter((eventData) => {
            return (
                eventData.event_name.toLowerCase().includes(value.toLowerCase()) ||
                eventData.name.toLowerCase().includes(value.toLowerCase()) ||
                eventData.host_name.toLowerCase().includes(value.toLowerCase())
            );
        });
        setAllDataset(filteredDataset);
    };
    const handleSearch = (value: string) => {
        const filteredDataset = allEvents.allevents.filter((eventData) => {
            return (
                eventData.event_name.toLowerCase().includes(value.toLowerCase()) ||
                eventData.name.toLowerCase().includes(value.toLowerCase()) ||
                eventData.host_name.toLowerCase().includes(value.toLowerCase())
            );
        });
        setAllDataset(filteredDataset);
    };
    // const handleAction = (node: Action) => {
    //     if (node.text) {
    //         const selectedOptionValue = String(node.text);
    //         setSelectedOption(selectedOptionValue);
    //         handleSearchDate(selectedOption || '');
    //         handleNextpage(selectedOptionValue);
    //     }
    // };
    const handleView = (eventData: AllDataType) => {
        navigate('/home/view', { state: { eventData } });
    };
    const handleNextpage = (selectedOptionValue: string) => {
        console.log(selectedOptionValue);
        if (selectedOptionValue == '5/23/2023') {
            navigate('/yesterday');
        } else if (selectedOptionValue == '5/24/2023') {
            navigate('/events');
        } else {
            navigate('/nextday');
        }
        console.log('option', selectedOptionValue);
    };
    const handleSearchDate = (value: string) => {
        const filteredDataset = allEvents.allevents.filter((eventData) => {
            return (
                eventData.date.toLowerCase().includes(value.toLowerCase())
            );
        });
        setAllDataset(filteredDataset);
    };
    console.log(selectedOption, handleNextpage, handleSearch, handleSearchDate, setSelectedOption);
    return (
        <div className="eng-maindiv">
            <Row>
                <Header />
            </Row>
            <div className="eng-detailsdiv">
                <Row className="eng-staffmain">
                    <Col span={24}>
                        <Row>
                            <span className="eng-profilename">All events</span>
                        </Row>
                        <Row className="eng-searchbarcontainer">
                            <Col span={22}>
                                <Search placeholder="input search text"
                                    onChange={(e) => {onSearch(e.target.value);}} style={{ width: 200 }} />
                            </Col>
                            <Col span={2} className="eng-searchbarRight">
                                <Popover
                                    placement='bottomRight'
                                    content={actions}
                                    trigger='click'
                                    className='eng-headerpopover'
                                >
                                    <FilterOutlined />
                                </Popover>
                            </Col>
                        </Row>
                    </Col>
                    <div>
                        {allDataset.map((eventData) => {
                            return <Card className="eng-eventcard" key={eventData.id} onClick={() => {handleView(eventData);}}>
                                <Row className="eng-detailscard">
                                    <Col className="eng-eventimage" xs={7}>
                                        <div className="eng-image">
                                            <Image src={image1} style={{ objectFit: 'cover', borderRadius: '10px' }} />
                                        </div>
                                    </Col>
                                    <Col className="eng-eventdescription" xs={16}>
                                        <Row><span className="eng-detailtitle">{eventData.name}</span></Row>
                                        <Row><span className="eng-detailtitle">{eventData.event_name}</span></Row>
                                        <Row><span>{eventData.host_name}</span></Row>
                                        <Row><span>{eventData.venue}</span></Row>
                                        <Row className="eng-carddiv">
                                            <Row className="eng-cardleft"><span>{eventData.date}</span></Row>
                                            <Row className="eng-cardleft"><span>{eventData.time}</span></Row>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>;
                        })}
                    </div>
                </Row>
            </div>
            <Row>
                <Navbar />
            </Row>
        </div>
    );
};

export default EventContainer;
