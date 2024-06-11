import OverviewPanel from './OverviewPanel';
import JobCard from './JobCard';
import { Organization } from '@/types/organization.type';
import useListOrganizationJobs from '@/hooks/useListOrganizationJobs';

interface Props {
    org: Organization;
}

const Overview = ({ org }: Props) => {
    const { data: jobs } = useListOrganizationJobs({ org: org.id });

    return (
        <div className="mx-4 flex">
            <div className="flex-1">
                <div className="mx-6">
                    <p className="mb-6 mt-12 text-2xl font-semibold text-text">Information</p>
                    <p className="text-muted-foreground">{org.description}</p>
                    <div className="mb-6 mt-12 flex w-full items-center justify-between">
                        <p className="text-2xl font-semibold text-text">Jobs</p>
                        <p className="cursor-pointer text-sm font-semibold text-blue-400">View all</p>
                    </div>
                </div>
                {jobs?.results.map((job) => <JobCard key={job.id} job={job} orgName={org.name} />)}
            </div>
            <OverviewPanel data={org.members} />
        </div>
    );
};

export default Overview;
