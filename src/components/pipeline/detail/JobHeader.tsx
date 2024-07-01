import { Job } from '@/types/job.type';
import { Badge } from '@/components/ui/badge';

type JobHeaderProps = {
    job: Job;
};

const JobHeader = ({ job }: JobHeaderProps) => {
    return (
        <>
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
                <div className="flex flex-wrap gap-2">
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
