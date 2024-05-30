import { Outlet } from 'react-router-dom';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { Button } from '@/components/ui/button';
import { TbFlag } from 'react-icons/tb';
import { createPortal } from 'react-dom';
import { useRef } from 'react';
import { toPng } from 'html-to-image';

const RootLayout = () => {
    const ref = useRef<HTMLDivElement>(null);

    const captureScreenshot = async () => {
        const dataUrl = await toPng(ref.current as HTMLElement);
        const img = new Image();
        img.src = dataUrl;
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'screenshot.png';
        document.body.appendChild(a);
        a.click();
    };

    useSelfProfileQuery();
    return (
        <div className="h-full w-full" ref={ref}>
            <Outlet />
            {createPortal(
                <Button onClick={captureScreenshot} variant="outline" className="fixed bottom-2 right-2 z-[100000]">
                    <TbFlag className="mr-2" /> Report
                </Button>,
                document.body,
            )}
        </div>
    );
};

export default RootLayout;
