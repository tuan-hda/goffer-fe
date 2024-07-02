import { JobDetail } from '@/components/jobListing';
import useCurrOrganizationJob from '@/hooks/useCurrOrganizationJob';
import { useEffect } from 'react';

const JobApply = () => {
    const { data: job } = useCurrOrganizationJob();

    useEffect(() => {
        document.title = `${job?.title || 'Job Detail'} - Goffer`;
    }, [job]);

    return (
        <div className="mx-auto max-w-screen-md pb-10 pt-10">
            <JobDetail jobId="66417d5a704f2b002fdb489e" />
        </div>
    );
};

export default JobApply;
