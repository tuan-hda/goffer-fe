import { Avatar } from '@nextui-org/react';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { Button } from '../ui/button';

const LeftPanel = () => {
    const { data: profile } = useSelfProfileQuery();

    if (!profile) {
        return null;
    }

    return (
        <div className="h-[320px] w-[320px]">
            <Avatar src={profile?.avatar} className="h-[320px] w-[320px] rounded-none object-cover" />
            <Button variant="black" className="mt-4 w-full text-base" size="lg">
                Get in touch
            </Button>
        </div>
    );
};

export default LeftPanel;
