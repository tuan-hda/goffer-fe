import JobItem from './JobItem';

const JobList = () => {
    const jobs = [1];

    return (
        <div className="flex h-full w-full text-text">
            {jobs && jobs.length > 0 ? (
                <div className="grid grid-cols-3 gap-6">
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
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
