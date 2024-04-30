import { Avatar } from '@nextui-org/react';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { TbBrandLinkedin, TbLink } from 'react-icons/tb';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

const LeftPanel = () => {
    const { data: profile } = useSelfProfileQuery();

    if (!profile) {
        return null;
    }

    return (
        <div className="h-[320px] w-[320px]">
            <Avatar src={profile?.avatar} className="h-[320px] w-[320px] rounded-3xl object-cover" />
            <Button variant="black" className="mt-6 w-full rounded-2xl text-base" size="lg">
                Get in touch
            </Button>
            <p className="mb-3 mt-8 text-xs font-light text-gray-500">LOCATION</p>
            <p>Ho Chi Minh City, Vietnam</p>

            <p className="mb-3 mt-8 text-xs font-light text-gray-500">BADGES</p>
            <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="rounded-xl px-3 py-2 text-sm font-normal">
                    💰 Pull Shark
                </Badge>
                <Badge variant="outline" className="rounded-xl px-3 py-2 text-sm font-normal">
                    🐰 New Me Super Shy
                </Badge>
            </div>
            <p className="mb-3 mt-8 text-xs font-light text-gray-500">LINKS</p>
            <div className="flex items-center gap-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <TbBrandLinkedin className="text-2xl" />
                        </TooltipTrigger>
                        <TooltipContent>LinkedIn</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <TbLink className="text-xl" />
                        </TooltipTrigger>
                        <TooltipContent>Portfolio</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    );
};

export default LeftPanel;
