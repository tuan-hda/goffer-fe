import classNames from 'classnames';
import JobCard from '../../common/JobCard';
import JobDetail from './JobDetail';
import JobFilter from '../../filter/JobFilter';
import useJobStore from '@/stores/jobStore';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const jobs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const JobDiscover = () => {
    const navigate = useNavigate();
    const { jobDetailOpening, tabKey, updateTabKey } = useJobStore();

    useEffect(() => {
        const path = location.pathname;
        const appliedPath = '/app/individual/jobs-applied';
        if (path.startsWith(appliedPath)) {
            updateTabKey('applied');
        } else {
            updateTabKey('all');
        }
    }, [location, updateTabKey]);

    return (
        <div className="flex flex-col">
            <JobFilter />
            <div className="flex w-full max-w-screen-xl flex-1 flex-col gap-y-4 p-4 xl:mx-auto">
                {jobs.map((job, index) => (
                    <div
                        key={index}
                        className={classNames('flex justify-center', jobDetailOpening ? 'w-1/2 pr-4' : 'w-full')}
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
