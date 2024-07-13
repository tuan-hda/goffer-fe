import useListOrganizationJobs from '@/hooks/useListOrganizationJobs';
import { Organization } from '@/types/organization.type';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { JobDetail } from '@/components/jobListing';
import { Button } from '@/components/ui/button';
import numeral from 'numeral';
import { TbArrowRight } from 'react-icons/tb';

interface Props {
    org: Organization;
}

const Jobs = ({ org }: Props) => {
    const { data: jobs } = useListOrganizationJobs({ org: org.id });
    return (
        <div className="h-full px-4">
            <p className="mb-6 ml-6 mt-12 text-2xl font-semibold text-text">All jobs</p>

            {jobs?.results
                .filter((job) => job.isPublished)
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
    );
};

export default Jobs;
