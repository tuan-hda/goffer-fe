import JobCard from '../common/JobCard';

const JobDiscover = () => {
    const jobs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    return (
        <div className="flex w-full max-w-screen-xl flex-1 flex-col gap-y-8 px-4 py-8 md:px-6 xl:mx-auto">
            {jobs.map((job, index) => (
                <JobCard key={index} />
            ))}
        </div>
    );
};

export default JobDiscover;
