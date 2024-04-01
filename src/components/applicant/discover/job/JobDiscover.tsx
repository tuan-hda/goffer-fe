import classNames from 'classnames';
import JobCard from '../../common/JobCard';
import JobDetail from './JobDetail';
import JobFilter from '../../filter/JobFilter';
import useJobStore from '@/stores/jobStore';

const JobDiscover = () => {
    const jobs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const isOpenDetail = useJobStore((state) => state.jobDetailOpening);
    return (
        <div className="flex flex-col">
            <JobFilter />
            <div className="flex w-full max-w-screen-xl flex-1 flex-col gap-y-4 p-4 xl:mx-auto">
                {jobs.map((job, index) => (
                    <div
                        key={index}
                        className={classNames('flex justify-center', isOpenDetail ? 'w-1/2 pr-4' : 'w-full')}
                    >
                        <JobCard />
                    </div>
                ))}
            </div>
            <JobDetail />
        </div>
    );
};

export default JobDiscover;
