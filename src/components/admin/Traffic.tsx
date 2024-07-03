import { useState } from 'react';
import { Curve } from '../charts';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { TbInfoCircle } from 'react-icons/tb';

const Traffic = () => {
    const [width, setWidth] = useState(0);

    return (
        <div
            ref={(ref) => {
                setWidth(ref?.getBoundingClientRect().width || 0);
            }}
            className="col-span-9 -mx-0.5 overflow-hidden px-0.5"
        >
            {/* <Curve width={width + 50} height={Math.round(width / 2)}>
                <div className="mb-4 flex items-center justify-between">
                    <div className="font-medium">
                        <p className="text-base">Traffic</p>
                        <p className="text-3xl font-normal">124.5k</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="mb-1">Granularity: by month</p>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <TbInfoCircle className="mb-1 text-base text-gray-500" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    Change the granularity of the data by selecting a different time period.
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </Curve> */}
        </div>
    );
};

export default Traffic;
