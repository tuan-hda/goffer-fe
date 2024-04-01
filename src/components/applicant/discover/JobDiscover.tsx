import classNames from 'classnames';
import JobCard from '../common/JobCard';
import JobDetail from './JobDetail';
import useDiscoverStore from '@/stores/discoverStore';

const JobDiscover = () => {
    const jobs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const isOpenDetail = useDiscoverStore((state) => state.jobDetailOpening);
    return (
        <div>
            <div className="flex max-w-screen-xl flex-1 flex-col gap-y-4 p-4 xl:mx-auto">
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
