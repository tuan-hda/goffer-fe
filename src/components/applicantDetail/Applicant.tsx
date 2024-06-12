import { Avatar } from '@nextui-org/react';
import {
    TbBrandLinkedin,
    TbChevronDown,
    TbDots,
    TbFile,
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

type ApplicantProps = {
    name: string;
    avatarUrl: string;
    jobTitle: string;
    location: string;
    experience: string;
    tools: string;
    description: string;
    match: number;
    isPro?: boolean;
    email: string;
    phone: string;
};

const Applicant = ({
    name,
    avatarUrl,
    location,
    experience,
    tools,
    description,
    match,
    isPro,
    email,
    phone,
}: ApplicantProps) => {
    return (
        <div className="flex-1">
            <div className="flex items-start gap-5">
                <Avatar src={avatarUrl} className="h-24 w-24 flex-shrink-0 rounded-3xl" />
                <div className="flex flex-1 flex-col">
                    <div className="flex items-center gap-2">
                        <p className="font-serif text-2xl font-semibold">{name}</p>
                        {isPro && (
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
                            <p className="min-w-0">{email}</p>
                        </div>
                        <div className="flex items-start gap-2 underline hover:underline">
                            <TbPhone className="h-5 flex-shrink-0 text-lg" />
                            <p className="min-w-0">{phone}</p>
                        </div>
                    </div>

                    <div className="-mb-1 mt-2 flex gap-6 pb-3">
                        <div className="flex items-center gap-2">
                            <TbFile className="text-lg" />
                            <Link to="#" className="font-medium underline">
                                Resume
                            </Link>
                            <Badge variant="outline">{match}% match</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                            <TbBrandLinkedin className="text-lg" />
                            <Link to="#" className="font-medium underline">
                                LinkedIn
                            </Link>
                        </div>
                    </div>

                    <Collapsible>
                        <CollapsibleTrigger className="flex items-center gap-2">
                            Show description <TbChevronDown className="text-base" />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <div className="mt-2 flex items-start gap-2">
                                <TbLocation className="h-5 flex-shrink-0" />
                                <p className="min-w-0">{location}</p>
                            </div>
                            <div className="mt-1 flex items-start gap-2">
                                <TbSchool className="h-5 flex-shrink-0" />
                                <p className="min-w-0">{experience}</p>
                            </div>
                            <div className="mt-1 flex items-start gap-2">
                                <TbTools className="h-5 flex-shrink-0" />
                                <p className="min-w-0">Tools: {tools}</p>
                            </div>
                            <p className="mt-2 text-text/70">{description}</p>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>
        </div>
    );
};

export default Applicant;
