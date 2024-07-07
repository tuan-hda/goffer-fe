import useListApplications from '@/hooks/useListApplications';
import ApplicationItem from './ApplicationItem';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';

const ApplicationList = () => {
    const { data: self } = useSelfProfileQuery();
    const { data: applications } = useListApplications({
        owner: self?.id,
        phase: 'all',
        sortBy: 'createdAt:desc',
    });

    if (!applications) return null;

    if (!applications.results || applications.results.length === 0)
        return <h1 className="text-2xl">You have {applications?.results.length} applications</h1>;

    return (
        <div className="w-full">
            <h1 className="text-2xl">You have {applications?.results.length} applications</h1>
            <div className="mt-4 grid w-full grid-cols-2 gap-6">
                {applications.results.map((application) => (
                    <ApplicationItem data={application} key={application.id} />
                ))}
            </div>
        </div>
    );
};

export default ApplicationList;
