import { Divider } from '@nextui-org/divider';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import JobCard from '../job/JobCard';
import useJobStore from '@/stores/jobStore';
import JobDetail from '../job/JobDetail';
import JobFilter, { SearchBar } from '../filter/JobFilter';
import JobAppliedCard from '../job/JobAppliedCard';
import AppliedDetail from '../job/AppliedDetail';
import useIndividualJobs from '@/hooks/useIndividualJobs';
import { useEffect, useState } from 'react';
import { Image } from '@nextui-org/react';
import { Input } from '@/components/ui/input';
import { TbSearch } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SearchJob from './SearchJob';
import { JobList } from '@/components/orgJobs';
import VacancyList from './VacancyList';
import VacancyDetail from './VacancyDetail';
const jobsApplied = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const JobDiscover = () => {
    const { jobDetailOpening, updateJobDetailOpening, tabKey, resetDetail } = useJobStore();
    const { data } = useIndividualJobs();

    const [jobs, setJobs] = useState(data);
    useEffect(() => {
        setJobs(data);
    }, [data]);

    const onDetailOpen = (open: boolean) => {
        updateJobDetailOpening(open);
        !open && resetDetail();
    };

    return (
        <div className="mx-auto flex max-w-screen-xl flex-col text-sm">
            <SearchJob />
            <VacancyList />
            {/* <Sheet onOpenChange={onDetailOpen} open={jobDetailOpening}>
                <div className="flex w-full justify-between">
                    <div className="my-4 flex-1 space-y-4 px-8">
                        <SearchBar />
                        {tabKey === 'all' ? (
                            <>{jobs?.results?.map((job) => <JobCard key={job.id} data={job} />)}</>
                        ) : (
                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                                {jobsApplied.map((job, index) => (
                                    <JobAppliedCard key={index} />
                                ))}
                            </div>
                        )}
                    </div>
                    <Divider orientation="vertical" className="hidden md:block" />
                    <div className="sticky top-20 hidden h-[calc(100vh-96px)] max-w-xs flex-1 rounded-2xl px-8 py-4 md:block">
                        <JobFilter />
                    </div>
                </div>
                <SheetContent className="min-w-[768px] rounded-s-2xl p-0 xl:min-w-[1024px]">
                    {tabKey === 'all' ? <JobDetail /> : <AppliedDetail />}
                </SheetContent>
            </Sheet> */}
        </div>
    );
};

export default JobDiscover;
