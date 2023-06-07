/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
// To use Html5Qrcode (more info below)
import {
    Html5Qrcode,
    Html5QrcodeSupportedFormats,
} from 'html5-qrcode';
const qrcodeRegionId = 'html5qr-code-full-region';

export class ScanPlugin extends React.Component<{ qrCodeSuccessCallback: any }> {
    html5QrCode: Html5Qrcode | undefined;

    override render() {
        return (
            <div>
                <div
                    id={qrcodeRegionId}
                    style={{
                        maxHeight: 'calc(100vh - 64px)',
                        position: 'relative',
                        maxWidth: '100vw',
                        overflow: 'hidden',
                    }}
                >
                    <div style={{ textAlign: 'center', padding: '3rem 0rem' }}>
                        Starting Scanner ...... Please Give Camera Permission
                    </div>
                </div>
            </div>
        );
    }

    override componentWillUnmount() {
        if (this.html5QrCode && this.html5QrCode.isScanning)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            this.html5QrCode.stop().then((r) => {
                this.html5QrCode?.clear();
            });
    }

    async start() {
        if (this.html5QrCode?.isScanning) await this.html5QrCode?.stop();
        if (this.html5QrCode)
            this.html5QrCode
                .start(
                    { facingMode: 'environment' },
                    { fps: 10, qrbox: 250 },
                    (decodedText, decodedResult) => {
                        this.props.qrCodeSuccessCallback(decodedText);
                    },
                    (errorMessage) => {
                        //
                    },
                )
                .then((r) => {
                    //   console.log(this.html5QrCode?.getRunningTrackCapabilities());
                    //   this.html5QrCode?.applyVideoConstraints({
                    //     focusMode: 'continuous',
                    //     // @ts-ignore
                    //     advanced: [{ zoom: 2.0 }],
                    //   });
                })
                .catch((err) => {
                    alert(err);
                });
    }

    override componentDidMount() {
        if (this.html5QrCode) return;
        this.html5QrCode = new Html5Qrcode(qrcodeRegionId, {
            formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
            verbose: false,
            useBarCodeDetectorIfSupported: true,
        });
        if (this.html5QrCode) this.start();
    }
}