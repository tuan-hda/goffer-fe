import { useCallback, useState } from 'react';
import { bisector, extent, max } from '@visx/vendor/d3-array';
import * as allCurves from '@visx/curve';
import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { scaleTime, scaleLinear } from '@visx/scale';
import { MarkerArrow, MarkerCross, MarkerX, MarkerCircle, MarkerLine } from '@visx/marker';
import generateDateValue, { DateValue } from '@visx/mock-data/lib/generators/genDateValue';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { GridRows, GridColumns } from '@visx/grid';
import moment from 'moment';
import { useTooltip, TooltipWithBounds, defaultStyles, Tooltip } from '@visx/tooltip';
import { localPoint } from '@visx/event';

type CurveType = keyof typeof allCurves;

const lineCount = 1;
const series = new Array(lineCount).fill(null).map((_, i) =>
    // vary each series value deterministically
    generateDateValue(25, /* seed= */ i / 72).sort((a: DateValue, b: DateValue) => a.date.getTime() - b.date.getTime()),
);
const allData = series.reduce((rec, d) => rec.concat(d), []);

// data accessors
const getX = (d: DateValue) => d.date;
const getY = (d: DateValue) => d.value;

// scales
const xScale = scaleTime<number>({
    domain: extent(allData, getX) as [Date, Date],
});
const yScale = scaleLinear<number>({
    domain: [0, max(allData, getY) as number],
});

export type CurveProps = {
    width: number;
    height: number;
    showControls?: boolean;
    children?: React.ReactNode;
};

const LINE_LEFT = 10;

export default function Curve({ width, height, showControls = true, children }: CurveProps) {
    const svgHeight = showControls ? height - 40 : height;
    const lineHeight = svgHeight / lineCount;

    const innerHeight = lineHeight - 50;
    const innerWidth = width - 120;

    const bisectDate = bisector<DateValue, Date>((d) => new Date(d.date)).left;

    const {
        tooltipData,
        tooltipLeft = 0,
        tooltipTop = 0,
        showTooltip,
        hideTooltip,
    } = useTooltip<DateValue>({
        tooltipTop: 100,
        tooltipLeft: 1000,
    });

    const getDate = (d: DateValue) => new Date(d.date);

    const handleTooltip = useCallback(
        (event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {
            const x = (localPoint(event) || { x: 0 }).x - margin.left;
            console.log('x', x);
            const x0 = xScale.invert(x); // get Date from the scale

            const index = bisectDate(allData, x0, 1);
            const d0 = allData[index - 1];
            const d1 = allData[index];
            let d = d0;
            if (d1 && getDate(d1)) {
                d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0;
            }
            showTooltip({
                tooltipData: d,
                tooltipLeft: x,
                tooltipTop: yScale(getY(d)),
            });
        },
        [showTooltip, yScale, xScale],
    );

    const margin = { top: 20, right: 20, bottom: 20, left: 42 };

    const tooltipStyles = {
        ...defaultStyles,
        background: 'rgba(0,0,0,0.9)',
        border: '1px solid white',
        color: 'white',
    };

    // update scale output ranges
    xScale.range([0, innerWidth]);
    yScale.range([innerHeight, 0]);

    return (
        <div className="visx-curves-demo">
            {children}
            <svg width={width} height={svgHeight}>
                <MarkerX id="marker-x" stroke="#333" size={22} strokeWidth={4} markerUnits="userSpaceOnUse" />
                <MarkerCross
                    id="marker-cross"
                    stroke="#333"
                    size={22}
                    strokeWidth={4}
                    strokeOpacity={0.6}
                    markerUnits="userSpaceOnUse"
                />
                <MarkerCircle id="marker-circle" fill="#333" size={2} refX={2} />
                <MarkerArrow id="marker-arrow-odd" stroke="#333" size={8} strokeWidth={1} />
                <MarkerLine id="marker-line" fill="#333" size={16} strokeWidth={1} />
                <MarkerArrow id="marker-arrow" fill="#333" refX={2} size={6} />
                <rect
                    onTouchStart={handleTooltip}
                    onTouchMove={handleTooltip}
                    onMouseMove={handleTooltip}
                    onMouseLeave={() => hideTooltip()}
                    width={innerWidth}
                    height={innerHeight}
                    fill="transparent"
                    x={margin.left + LINE_LEFT}
                    rx={14}
                    ry={14}
                />

                <Group left={margin.left} top={margin.top}>
                    <AxisLeft
                        stroke={'#fff'}
                        tickStroke={'#ddd'}
                        scale={yScale}
                        tickLabelProps={() => ({
                            fill: '#555',
                            fontSize: 12,
                            textAnchor: 'end',
                        })}
                    />
                    <AxisBottom
                        scale={xScale}
                        stroke={'#fff'}
                        tickStroke={'#ddd'}
                        top={innerHeight}
                        tickFormat={(x) => {
                            if (x instanceof Date) return moment(x).format('ddd hh A');
                            return x.toLocaleString();
                        }}
                        tickLabelProps={() => ({
                            fill: '#555',
                            fontSize: 12,
                            textAnchor: 'middle',
                        })}
                    />
                    <GridRows scale={yScale} width={innerWidth} height={innerHeight - margin.top} stroke="#ddd" />
                    <GridColumns scale={xScale} width={innerWidth} height={innerHeight} stroke="#ddd" />
                    {width > 8 &&
                        series.map((lineData, i) => {
                            const even = i % 2 === 0;
                            let markerStart = even ? 'url(#marker-cross)' : 'url(#marker-x)';
                            if (i === 1) markerStart = 'url(#marker-line)';
                            const markerEnd = even ? 'url(#marker-arrow)' : 'url(#marker-arrow-odd)';
                            return (
                                <Group left={LINE_LEFT} key={`lines-${i}`}>
                                    {lineData.map((d, j) => (
                                        <circle
                                            key={i + j}
                                            r={3}
                                            cx={xScale(getX(d))}
                                            cy={yScale(getY(d))}
                                            stroke="rgba(33,33,33,0.5)"
                                            fill="transparent"
                                        />
                                    ))}
                                    <LinePath<DateValue>
                                        curve={allCurves['curveNatural']}
                                        data={lineData}
                                        x={(d) => xScale(getX(d)) ?? 0}
                                        y={(d) => yScale(getY(d)) ?? 0}
                                        stroke="#333"
                                        strokeWidth={even ? 2 : 1}
                                        strokeOpacity={even ? 0.6 : 1}
                                        shapeRendering="geometricPrecision"
                                        markerMid="url(#marker-circle)"
                                        markerStart={markerStart}
                                        markerEnd={markerEnd}
                                    />
                                </Group>
                            );
                        })}
                </Group>
            </svg>

            {tooltipData && (
                <div>
                    <TooltipWithBounds
                        key={Math.random()}
                        top={tooltipTop + innerHeight}
                        left={tooltipLeft + innerWidth / 2}
                        style={tooltipStyles}
                    >
                        <p>{`$${getY(tooltipData)}`}</p>
                        <p>{`\n${moment(getX(tooltipData)).format('DD MMM YYYY hh:mm A')}`}</p>
                    </TooltipWithBounds>
                </div>
            )}
            <style jsx>{`
                .visx-curves-demo label {
                    font-size: 12px;
                }
            `}</style>
        </div>
    );
}
