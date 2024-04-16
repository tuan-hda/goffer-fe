import { Avatar } from '@nextui-org/react';
import { Card, CardContent } from '../ui/card';
import {
    TbBookmark,
    TbHeartHandshake,
    TbLocation,
    TbMail,
    TbPhone,
    TbSchool,
    TbSparkles,
    TbTools,
} from 'react-icons/tb';
import { Badge } from '../ui/badge';
import classNames from 'classnames';
import { Button } from '../ui/button';

type CandidateProps = {
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

const Candidate = ({
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
}: CandidateProps) => {
    return (
        <Card className="relative w-full cursor-pointer border bg-white/100 pt-5 text-text shadow-none transition hover:shadow-small">
            <div className="absolute right-5 top-5 flex items-center gap-2">
                {isPro && (
                    <Badge className="rounded-lg bg-gradient-to-r from-[#FAE4A7] to-[#E5D4FF] text-black shadow-none">
                        PRO
                    </Badge>
                )}
                <Badge
                    className={classNames(
                        'pointer-events-none gap-2 rounded-lg bg-primary/10 text-primary shadow-none',
                    )}
                >
                    <TbSparkles /> {match}% match
                </Badge>
            </div>

            <CardContent className="pb-5">
                <div className="flex items-start gap-5">
                    <Avatar src={avatarUrl} className="h-16 w-16 flex-shrink-0 rounded-lg" />
                    <div className="flex flex-1 flex-col">
                        <p>{jobTitle}</p>
                        <p className="text-xl text-black ">{name}</p>
                        <div className="mt-1 flex items-center gap-6">
                            <div className="flex items-start gap-2 underline">
                                <TbMail className="h-5 flex-shrink-0" />
                                <p className="min-w-0">{email}</p>
                            </div>
                            <div className="flex items-start gap-2 underline">
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

                        <div className="mt-4 flex gap-4">
                            <Button className="w-64 gap-2 rounded-lg" variant="black">
                                Get in touch <TbHeartHandshake className="text-lg" />
                            </Button>
                            <Button size="icon" className="rounded-lg" variant="outline">
                                <TbBookmark />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Candidate;
