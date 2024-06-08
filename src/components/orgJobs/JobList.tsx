import useListOrganizationJobs from '@/hooks/useListOrganizationJobs';
import JobItem from './JobItem';
import useCurrOrganization from '@/hooks/useCurrOrganization';

// const mock = {
//     skills: ['2D Animator'],
//     tools: ['Figma'],
//     title: 'Senior Software Engineer',
//     description: 'abc',
//     location: 'Working from anywhere',
//     salaryFrom: '3000',
//     experience: '1-3 years',
//     slots: 3,
//     time: 'Working any time',
//     workingHours: 40,
//     orgId: '6608212874101000601bb0cb',
//     id: '660d5ce5d5b60d0295d8eb6c',
//     status: 'unpublished',
// };

const JobList = () => {
    const { data } = useCurrOrganization();
    const { data: jobs } = useListOrganizationJobs({
        org: data?.id || '',
    });

    return (
        <div className="flex h-full w-full text-text">
            {jobs && jobs.results.length > 0 ? (
                <div className="grid w-full grid-cols-2 gap-6">
                    {jobs.results.map((job) => (
                        <JobItem key={job.id} data={job} />
                    ))}
                </div>
            ) : (
                <div className="m-auto space-y-6 text-center">
                    <img src="/bottle.png" alt="bottle" className="mt-24 h-44" />
                    <p className="text-sm text-text/80">No job was created.</p>
                </div>
            )}
        </div>
    );
};

export default JobList;
