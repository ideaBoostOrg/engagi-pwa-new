import { BellOutlined, HomeOutlined, QrcodeOutlined } from '@ant-design/icons';
import { Col, Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [activeKey, setActiveKey] = useState('/home');
    const handleTabClick = (key: string) => {
        setActiveKey(key);
        navigate(`${key}`);
    };
    useEffect(() => {
        setActiveKey(activeKey);
    }, [activeKey]);
    return (
        <div>
            <Col span={24} className="eng-navbar">
                <Tabs
                    tabBarStyle={{ 
                        backgroundColor: '#141466',
                        paddingTop: '4px',
                        borderRadius: '30px',
                    }}
                    className="eng-tabs"
                    centered
                    activeKey={activeKey}
                    onTabClick={handleTabClick}
                >
                    <TabPane
                        tab={<HomeOutlined className="eng-navbar-icon" />}
                        key="/home"></TabPane>
                    <TabPane
                        tab={<QrcodeOutlined className="eng-navbar-icon" />}
                        key="/qr"></TabPane>
                    <TabPane
                        tab={<BellOutlined className="eng-navbar-icon" />}
                        key="/notifications"></TabPane>
                </Tabs>
            </Col>
        </div>
    );
};

export default Navbar;