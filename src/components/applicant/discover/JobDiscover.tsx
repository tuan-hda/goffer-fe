import classNames from 'classnames';
import JobCard from '../common/JobCard';
import JobDetail from './JobDetail';
import useDiscoverStore from 'src/stores/discoverStore';

const JobDiscover = () => {
    const jobs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const isOpenDetail = useDiscoverStore((state) => state.jobDetailOpening);
    return (
        <div>
            <div
                className={classNames(
                    'flex w-full max-w-screen-xl flex-1 flex-col gap-y-8 px-4 py-8 md:px-6 xl:mx-auto',
                    isOpenDetail && 'max-w-[calc(50vw-80px)]',
                )}
            >
                {jobs.map((job, index) => (
                    <JobCard key={index} />
                ))}
            </div>
            <JobDetail />
        </div>
    );
};

export default JobDiscover;
