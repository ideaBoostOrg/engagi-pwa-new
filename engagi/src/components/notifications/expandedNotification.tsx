import React from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import GoBack from '../common/goBack';
import { useLocation } from 'react-router';

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
            <div className="eng-detailsdiv" style={{ paddingTop: '100px', height: '77vh' }}>
                <div className="eng-staffmain">
                    <GoBack />
                    <div className="eng-titlecontainer">
                        <span className="eng-profilename">Notifications</span>
                    </div>
                    <div>
                        <div className="eng-scheduleitemcheck">
                            <div className="eng-schedul-details">
                                <p>{dataSet.notification_title}</p>
                                <div className="eng-notificationdetailscontainer">
                                    <div className="eng-notificationdetailsright">
                                        <p className="eng-detailstag">{dataSet.notification_description}</p>
                                    </div>
                                </div>
                                <div className="eng-notificationdate">
                                    <p className="eng-detailstag">
                                        {dataSet.notification_date}</p>
                                </div>
                                <div className="eng-notificationdate">
                                    <p className="eng-detailstag">{dataSet.notification_time}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    );
};

export default expandedNotification;