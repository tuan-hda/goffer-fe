import { Avatar } from '@nextui-org/react';
import { Card, CardContent } from '../ui/card';
import { TbHeartHandshake, TbLocation, TbMail, TbRuler, TbSchool, TbSparkles, TbTools } from 'react-icons/tb';
import { Badge } from '../ui/badge';
import classNames from 'classnames';
import { Button } from '../ui/button';
import { Experience } from '@/types/user.type';
import moment from 'moment';

type CandidateProps = {
    name?: string;
    avatar?: string;
    oneLiner?: string;
    location?: string;
    experiences: Experience[];
    tools: string[];
    skills: string[];
    bio?: string;
    match: number;
    isPro?: boolean;
    email: string;
};

const Candidate = ({
    name,
    avatar,
    oneLiner,
    location,
    experiences,
    tools,
    match,
    isPro,
    skills,
    email,
}: CandidateProps) => {
    return (
        <Card className="relative w-full cursor-pointer rounded-2xl border bg-white/100 pt-5 text-text shadow-none transition hover:shadow-small">
            <div className="absolute right-5 top-5 flex items-center gap-2">
                {isPro && (
                    <Badge className="rounded-lg bg-gradient-to-r from-[#FAE4A7] to-[#E5D4FF] text-black shadow-none">
                        PRO
                    </Badge>
                )}
                <Badge className={classNames('pointer-events-none gap-2 rounded-lg bg-black text-white shadow-none')}>
                    <TbSparkles /> {match}% match
                </Badge>
            </div>

            <CardContent className="pb-5">
                <div className="flex items-start gap-5">
                    <Avatar src={avatar} className="h-16 w-16 flex-shrink-0 rounded-2xl" />
                    <div className="flex flex-1 flex-col">
                        <p>{oneLiner}</p>
                        <p className="text-xl text-black ">{name}</p>
                        <div className="mt-1 flex items-center gap-6">
                            <div className="flex items-start gap-2 underline">
                                <TbMail className="h-5 flex-shrink-0" />
                                <p className="min-w-0">{email}</p>
                            </div>
                        </div>
                        {location && (
                            <div className="mt-1 flex items-start gap-2">
                                <TbLocation className="h-5 flex-shrink-0" />
                                <p className="min-w-0">{location}</p>
                            </div>
                        )}
                        {experiences.length > 0 && (
                            <div className="mt-1 flex items-start gap-2">
                                <TbSchool className="h-5 flex-shrink-0" />
                                <div className="min-w-0">
                                    <p>Experiences:</p>
                                    {experiences.map((exp, index) => (
                                        <p key={index}>
                                            - {exp.title} at {exp.company} ({moment(exp.startDate).format('MM/YYYY')} -{' '}
                                            {exp.endDate ? moment(exp.endDate).format('MM/YYYY') : 'Now'})
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                        {skills.length > 0 && (
                            <div className="mt-1 flex items-start gap-2">
                                <TbRuler className="h-5 flex-shrink-0" />
                                <p className="min-w-0">Skills: {skills.join(', ')}</p>
                            </div>
                        )}
                        {tools.length > 0 && (
                            <div className="mt-1 flex items-start gap-2">
                                <TbTools className="h-5 flex-shrink-0" />
                                <p className="min-w-0">Tools: {tools.join(', ')}</p>
                            </div>
                        )}

                        <div className="mt-4 flex gap-4">
                            <Button className="w-64 gap-2" variant="black">
                                Get in touch <TbHeartHandshake className="text-lg" />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Candidate;
