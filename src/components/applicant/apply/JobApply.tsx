import { JobDetail } from '@/components/jobListing';
import { analytics } from '@/configs/firebase';
import { logEvent } from 'firebase/analytics';
import { useEffect } from 'react';

const JobApply = () => {
    useEffect(() => {
        logEvent(analytics, 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
        });
    }, []);

    return (
        <div className="mx-auto max-w-screen-md pb-10 pt-10">
            <JobDetail jobId="66417d5a704f2b002fdb489e" />
        </div>
    );
};

export default JobApply;
