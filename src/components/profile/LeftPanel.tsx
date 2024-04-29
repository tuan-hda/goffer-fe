import { Avatar } from '@nextui-org/react';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { TbBrandLinkedin } from 'react-icons/tb';

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
            <TbBrandLinkedin className="text-2xl" />
        </div>
    );
};

export default LeftPanel;
