import { useEffect, useRef, useState } from 'react';
import { AlertDialogContent } from '../ui/alert-dialog';
import { toPng } from 'html-to-image';
import DrawRectangle from '../canvas/DrawRectangle';

const AreaSelectionContent = () => {
    const [size, setSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);

    const handleContinue = async () => {
        const dataUrl = await toPng(containerRef.current as HTMLElement, {
            style: {
                top: `${containerRef.current?.scrollTop || 0}px`,
            },
        });
        console.log(dataUrl);
    };

    return (
        <AlertDialogContent overlayClassName="bg-transparent" className="max-w-screen flex h-screen bg-transparent p-0">
            <DrawRectangle
                onContinue={handleContinue}
                className="absolute left-0 right-0 top-0 z-[10] rounded-xl"
                {...size}
            />
            <div className="pointer-events-none fixed left-1/2 top-10 z-[20] -translate-x-1/2 self-start rounded-xl bg-black/50 p-3 text-white">
                Select area where the issue is. Press ESC to exit.
            </div>
        </AlertDialogContent>
    );
};

export default AreaSelectionContent;
