import { useRef, useState } from 'react';
import { AlertDialogContent } from '../ui/alert-dialog';
import { toPng } from 'html-to-image';
import DrawRectangle from '../canvas/DrawRectangle';

type AreaSelectionContentProps = {
    img: string;
    setFinalImage: React.Dispatch<React.SetStateAction<string>>;
};

const AreaSelectionContent = ({ img, setFinalImage }: AreaSelectionContentProps) => {
    const [size, setSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement | null>(null);
    const mounted = useRef(false);

    const handleContinue = async () => {
        const dataUrl = await toPng(containerRef.current as HTMLElement, {
            height: size.height,
        });
        setFinalImage(dataUrl);
    };

    return (
        <AlertDialogContent
            overlayClassName="bg-white"
            className="max-w-screen flex h-screen rounded-none bg-transparent p-0"
        >
            <div ref={containerRef} className="relative h-full w-full overflow-y-auto">
                <img
                    src={img}
                    alt="screenshot"
                    className="object-contain"
                    onLoad={(e) => {
                        if (mounted.current) return;
                        const img = e.currentTarget as HTMLImageElement;
                        setSize({
                            width: img.width,
                            height: img.height,
                        });
                        mounted.current = true;
                    }}
                />
                <DrawRectangle
                    onContinue={handleContinue}
                    container={containerRef.current}
                    className="absolute left-0 right-0 top-0 z-[10] rounded-xl"
                    {...size}
                />
            </div>
            <div className="pointer-events-none fixed left-1/2 top-10 z-[20] -translate-x-1/2 self-start rounded-xl bg-black/50 p-3 text-white">
                Select area where the issue is. Press ESC to exit.
            </div>
        </AlertDialogContent>
    );
};

export default AreaSelectionContent;
