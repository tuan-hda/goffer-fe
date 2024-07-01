import useCurrOrganizationJob from '@/hooks/useCurrOrganizationJob';
import { Outlet } from 'react-router-dom';

const ForbidEditLayout = () => {
    const { data: job } = useCurrOrganizationJob();

    if (!job) {
        return null;
    }

    if (job && job.isPublished) {
        return (
            <div className="flex min-h-[300px] w-full flex-col items-center justify-center gap-6">
                <div className="bg-image-doodles h-[200px] w-full opacity-40"></div>
                <h1 className="text-xl">This job has been published once, you can't edit it anymore.</h1>
            </div>
        );
    }

    return <Outlet />;
};

export default ForbidEditLayout;
