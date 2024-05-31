import { useEffect, useRef, useState } from 'react';

const DrawRectangle = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    const [isDrawing, setIsDrawing] = useState(false);

    const canvasOffsetX = useRef(0);
    const canvasOffsetY = useRef(0);
    const startX = useRef(0);
    const startY = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.height = 1300;
        canvas.width = 1300;

        const context = canvas.getContext('2d');
        if (!context) return;
        contextRef.current = context;
        context.lineCap = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 2;

        const canvasOffset = canvas.getBoundingClientRect();
        canvasOffsetX.current = canvasOffset.left;
        canvasOffsetY.current = canvasOffset.top;
    }, []);

    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        startX.current = e.clientX - canvasOffsetX.current;
        startY.current = e.clientY - canvasOffsetY.current;
        setIsDrawing(true);
    };
    const draw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (!isDrawing) return;
        e.preventDefault();
        e.stopPropagation();

        const newMouseX = e.clientX - canvasOffsetX.current;
        const newMouseY = e.clientY - canvasOffsetY.current;

        const rectWidth = newMouseX - startX.current;
        const rectHeight = newMouseY - startY.current;

        contextRef.current?.clearRect(0, 0, canvasRef.current?.width || 0, canvasRef.current?.height || 0);
        contextRef.current?.strokeRect(startX.current, startY.current, rectWidth, rectHeight);
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    return (
        <div className="h-full w-full">
            <canvas
                className="bg-gray-100"
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
            ></canvas>
        </div>
    );
};

export default DrawRectangle;
