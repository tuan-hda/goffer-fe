import { useRef, useState } from 'react';
import { Curve } from '../charts';

const Analytics = () => {
    const [width, setWidth] = useState(0);
    return (
        <div
            ref={(node) => {
                setWidth(node?.getBoundingClientRect().width || 0);
            }}
        >
            <Curve width={width} height={400} />
        </div>
    );
};

export default Analytics;
