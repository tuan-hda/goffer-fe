import { Group } from '@visx/group';
import Pie from '@visx/shape/lib/shapes/Pie';
import Text from '@visx/text/lib/Text';
import { useState } from 'react';

export type PieProps = {
    width: number;
    height: number;
    children?: React.ReactNode;
};

type PieData = {
    symbol: string;
    value: number;
    color: string;
};

const data: PieData[] = [
    { symbol: 'A', value: 10, color: '#f6c431' },
    { symbol: 'B', value: 5, color: '#12ccba' },
    { symbol: 'C', value: 25, color: '#cc12ba' },
];

const PieChart = ({ width, height }: PieProps) => {
    const [active, setActive] = useState<PieData | null>(null);
    const half = width / 2;

    return (
        <svg width={width} height={height}>
            <Group top={half} left={half}>
                <Pie
                    data={data}
                    pieValue={(datum) => datum.value}
                    outerRadius={half}
                    innerRadius={({ data }) => {
                        const size = active && active.symbol === data.symbol ? 40 : 28;
                        return half - size;
                    }}
                    padAngle={0.01}
                >
                    {(pie) => {
                        return pie.arcs.map((arc) => {
                            return (
                                <g
                                    key={arc.data.symbol}
                                    onMouseEnter={() => setActive(arc.data)}
                                    onMouseLeave={() => setActive(null)}
                                >
                                    <path d={pie.path(arc) || undefined} fill={arc.data.color}></path>
                                </g>
                            );
                        });
                    }}
                </Pie>

                <Text textAnchor="middle" fill="#333" dy={-20} fontSize={16} fontWeight={500}>
                    {active ? active.symbol : 'Total'}
                </Text>
                <Text textAnchor="middle" fill="#000" dy={30} fontSize={48}>
                    {active ? active.value : data.reduce((acc, d) => acc + d.value, 0)}
                </Text>
            </Group>
        </svg>
    );
};

export default PieChart;
