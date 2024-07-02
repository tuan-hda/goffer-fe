import { Group } from '@visx/group';
import Pie from '@visx/shape/lib/shapes/Pie';
import Text from '@visx/text/lib/Text';
import classNames from 'classnames';
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
    { symbol: 'A', value: 10, color: '#C8A8DA' },
    { symbol: 'B', value: 5, color: '#EDB5D2' },
    { symbol: 'C', value: 25, color: '#FFE6C1' },
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
                    innerRadius={half - 28}
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
                                    <path
                                        d={pie.path(arc) || undefined}
                                        className="transition-all"
                                        fill={
                                            active && active.symbol !== arc.data.symbol
                                                ? `${arc.data.color}66`
                                                : `${arc.data.color}ff`
                                        }
                                    ></path>
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
