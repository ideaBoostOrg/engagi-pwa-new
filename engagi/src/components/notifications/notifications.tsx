import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import { useNavigate } from 'react-router-dom';
import { NotificationType } from '../../types/commonTypes';
import notificationData from '../../../src/data/notifications.json';
import { Col } from 'antd';

const Notifications = () => {

    const navigate = useNavigate();
    const [notifyData, setNotifyData] = useState<NotificationType[]>([]);

    useEffect(() => {
        setNotifyData(notificationData.notification);
    }, []);

    const handleView = (clickedItem: NotificationType) => {
        const updatedNotifyData = notifyData.map((item) => {
            if (item === clickedItem) {
                return { ...item, read: true };
            }
            return item;
        });
        setNotifyData(updatedNotifyData);
        console.log('notify data', updatedNotifyData);
        navigate('/notifications/view', { state: { notifyData: clickedItem } });
    };

    useEffect(() => {
        console.log('notify', notifyData);
    }, [notifyData]);

    return (
        <div className="eng-maindiv">
            <div>
                <Header />
            </div>
            <div className="eng-detailsdiv">
                <div className="eng-staffmain">
                    <div className="eng-titlecontainer">
                        <span className="eng-profilename">Notifications</span>
                    </div>
                    <div className="eng-notificationcontainer">
                        <Col span={24}>
                            <div className="eng-collapsecontainer">
                                {notifyData
                                    .map((item, index) => {
                                        return (
                                            <div key={index} className="eng-notificationcards">
                                                <div className="eng-mainnotifycontainer" onClick={() => { handleView(item); }}>
                                                    <div className="eng-mainnotifycontainerleft">
                                                        <div>
                                                            <span className="eng-notificationtitle">
                                                                {item.notification_title}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="eng-notificationdesc">
                                                                {item.notification_description}
                                                            </span>
                                                        </div>
                                                        <div className="eng-notificationtimecorner">
                                                            <span className="eng-notificationtime">
                                                                {item.notification_time}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </Col>
                    </div>
                </div>
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    );
};

export default Notifications;