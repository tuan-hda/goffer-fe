import { Avatar } from '@nextui-org/react';
import {
    TbBrandLinkedin,
    TbChevronDown,
    TbDots,
    TbFile,
    TbGlobe,
    TbLocation,
    TbMail,
    TbPhone,
    TbSchool,
    TbTools,
} from 'react-icons/tb';
import { Badge } from '../ui/badge';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { Apply } from '@/types/application.type';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

type ApplicantProps = {
    data: Apply;
};

const Applicant = ({ data }: ApplicantProps) => {
    const getEmojiUrl = () => {
        const score = data.match;
        if (!score || score <= 5) {
            return '/emoji/crying.png';
        }
        if (score <= 7) {
            return '/emoji/neutral.png';
        }
        return '/emoji/happy.png';
    };

    return (
        <div className="flex-1">
            <div className="flex items-start gap-5">
                <Avatar src={data.profilePicture} className="h-24 w-24 flex-shrink-0 rounded-3xl" />
                <div className="flex flex-1 flex-col">
                    <div className="flex items-center gap-2">
                        <p className="font-serif text-2xl font-semibold">{data.name}</p>
                        {data.owner?.isPro && (
                            <Badge className="rounded-lg bg-gradient-to-r from-[#FAE4A7] to-[#E5D4FF] text-black shadow-none">
                                PRO
                            </Badge>
                        )}
                        <div className="flex-1" />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size="icon" aria-haspopup="true" variant="outline">
                                    <TbDots className="text-base" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>More options</DropdownMenuLabel>
                                <DropdownMenuItem>Reject candidate</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="outline" size="icon">
                            <TbMail className="text-lg" />
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="black" className="gap-2">
                                    Applied <TbChevronDown />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Move to</DropdownMenuLabel>
                                <DropdownMenuItem>Applied</DropdownMenuItem>
                                <DropdownMenuItem>Shortlisted</DropdownMenuItem>
                                <DropdownMenuItem>Phone call</DropdownMenuItem>
                                <DropdownMenuItem>On-site</DropdownMenuItem>
                                <DropdownMenuItem>Offer</DropdownMenuItem>
                                <DropdownMenuItem>Hired</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="mt-1 flex items-center gap-6">
                        <div className="flex items-start gap-2 underline hover:underline">
                            <TbMail className="h-5 flex-shrink-0 text-lg" />
                            <p className="min-w-0">{data.email}</p>
                        </div>
                        <div className="flex items-start gap-2 underline hover:underline">
                            <TbPhone className="h-5 flex-shrink-0 text-lg" />
                            <p className="min-w-0">{data.phoneNumber}</p>
                        </div>
                    </div>

                    <div className="-mb-1 mt-2 flex gap-4 pb-3">
                        <div className="flex items-center gap-2">
                            <TbFile className="text-lg" />
                            <Link to={data.resume} target="_blank" className="font-medium underline">
                                Resume
                            </Link>
                            <Dialog>
                                <DialogTrigger>
                                    <Badge>Match score: {data.match}</Badge>
                                </DialogTrigger>
                                <DialogContent className="max-w-[560px] rounded-2xl p-8">
                                    <DialogHeader>
                                        <DialogTitle>Match score: {data.match}</DialogTitle>
                                    </DialogHeader>
                                    <div className="flex flex-row items-center gap-4">
                                        <div>
                                            <p className="font-medium underline">Reason for this score:</p>
                                            <p className="mt-2">{data.reason}</p>
                                        </div>
                                        <div>
                                            <img src={getEmojiUrl()} alt="Emoji" />
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                        {data.linkedIn && (
                            <div className="flex items-center gap-2">
                                <TbBrandLinkedin className="text-lg" />
                                <Link target="_blank" to={data.linkedIn} className="font-medium underline">
                                    LinkedIn
                                </Link>
                            </div>
                        )}
                        {data.personalWebsite && (
                            <div className="flex items-center gap-2">
                                <TbGlobe className="text-lg" />
                                <Link target="_blank" to={data.personalWebsite} className="font-medium underline">
                                    Personal Website
                                </Link>
                            </div>
                        )}
                    </div>

                    <Collapsible>
                        <CollapsibleTrigger className="flex items-center gap-2">
                            Show description <TbChevronDown className="text-base" />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            {data.location && (
                                <div className="mt-2 flex items-start gap-2">
                                    <TbLocation className="h-5 flex-shrink-0" />
                                    <p className="min-w-0">{data.location}</p>
                                </div>
                            )}
                            {data.lastCompany && (
                                <div className="mt-1 flex items-start gap-2">
                                    <TbSchool className="h-5 flex-shrink-0" />
                                    <p className="min-w-0">{data.lastCompany}</p>
                                </div>
                            )}
                            {data.owner?.tools && data.owner.tools.length > 0 && (
                                <div className="mt-1 flex items-start gap-2">
                                    <TbTools className="h-5 flex-shrink-0" />
                                    <p className="min-w-0">Tools: {data.owner?.tools?.join(', ')}</p>
                                </div>
                            )}
                            <p className="mt-2 text-text/70">{data.owner?.bio}</p>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>
        </div>
    );
};

export default Applicant;
