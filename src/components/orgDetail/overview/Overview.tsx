import OverviewPanel from './OverviewPanel';
import JobCard from './JobCard';

const Overview = () => {
    return (
        <div className="mx-4 flex">
            <div className="flex-1">
                <div className="mx-6">
                    <p className="mb-6 mt-12 text-2xl font-semibold text-text">Information</p>
                    <p className="text-muted-foreground">
                        After only 3 years, ClickUp is profitable and has grown to 100,000+ teams purely organically.
                        We're creating a place for anyone to work on anything. Our vision of making the world more
                        productive is just getting started.
                    </p>
                    <div className="mb-6 mt-12 flex w-full items-center justify-between">
                        <p className="text-2xl font-semibold text-text">Jobs</p>
                        <p className="cursor-pointer text-sm font-semibold text-blue-400">View all</p>
                    </div>
                </div>
                {Array(10)
                    .fill(0)
                    .map((_, index) => (
                        <JobCard key={index} />
                    ))}
            </div>
            <OverviewPanel />
        </div>
    );
};

export default Overview;
