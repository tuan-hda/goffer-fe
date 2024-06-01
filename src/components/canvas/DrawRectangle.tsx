import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import classNames from 'classnames';

type DrawRectangleProps = {
    height?: number;
    width?: number;
    container?: HTMLElement | null;
    className?: string;
    onContinue?: () => void;
};

const DrawRectangle = ({ height = 1000, width = 1000, container, className, onContinue }: DrawRectangleProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const actionContainerRef = useRef<HTMLDivElement | null>(null);

    const [isDrawing, setIsDrawing] = useState(false);

    const canvasOffsetX = useRef(0);
    const canvasOffsetY = useRef(0);
    const startX = useRef(0);
    const startY = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext('2d');
        if (!context) return;
        contextRef.current = context;
        context.lineCap = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.fillStyle = 'rgba(0, 0, 0, 0.5)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        const canvasOffset = canvas.getBoundingClientRect();
        const containerOffset = container?.getBoundingClientRect();
        canvasOffsetX.current = canvasOffset.left - (containerOffset?.left || 0);
        canvasOffsetY.current = canvasOffset.top - (containerOffset?.top || 0);
    }, [width, height]);

    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        startX.current = e.clientX - canvasOffsetX.current;
        startY.current = (container?.scrollTop || 0) + e.clientY - canvasOffsetY.current;
        setIsDrawing(true);
        actionContainerRef.current?.classList.add('pointer-events-none');
    };

    const draw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (!isDrawing) return;
        e.preventDefault();
        e.stopPropagation();

        const newMouseX = e.clientX - canvasOffsetX.current;
        const newMouseY = (container?.scrollTop || 0) + e.clientY - canvasOffsetY.current;

        const rectWidth = newMouseX - startX.current;
        const rectHeight = newMouseY - startY.current;

        if (contextRef.current) {
            contextRef.current?.clearRect(0, 0, canvasRef.current?.width || 0, canvasRef.current?.height || 0);
            contextRef.current.fillStyle = 'rgba(0, 0, 0, 0.5)';
            contextRef.current?.fillRect(0, 0, canvasRef.current?.width || 0, canvasRef.current?.height || 0);
            contextRef.current.clearRect(startX.current, startY.current, rectWidth, rectHeight);
        }

        if (actionContainerRef.current) {
            const actionContainerLeft =
                (newMouseX < startX.current ? startX.current : newMouseX) -
                actionContainerRef.current.getBoundingClientRect().width;
            const actionContainerTop = (newMouseY < startY.current ? startY.current : newMouseY) + 10;

            actionContainerRef.current.style.left = `${actionContainerLeft}px`;
            actionContainerRef.current.style.top = `${actionContainerTop}px`;
            actionContainerRef.current.classList.remove('hidden');
        }
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        actionContainerRef.current?.classList.remove('pointer-events-none');
    };

    const cancel = () => {
        if (contextRef.current) {
            contextRef.current.clearRect(0, 0, canvasRef.current?.width || 0, canvasRef.current?.height || 0);
            contextRef.current.fillStyle = 'rgba(0, 0, 0, 0.4)';
            contextRef.current?.fillRect(0, 0, canvasRef.current?.width || 0, canvasRef.current?.height || 0);
        }

        if (actionContainerRef.current) {
            actionContainerRef.current.classList.add('hidden', 'pointer-events-none');
        }
    };

    const handleContinue = () => {
        actionContainerRef.current?.classList.add('hidden', 'pointer-events-none');
        if (onContinue) onContinue();
    };

    return (
        <>
            <canvas
                className={className}
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
            />
            <div
                ref={actionContainerRef}
                className={classNames('pointer-events-none absolute left-0 top-0 z-[10] hidden w-fit space-x-2')}
            >
                <Button onClick={cancel} variant="outline">
                    Cancel
                </Button>
                <Button onClick={handleContinue} variant="black">
                    Continue
                </Button>
            </div>
        </>
    );
};

export default DrawRectangle;
