import { Col, Image, Popover, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import logo from '../../assets/images/header.png';
import user from '../../assets/images/profile.svg';
import down from '../../assets/images/down_arrow.png';

const Header = () => {
    const navigate = useNavigate();
    const actions = (
        <Row>
            <Col>
                <Row className="eng-headerpopoverdiv" onClick={() => { navigate('/profile'); }}>
                    <UserOutlined className="eng-headerpopover-icon"/>Profile
                </Row>
                <Row className="eng-headerpopoverdiv" onClick={() => { navigate('/'); }}>
                    <LogoutOutlined className="eng-headerpopover-icon"/>Sign Out
                </Row>
            </Col>
        </Row>
    );
    return (
        <div className="eng-header">
            <Row className="eng-headerimagediv">
                <Image
                    src={logo}
                    className='eng-header-logo'
                    alt='logo'
                    preview={false}
                />
            </Row>
            <Row className="eng-headerdropdown-container">
                <Popover
                    placement="bottomRight"
                    content={actions}
                    trigger='click'
                    className='eng-headerpopover'
                >
                    <Row className="eng-popoverdiv">
                        <Col span={18} className="eng-profile-image-container">
                            <Image src={user} className="eng-header-profile" preview={false} />
                        </Col>
                        <Col span={6}className="eng-dropdowndiv">
                            <Image src={down} width='50%' preview={false} />
                        </Col> 
                    </Row>
                </Popover>
            </Row>
        </div>
    );
};

export default Header;