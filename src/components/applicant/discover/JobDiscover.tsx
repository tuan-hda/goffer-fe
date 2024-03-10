import JobCard from '../common/JobCard';

const JobDiscover = () => {
    const jobs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    return (
        <div className="py-8 mx-4 md:mx-6 2xl:mx-auto flex flex-col gap-y-8">
            {jobs.map((job, index) => (
                <JobCard key={index} />
            ))}
        </div>
  )
}

export default JobDiscover