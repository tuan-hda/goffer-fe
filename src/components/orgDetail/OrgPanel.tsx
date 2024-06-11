import { Avatar, AvatarGroup } from '@nextui-org/react';
import { TbBrandMailgun, TbChevronLeft } from 'react-icons/tb';
import { HiMiniGlobeAlt } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { Organization } from '@/types/organization.type';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

interface Props {
    data: Organization;
}

const OrgPanel = ({ data }: Props) => {
    const navigate = useNavigate();

    const directToMail = () => {
        window.location.href = `mailto:${data.email}`;
    };

    const websiteOnNewTab = () => {
        window.open(data.website, '_blank');
    };

    return (
        <div className="sticky left-0 top-0 flex h-screen w-1/4 flex-col items-center gap-4 bg-[#040304] px-8 py-4">
            <Button
                onClick={() => navigate(-1)}
                size="icon"
                variant="ghost"
                className="size-[10px] self-start rounded-full"
            >
                <TbChevronLeft size={28} color="#F0F0F1" className="m-auto self-center" />
            </Button>
            <Avatar src={data.logo} className="h-24 w-24" />
            <p className="pt-2 text-center text-2xl font-medium text-text-100">{data.name}</p>
            <p className="line-clamp-2 w-4/5 overflow-hidden text-ellipsis text-center text-[#A0A0A0]">{data.field}</p>
            <div className="flex flex-row gap-x-4 py-3">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button onClick={directToMail} variant="outline" className="rounded-full" size="icon">
                                <TbBrandMailgun className="m-auto self-center text-xl" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{data.email}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button onClick={websiteOnNewTab} variant="outline" className="rounded-full" size="icon">
                                <HiMiniGlobeAlt className="m-auto self-center text-xl" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Go to website</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div className="flex aspect-[2/3] w-full flex-col items-center rounded-3xl bg-gradient-to-b from-[#3e3e3e] to-[#040304] py-12">
                <p className="pt-2 text-2xl font-medium text-text-100">$35M</p>
                <p className="text-center font-light text-[#A0A0A0]">Total raised</p>

                <AvatarGroup className="mt-12" max={3}>
                    {data.members.map((user) => (
                        <Avatar key={user.id} src={user.avatar} />
                    ))}
                </AvatarGroup>
                <p className="mt-2 text-center font-light text-[#A0A0A0]">Company size</p>
            </div>
        </div>
    );
};

export default OrgPanel;
