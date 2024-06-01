import { createPortal } from 'react-dom';
import { Button } from '../ui/button';
import { TbFlag } from 'react-icons/tb';
import ReportDialog from './ReportDialog';
import { useState } from 'react';
import { toPng } from 'html-to-image';

type ReportButtonProps = {
    container: HTMLDivElement | null;
};

const ReportButton = ({ container }: ReportButtonProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [dataUrl, setDataUrl] = useState<string | null>(null);

    const captureScreenshot = async () => {
        try {
            setLoading(true);
            const dataUrl = await toPng(container as HTMLElement);
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
