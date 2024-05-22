import { useRef, useState } from 'react';
import { Curve } from '../charts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const Traffic = () => {
    const [width, setWidth] = useState(0);

    return (
        <div
            ref={(ref) => {
                setWidth(ref?.getBoundingClientRect().width || 0);
            }}
            className="col-span-9 overflow-hidden"
        >
            <Curve width={width + 50} height={Math.round(width / 2)}>
                <div className="mb-4 flex items-center justify-between">
                    <div className="font-medium">
                        <p className="text-base">Traffic</p>
                        <p className="text-3xl font-normal">124.5k</p>
                    </div>
                    <div>
                        <p className="mb-1">Granularity</p>
                        <Select>
                            <SelectTrigger className="w-[180px] bg-white">
                                <SelectValue placeholder="Select interval" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="day">Day</SelectItem>
                                <SelectItem value="month">Month</SelectItem>
                                <SelectItem value="quarter">Quarter</SelectItem>
                                <SelectItem value="year">Year</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </Curve>
        </div>
    );
};

export default Traffic;
