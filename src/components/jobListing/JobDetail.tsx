import useGetOrganizationJob from '@/hooks/useGetOrganizationJob';

import { useNavigate, useParams } from 'react-router-dom';
import JobHeader from './JobHeader';
import { TbLoader } from 'react-icons/tb';
import { PlainPlate } from '../common';

type JobDetailProps = {
    jobId?: string;
};

const JobDetail = ({ jobId }: JobDetailProps) => {
    const { id } = useParams();
    const { data: job, isLoading } = useGetOrganizationJob(id || jobId);
    const navigate = useNavigate();

    if (isLoading)
        return (
            <div className="flex h-[calc(100vh-120px)] w-full">
                <TbLoader className="m-auto animate-spin text-2xl" />
            </div>
        );

    if (!job) {
        navigate('/not-found');
        return null;
    }

    return (
        <div className="w-full text-sm text-text">
            <JobHeader job={job} />

            <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />

            <p className="mb-2 text-lg font-medium">Description</p>
            <PlainPlate data={JSON.parse(job.description)} />
        </div>
    );
};

export default JobDetail;
