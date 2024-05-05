import { Image } from '@nextui-org/react';
import { TbBoxAlignBottomFilled, TbHeart, TbShare } from 'react-icons/tb';
import { Button } from '../ui/button';
import { Job } from '@/types/job.type';
import { Badge } from '../ui/badge';
import { formatUTCDate } from '@/utils/time';

type JobHeaderProps = {
    job: Job;
};

const JobHeader = ({ job }: JobHeaderProps) => {
    return (
        <>
            <div className="flex items-center gap-2">
                <div className="flex h-fit w-fit items-center gap-4 overflow-hidden">
                    <Image src={job.org.logo} className="h-16 w-16 rounded-3xl" />
                    <div>
                        <p className="font-semibold">{job.org.name}</p>
                        <p>{job.org.field}</p>
                    </div>
                </div>
                <Button variant="black" className="ml-auto gap-2">
                    <TbBoxAlignBottomFilled className="text-lg" /> Apply
                </Button>
                <Button size="icon" variant="outline">
                    <TbHeart className="text-lg" />
                </Button>
                <Button size="icon" variant="outline">
                    <TbShare className="text-lg" />
                </Button>
            </div>

            <p className="mt-4 text-3xl">{job.title}</p>

            <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />

            <div className="flex h-fit w-fit items-center gap-4 overflow-hidden">
                <Image src={job?.owner.avatar} className="h-10 w-10 rounded-2xl" />
                <p className="font-semibold">{job.owner.name}</p>
                <div className="mx-2 h-6 border-r" />
                <p className="font-light text-gray-500">{formatUTCDate(job.createdAt)}</p>
            </div>

            <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />

            <div className="grid grid-cols-3">
                <div>
                    <p className="text-gray-500">Experience</p>
                    <p className="text-base font-semibold">{job.experience}</p>
                </div>
                <div>
                    <p className="text-gray-500">Working hours</p>
                    <p className="text-base font-semibold">{job.workingHours}</p>
                </div>
                <div>
                    <p className="text-gray-500">Salary</p>
                    <p className="text-base font-semibold">
                        ${job.salaryFrom}
                        {job.salaryTo && ` - $${job.salaryTo}`}
                    </p>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-gray-500">Working location</p>
                <p className="text-base text-text">{job.location}</p>
            </div>
            <div className="mt-6">
                <p className="text-gray-500">Working time</p>
                <p className="text-base text-text">{job.time}</p>
            </div>
            <div className="mt-6">
                <p className="mb-1 text-gray-500">Skills & Tools</p>
                <div className="space-x-2">
                    {job.skills.map((skill) => (
                        <Badge className="text-sm" variant="outline">
                            {skill}
                        </Badge>
                    ))}
                    {job.tools.map((skill) => (
                        <Badge className="text-sm" variant="outline">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        </>
    );
};

export default JobHeader;
