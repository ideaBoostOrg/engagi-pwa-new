import { BellOutlined, HomeOutlined, QrcodeOutlined } from '@ant-design/icons';
import { Col, Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [activeKey, setActiveKey] = useState('/home');
    const handleTabClick = (key: string) => {
        setActiveKey(key);
        navigate(`${key}`);
    };
    return (
        <div>
            <Col span={24} className="eng-navbar">
                <Tabs
                    tabBarStyle={{ backgroundColor: '#f0f2f5', padding: '10px' }}
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
                        key="/notification"></TabPane>
                </Tabs>
            </Col>
        </div>
    );
};

export default Navbar;