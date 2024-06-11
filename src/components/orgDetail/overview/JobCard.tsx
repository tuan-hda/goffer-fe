import { Job } from '@/types/job.type';
import { Button } from '@nextui-org/react';
import numeral from 'numeral';
import { TbArrowRight } from 'react-icons/tb';

interface Props {
    job: Job;
    orgName: string;
}

const JobCard = ({ job, orgName }: Props) => {
    return (
        <Button
            variant="light"
            radius="lg"
            className="mb-4 w-full justify-between px-6 py-10"
            endContent={<TbArrowRight size={20} />}
        >
            <div>
                <p className="text-start font-semibold text-text">
                    {job.title} @ {orgName}
                </p>
                <p className="text-start text-sm text-muted-foreground">
                    <span>{job.location}</span>
                    <span className="mx-2 text-lg">•</span>
                    <span>
                        ${numeral(job.salaryFrom).format('0a')} - ${numeral(job.salaryTo).format('0a')}
                    </span>
                </p>
            </div>
        </Button>
    );
};

export default JobCard;
