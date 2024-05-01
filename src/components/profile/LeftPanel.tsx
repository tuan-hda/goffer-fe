import { Avatar } from '@nextui-org/react';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { TbExternalLink } from 'react-icons/tb';
import { Editable } from '../common';
import SocialLink from './SocialLink';
import { useState } from 'react';

const LeftPanel = () => {
    const { data: profile } = useSelfProfileQuery();
    const [links, setLinks] = useState<{ label: string; url: string }[]>([
        { label: 'LinkedIn', url: 'https://linkedin.com' },
    ]);

    const setLink = (index: number) => (link: { label: string; url: string }) => {
        setLinks((prev) => {
            const newLinks = [...prev];
            newLinks[index] = link;
            return newLinks;
        });
    };

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
            <Editable value="Ho Chi Minh City, Vietnam" />

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
            <div>
                {links.map((link, index) => (
                    <Editable
                        key={index}
                        custom={<SocialLink link={link} setLink={setLink(index)} />}
                        deletable
                        className="!py-2"
                        type="custom"
                    >
                        <div className="flex items-center gap-2">
                            LinkedIn
                            <TbExternalLink className="text-base" />
                        </div>
                    </Editable>
                ))}
            </div>
            <Editable mode="new" name="link" />
        </div>
    );
};

export default LeftPanel;
