import { JobDetail } from '@/components/jobListing';
import { Button } from '@/components/ui/button';
import useGetOrganizationJob from '@/hooks/useGetOrganizationJob';
import useDiscoverStore from '@/stores/discoverStore';
import classNames from 'classnames';
import { TbSTurnLeft } from 'react-icons/tb';
import { Link, useParams } from 'react-router-dom';

const PreviewJob = () => {
    const { sideBarPinned } = useDiscoverStore();
    const { id, domain } = useParams();
    const { data: job } = useGetOrganizationJob(id);

    return (
        <div className="w-full text-sm">
            <div
                className={classNames(
                    'fixed top-0 z-[11] flex items-center justify-between bg-violet-200 p-4',
                    !sideBarPinned ? 'left-[67px]' : 'left-[280px]',
                )}
                style={{
                    width: `calc(100vw - ${sideBarPinned ? '280px' : '67px'})`,
                }}
            >
                <span className="flex-1">{job?.title} (preview) - This is the preview of how job will look like</span>
                <Button variant="black" asChild>
                    <Link to={`/app/organization/${domain}/job/${id}`} className="flex items-center gap-2">
                        <TbSTurnLeft /> Return
                    </Link>
                </Button>
            </div>
            <div className="h-[48px]" />
            <div>
                <JobDetail mode="all" />
            </div>
        </div>
    );
};

export default PreviewJob;
