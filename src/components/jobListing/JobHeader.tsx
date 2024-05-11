import { Image } from '@nextui-org/react';
import { TbBookmarks, TbBoxAlignBottomFilled, TbShare } from 'react-icons/tb';
import { Button } from '../ui/button';
import { Job } from '@/types/job.type';
import { Badge } from '../ui/badge';
import { formatUTCDate } from '@/utils/time';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '@/stores/authStore';

type JobHeaderProps = {
    job: Job;
};

const JobHeader = ({ job }: JobHeaderProps) => {
    const navigate = useNavigate();
    const isLoggedIn = !!useAuthStore((state) => state.access);

    const handleApply = () => {
        if (isLoggedIn) {
            navigate(`/job/${job.id}/application`);
        } else {
            navigate(`/auth/login?redirect=/job/${job.id}/application`);
        }
    };

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
                <Button variant="black" className="ml-auto gap-2" onClick={handleApply}>
                    <TbBoxAlignBottomFilled className="text-lg" /> Apply
                </Button>
                <Button size="icon" variant="outline">
                    <TbBookmarks className="text-lg" />
                </Button>
                <Button size="icon" variant="outline">
                    <TbShare className="text-lg" />
                </Button>
            </div>

            <p className="mt-4 text-3xl">{job.title}</p>

            <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />

            <div className="flex h-fit w-fit items-center gap-4 overflow-hidden">
                <Image src={job?.owner?.avatar} className="h-10 w-10 rounded-2xl" />
                <p className="font-semibold">{job.owner?.name}</p>
                <div className="mx-2 h-6 border-r" />
                <p className="text-[13px] font-light text-gray-500">{formatUTCDate(job.createdAt)}</p>
            </div>

            <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />

            <div className="grid grid-cols-3">
                <div>
                    <p className="text-[13px] text-gray-500">Experience</p>
                    <p className=" font-semibold">{job.experience}</p>
                </div>
                <div>
                    <p className="text-[13px] text-gray-500">Working hours</p>
                    <p className=" font-semibold">{job.workingHours}</p>
                </div>
                <div>
                    <p className="text-[13px] text-gray-500">Salary</p>
                    <p className=" font-semibold">
                        ${job.salaryFrom}
                        {job.salaryTo && ` - $${job.salaryTo}`}
                    </p>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-3">
                <div>
                    <p className="text-[13px] text-gray-500">Open positions</p>
                    <p className=" text-text">{job.slots} vacancies</p>
                </div>
                <div>
                    <p className="text-[13px] text-gray-500">Date line</p>
                    <p className=" text-text">30 days left</p>
                </div>
                <div>
                    <p className="text-[13px] text-gray-500">Working time</p>
                    <p className=" text-text">{job.time}</p>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-[13px] text-gray-500">Working location</p>
                <p className=" text-text">{job.location}</p>
            </div>
            <div className="mt-6">
                <p className="mb-1 text-[13px] text-gray-500">Skills & Tools</p>
                <div className="space-x-2">
                    {job.skills.map((skill) => (
                        <Badge className="text-sm font-normal" variant="outline">
                            {skill}
                        </Badge>
                    ))}
                    {job.tools.map((skill) => (
                        <Badge className="text-sm font-normal" variant="outline">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        </>
    );
};

export default JobHeader;
