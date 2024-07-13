import OverviewPanel from './OverviewPanel';
import { Organization } from '@/types/organization.type';
import useListOrganizationJobs from '@/hooks/useListOrganizationJobs';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { JobDetail } from '@/components/jobListing';
import { Button } from '@/components/ui/button';
import numeral from 'numeral';
import { TbArrowRight } from 'react-icons/tb';
import { RefObject } from 'react';

interface Props {
    org: Organization;
    onChange?: () => void;
}

const Overview = ({ org, onChange }: Props) => {
    const { data: jobs } = useListOrganizationJobs({ org: org.id });

    return (
        <div className="mx-4 flex">
            <div className="flex-1">
                <div className="mx-6">
                    <p className="mb-6 mt-12 text-2xl font-semibold text-text">Information</p>
                    <p className="text-muted-foreground">{org.description}</p>
                    <div className="mb-6 mt-12 flex w-full items-center justify-between">
                        <p className="text-2xl font-semibold text-text">Jobs</p>
                        <p
                            onClick={() => onChange && onChange()}
                            className="cursor-pointer text-sm font-semibold text-blue-400"
                        >
                            View all
                        </p>
                    </div>
                </div>
                {jobs?.results
                    .filter((item) => item.isPublished)
                    .map((job) => (
                        <Sheet key={job.id}>
                            <SheetTrigger asChild>
                                <Button
                                    key={job.id}
                                    variant="ghost"
                                    className="mb-4 w-full justify-between rounded-2xl px-6 py-10"
                                >
                                    <div>
                                        <p className="text-start font-semibold text-text">
                                            {job.title} @ {org.name}
                                        </p>
                                        <p className="text-start text-sm text-muted-foreground">
                                            <span>{job.location}</span>
                                            <span className="mx-2 text-lg">•</span>
                                            <span>${numeral(job.salaryFrom).format('0a')}</span>
                                            {job.salaryTo && <span> - ${numeral(job.salaryTo).format('0a')}</span>}
                                        </p>
                                    </div>
                                    <TbArrowRight size={20} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="!max-w-[900px] overflow-y-auto p-8">
                                <JobDetail jobId={job.id} />
                            </SheetContent>
                        </Sheet>
                    ))}
            </div>
            <OverviewPanel data={org} />
        </div>
    );
};

export default Overview;
