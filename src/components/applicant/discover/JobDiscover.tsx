import classNames from 'classnames';
import JobCard from '../common/JobCard';
import JobDetail from './JobDetail';
import useDiscoverStore from 'src/stores/discoverStore';

const JobDiscover = () => {
    const jobs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const isOpenDetail = useDiscoverStore((state) => state.jobDetailOpening);
    return (
        <div>
            <div className="flex w-full max-w-screen-2xl flex-1 flex-col gap-y-4 px-6 py-8 xl:mx-auto">
                {jobs.map((job, index) => (
                    <div key={index} className={classNames(isOpenDetail ? 'w-1/2 pr-6' : 'w-full')}>
                        <JobCard />
                    </div>
                ))}
            </div>
            <JobDetail />
        </div>
    );
};

export default JobDiscover;
