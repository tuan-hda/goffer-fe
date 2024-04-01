import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbBaguette, TbPlus } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { JobList } from '@/components/orgJobs';
import { Button } from '@/components/ui/button';
import useCurrOrganization from '@/hooks/useCurrOrganization';

const OrgJobs = () => {
    const { data } = useCurrOrganization();

    return (
        <div className="flex min-h-screen w-full flex-col bg-pale p-5 text-text">
            <div className="mt-[6px] flex items-center gap-1 text-sm">
                <Breadcrumbs>
                    <BreadcrumbItem>
                        <TbBaguette className="text-lg" /> Jobs
                    </BreadcrumbItem>
                </Breadcrumbs>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <h1 className="mt-4 text-2xl">Jobs</h1>
                    <div className="flex items-end pb-[5px]">
                        <p className="rounded-full bg-black px-2 py-0.5 text-xs text-white">0</p>
                    </div>
                </div>

                <Button asChild className="rounded-xl font-normal">
                    <Link to={`/app/organization/${data?.domain}/new`}>
                        <TbPlus className="-ml-1 mr-2 text-base" />
                        Set up new job
                    </Link>
                </Button>
            </div>
            <div className="mt-4 min-h-[calc(100vh-132px)] w-full">
                <JobList />
            </div>
        </div>
    );
};

export default OrgJobs;
