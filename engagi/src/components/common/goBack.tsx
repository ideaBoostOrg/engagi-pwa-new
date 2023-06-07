import { Image } from 'antd';
import React from 'react';
import leftArrow from '../../assets/images/left-arrow.png';
import { useNavigate } from 'react-router-dom';

const GoBack = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    return (
        <div className="eng-gobackdiv" onClick={handleBack}>
            <Image src={leftArrow} className="eng-gobackimage" width={'200%'} />
        </div>
    );
};

export default GoBack;
