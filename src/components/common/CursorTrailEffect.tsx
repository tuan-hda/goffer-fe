import { useEffect, useRef } from 'react';

const LENGTH = 20;
const RADIUS = 20;

interface CustomDiv extends HTMLDivElement {
    x?: number;
    y?: number;
}

const CursorTrailEffect = () => {
    const circleRefs = useRef<CustomDiv[]>([]);
    const cords = useRef({ x: 0, y: 0 });
    const animationFrameId = useRef<number | null>();

    useEffect(() => {
        const updateCircles = () => {
            let x = cords.current.x;
            let y = cords.current.y;

            const newPosCircles = [];
            for (let i = 0; i < LENGTH; i++) {
                newPosCircles.push({ x, y });
                const nextCircle = circleRefs.current[(i + 1) % LENGTH];
                x += ((nextCircle.x || 0) - x) * 0.4;
                y += ((nextCircle.y || 0) - y) * 0.4;
            }

            newPosCircles.forEach((pos, i) => {
                const circle = circleRefs.current[i];
                circle.style.left = `${pos.x - RADIUS}px`;
                circle.style.top = `${pos.y - RADIUS}px`;
                circle.x = pos.x;
                circle.y = pos.y;
            });

            return requestAnimationFrame(updateCircles);
        };

        const handleMouseMove = (e: MouseEvent) => {
            cords.current.x = e.clientX;
            cords.current.y = e.clientY;
        };

        animationFrameId.current = requestAnimationFrame(updateCircles);

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId.current!);
        };
    }, []);

    return Array(LENGTH)
        .fill('0')
        .map((_, i) => {
            return (
                <div
                    ref={(el) => (circleRefs.current[i] = el as HTMLDivElement)}
                    key={i}
                    className="rounded-full z-[1] pointer-events-none  bg-black fixed w-10 h-10"
                    style={{
                        transform: `scale(${(LENGTH - i) / LENGTH})`,
                    }}
                />
            );
        });
};

export default CursorTrailEffect;
