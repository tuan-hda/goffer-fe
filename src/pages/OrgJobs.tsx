import { TbPlus } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { JobList } from '@/components/orgJobs';
import { Button } from '@/components/ui/button';
import useCurrOrganization from '@/hooks/useCurrOrganization';
import { OrgLayout } from '@/layouts';

const OrgJobs = () => {
    const { data } = useCurrOrganization();

    return (
        <OrgLayout>
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <h1 className="mt-4 text-2xl">Jobs</h1>
                    <div className="flex items-end pb-[5px]">
                        <p className="rounded-full bg-black px-2 py-0.5 text-xs text-white">0</p>
                    </div>
                </div>

                <Button asChild className="rounded-lg font-normal">
                    <Link to={`/app/organization/${data?.domain}/new`}>
                        <TbPlus className="-ml-1 mr-2 text-base" />
                        Set up new job
                    </Link>
                </Button>
            </div>
            <div className="mt-4 min-h-[calc(100vh-132px)] w-full">
                <JobList />
            </div>
        </OrgLayout>
    );
};

export default OrgJobs;
