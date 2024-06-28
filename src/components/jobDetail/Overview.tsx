import { TbClock, TbCoin, TbSchool, TbUser } from 'react-icons/tb';
import { Badge } from '../ui/badge';
import { Avatar, Image } from '@nextui-org/react';
import { PlainPlate } from '../common';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useParams } from 'react-router-dom';
import useGetOrganizationJob from '@/hooks/useGetOrganizationJob';
import { formatUTCDate } from '@/utils/time';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';

const Overview = () => {
    const { id } = useParams();
    const { data: job } = useGetOrganizationJob(id);
    const [publicLink, setPublicLink] = useState<string>('');

    useEffect(() => {
        if (job) {
            setPublicLink(`${window.location.origin}/job/${job.id}`);
        } else {
            setPublicLink('');
        }
    }, [job]);

    if (!job) {
        return null;
    }

    const copy = () => {
        window.navigator.clipboard.writeText(publicLink);
        toast.success('Link copied to clipboard');
    };

    return (
        <div className="flex w-full items-start gap-6 text-sm">
            <div className="w-full max-w-[320px] flex-shrink-0">
                <p className="text-xl">Basic</p>
                <div className="mt-2 w-full rounded-xl border bg-white/100 p-5">
                    <p className="text-sm">Slots</p>
                    <div className="mt-1 flex items-center gap-2">
                        <TbUser className="text-base" />
                        <span>0/{job.slots}</span>
                    </div>
                    <p className="mt-5 text-sm">Salary from</p>
                    <div className="mt-1 flex items-center gap-2">
                        <TbCoin className="text-base" />
                        <span>{job.salaryFrom}</span>
                    </div>
                    {job.salaryTo && (
                        <>
                            <p className="mt-5 text-sm">Salary to</p>
                            <div className="mt-1 flex items-center gap-2">
                                <TbCoin className="text-base" />
                                <span>{job.salaryTo}</span>
                            </div>
                        </>
                    )}
                    <p className="mt-5 text-sm">Working hours per week</p>
                    <div className="mt-1 flex items-center gap-2">
                        <TbClock className="text-base" />
                        <span>{job.workingHours} hours</span>
                    </div>
                    <p className="mt-5 text-sm">Experience</p>
                    <div className="mt-1 flex items-center gap-2">
                        <TbSchool className="text-base" />
                        <span>{job.experience}</span>
                    </div>
                    <p className="mt-5 text-sm">Working location</p>
                    <div className="mt-1 flex items-center gap-2">
                        <TbSchool className="text-base" />
                        <span>{job.location}</span>
                    </div>
                    <p className="mt-5 text-sm">Working time</p>
                    <div className="mt-1 flex items-center gap-2">
                        <TbSchool className="text-base" />
                        <span>{job.time}</span>
                    </div>
                    <p className="mt-5 text-sm">Skills</p>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                        {job.skills.map((skill, index) => (
                            <Badge key={index} className="bg-text text-white shadow-none">
                                <span>{skill}</span>
                            </Badge>
                        ))}
                    </div>
                    <p className="mt-5 text-sm">Tools</p>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                        {job.tools.map((skill, index) => (
                            <Badge key={index} className="bg-text text-white shadow-none">
                                <span>{skill}</span>
                            </Badge>
                        ))}
                    </div>

                    <p className="mt-5 text-sm">Owner</p>
                    <div className="mt-1 flex items-center gap-4">
                        <Avatar size="lg" src={job.owner?.avatar} />
                        <div>
                            <p className="font-semibold">{job.owner?.name}</p>
                            <p>Created {formatUTCDate(job.createdAt)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-w-0 flex-1 text-sm">
                <p className="mb-2 text-xl">Share your opportunity</p>
                <Card className="mb-6 flex flex-col items-center bg-white/100 p-6 shadow-none">
                    <Image className="h-64" src="/map.png" />
                    <p className="mt-2 text-text/70">Share your opportunity to outside world</p>
                    <div className="mt-2 flex w-full justify-center gap-2">
                        <Input className="max-w-xs flex-1" onChange={() => {}} value={publicLink} />
                        <Button variant="black" onClick={copy}>
                            Copy
                        </Button>
                    </div>
                </Card>

                <p className="mb-2 text-xl">Description</p>
                <div className="rounded-xl border bg-white/100 px-5 py-4">
                    <PlainPlate data={JSON.parse(job.description)} />
                </div>
            </div>
        </div>
    );
};

export default Overview;
