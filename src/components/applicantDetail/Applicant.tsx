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
    jobTitle,
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
                <Avatar src={avatarUrl} className="h-16 w-16 flex-shrink-0 rounded-lg" />
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
                                <DropdownMenuItem>Activity</DropdownMenuItem>
                                <DropdownMenuItem>Notes</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="outline" size="icon">
                            <TbMail className="text-lg" />
                        </Button>
                        <Button variant="default" className="gap-2">
                            Applied <TbChevronDown />
                        </Button>
                    </div>
                    <div className="mt-1 flex items-center gap-6">
                        <div className="flex items-start gap-2 underline hover:underline">
                            <TbMail className="h-5 flex-shrink-0" />
                            <p className="min-w-0">{email}</p>
                        </div>
                        <div className="flex items-start gap-2 underline hover:underline">
                            <TbPhone className="h-5 flex-shrink-0" />
                            <p className="min-w-0">{phone}</p>
                        </div>
                    </div>
                    <div className="mt-1 flex items-start gap-2">
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
                    <div className="mt-3 flex gap-6 pb-3">
                        <div className="flex items-center gap-2">
                            <TbFile className="text-lg" />
                            <Link to="#" className="font-medium underline">
                                Resume
                            </Link>
                            <Badge>{match}% match</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                            <TbBrandLinkedin className="text-lg" />
                            <Link to="#" className="font-medium underline">
                                LinkedIn
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Applicant;
