import { Divider } from '@nextui-org/divider';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import JobCard from '../job/JobCard';
import useJobStore from '@/stores/jobStore';
import JobDetail from '../job/JobDetail';
import JobFilter, { SearchBar } from '../filter/JobFilter';
import JobAppliedCard from '../job/JobAppliedCard';
import AppliedDetail from '../job/AppliedDetail';
const jobs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const jobsApplied = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const JobDiscover = () => {
    const { jobDetailOpening, updateJobDetailOpening, tabKey, updateTabKey } = useJobStore();

    return (
        <div className="mx-auto flex max-w-screen-xl">
            <Sheet onOpenChange={(open) => updateJobDetailOpening(open)} open={jobDetailOpening}>
                <div className="flex w-full justify-between">
                    <div className="my-4 flex-1 space-y-4 px-8">
                        <SearchBar />
                        {tabKey === 'all' ? (
                            <>
                                {jobs.map((job, index) => (
                                    <JobCard key={index} />
                                ))}
                            </>
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
            </Sheet>
        </div>
    );
};

export default JobDiscover;
