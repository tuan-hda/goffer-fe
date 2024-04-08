import JobItem from './JobItem';

const mock = {
    skills: ['2D Animator'],
    tools: ['Figma'],
    title: 'Senior Software Engineer',
    description: 'abc',
    location: 'Working from anywhere',
    salaryFrom: '3000',
    experience: '1-3 years',
    slots: 3,
    time: 'Working any time',
    workingHours: 40,
    orgId: '6608212874101000601bb0cb',
    id: '660d5ce5d5b60d0295d8eb6c',
    status: 'unpublished',
};

const JobList = () => {
    const jobs = [1];

    return (
        <div className="flex h-full w-full text-text">
            {jobs && jobs.length > 0 ? (
                <div className="grid w-full grid-cols-2 gap-6">
                    <JobItem data={mock} />
                    <JobItem data={{ ...mock, status: 'published' }} />
                    <JobItem data={{ ...mock, status: 'closed' }} />
                    <JobItem data={{ ...mock, status: 'expired' }} />
                    <JobItem data={mock} />
                    <JobItem data={mock} />
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
