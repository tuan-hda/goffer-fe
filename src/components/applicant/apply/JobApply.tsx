import { JobDetail } from '@/components/jobListing';
import useCurrOrganizationJob from '@/hooks/useCurrOrganizationJob';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { addViewService } from '@/services/log.service';
import { useEffect } from 'react';

const JobApply = () => {
    const { data: job } = useCurrOrganizationJob();
    const { data: self } = useSelfProfileQuery();

    useEffect(() => {
        document.title = `${job?.title || 'Job Detail'} - Goffer`;
    }, [job]);

    useEffect(() => {
        if (!job) return;

        (async () => {
            try {
                await addViewService(self, job.id);
            } catch (error) {
                console.log('error create interaction', error);
            }
        })();
    }, [job]);

    return (
        <div className="mx-auto max-w-screen-md pb-10 pt-10">
            <JobDetail jobId="66417d5a704f2b002fdb489e" />
        </div>
    );
};

export default JobApply;
