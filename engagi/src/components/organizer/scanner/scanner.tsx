/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, message, Modal, Progress, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { validateCodes } from '../../api/student-actions';
import { ScanPlugin } from '../scanPlugin/scanPlugin';
import Header from '../../header/header';
import Navbar from '../../navbar/navbar';

const ScanIndicator = ({
    progress,
    restart,
    loading,
}: {
    progress: number;
    restart: any;
    loading: boolean;
}) => {
    return (
        <div className="scan-indicator">
            <div style={{ width: '100%' }}>
                <Progress percent={progress} width={progress} showInfo={false} />
            </div>
            <div className="scan-validate-con">
                <Button
                    size="large"
                    type="primary"
                    loading={loading}
                    // disabled={progress === 0}
                    onClick={() => restart()}
                    className="scan-validate"
                >
                    {loading ? 'Validating' : 'Restart Scan'}
                </Button>
            </div>
        </div>
    );
};

export default function Scanner() {
    const [codes, setCodes] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setIsModalVisible(false);
        }, 3000);
    };

    useEffect(() => {
        if (codes.length === 3 && !loading) {
            setLoading(true);
            // validateCodes(codes)
            //     .then((e: any) => {
            //         navigate(
            //             `/student/cool-down?courseId=${e.course.courseId}&classId=${e.class.classId}`
            //         );
            //     })
            //     .catch((r: any) => {
            //         messageApi.open({
            //             type: 'error',
            //             content: 'Codes failed validation. Restarting.....',
            //             style: {
            //                 marginTop: '80px',
            //             },
            //         });
            //         setCodes([]);
            //         setLoading(false);
            //     });
        }
    }, [codes]);

    function openModal() {
        setIsModalVisible(true);
    }

    function closeModal() {
        setIsModalVisible(false);
    }

    return (
        <div className="eng-maindiv">
            <div>
                <Header />
            </div>
            <div className="eng-detailsdiv">
                <div className="eng-staffmain">
                    <div className="eng-titlecontainer">
                        <span className="eng-profilename">Scan QR</span>
                    </div>
                    <div className="eng-scannercontainer">
                        <div>
                            <ScanPlugin
                                qrCodeSuccessCallback={(r: string) =>
                                    setCodes((c) => Array.from(new Set([...c, r])))
                                }
                            />
                        </div>
                        {/* <div>
                            {contextHolder}
                            <ScanIndicator
                                loading={loading}
                                restart={() => setCodes([])}
                                progress={(codes.length / 3) * 100}
                            />
                        </div> */}
                    </div>

                    <Row>
                        <Col span={24} className="eng-checkinContainer">
                            {!isModalVisible && (
                                <Button className="eng-button eng-buttonCheckin" onClick={openModal}>
                                    <span>Check-in Manually</span>
                                </Button>
                            )}
                        </Col>
                    </Row>

                    <Modal
                        open={isModalVisible}
                        onCancel={closeModal}
                        onOk={handleOk}
                        centered
                        footer={[
                            <Button key="back" onClick={closeModal}>
                                Cancel
                            </Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                                Submit
                            </Button>,
                        ]}
                    >
                        <h2>Enter CSSL Number:</h2>
                    </Modal>
                </div>
            </div>
            <div>
                <Navbar />
            </div>
        </div>

    );
}