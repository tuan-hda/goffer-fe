import { useEffect, useState } from 'react';

const CursorTrailEffect = () => {
    const [posCircles, setPosCircles] = useState([
        {
            x: 0,
            y: 0,
        },
        {
            x: 0,
            y: 0,
        },
        {
            x: 0,
            y: 0,
        },
        {
            x: 0,
            y: 0,
        },
        {
            x: 0,
            y: 0,
        },
        {
            x: 0,
            y: 0,
        },
        {
            x: 0,
            y: 0,
        },
        {
            x: 0,
            y: 0,
        },
        {
            x: 0,
            y: 0,
        },
        {
            x: 0,
            y: 0,
        },
    ]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosCircles((prev) => prev.map(() => ({ x: e.clientX, y: e.clientY })));
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return posCircles.map((pos, i) => (
        <div
            key={i}
            className="rounded-full fixed bg-black/80 w-6 h-6"
            style={{
                left: pos.x - 12 + 'px',
                top: pos.y - 12 + 'px',
            }}
        />
    ));
};

export default CursorTrailEffect;
