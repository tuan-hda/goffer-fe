import { createPortal } from 'react-dom';
import { Button } from '../ui/button';
import { TbFlag } from 'react-icons/tb';
import { toPng } from 'html-to-image';
import ReportDialog from './ReportDialog';
import { useState } from 'react';

type ReportButtonProps = {
    containerRef: React.RefObject<HTMLElement>;
};

const ReportButton = ({ containerRef }: ReportButtonProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [dataUrl, setDataUrl] = useState<string | null>(null);

    const captureScreenshot = async () => {
        try {
            setLoading(true);
            const dataUrl = await toPng(containerRef.current as HTMLElement);
            console.log('dataUrl', dataUrl);
            setDataUrl(dataUrl);
        } catch (error) {
            console.error('error', error);
        } finally {
            setLoading(false);
        }
    };

    return createPortal(
        <ReportDialog loading={loading} img={dataUrl}>
            <Button onClick={captureScreenshot} variant="outline" className="fixed bottom-2 right-2 z-[100000]">
                <TbFlag className="mr-2" /> Report
            </Button>
        </ReportDialog>,
        document.body,
    );
};

export default ReportButton;
