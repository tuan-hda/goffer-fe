import { JobDetail } from '@/components/jobListing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import useIndividualJobs from '@/hooks/useIndividualJobs';
import useJobsRecommender from '@/hooks/useJobsRecommender';
import { toggleSavedJob } from '@/services/interaction.service';
import { interactWithItemService } from '@/services/recommender.service';
import { Image } from '@nextui-org/react';
import classNames from 'classnames';
import { TbBookmarks, TbCalendar, TbMapPin } from 'react-icons/tb';

const VacancyList = () => {
    const { data, refetch, isFetching, hasNextPage, fetchNextPage } = useJobsRecommender();
    // const { data, refetch } = useIndividualJobs();

    const onBookmark = async (e: any, id: string, isSaved?: boolean) => {
        e.stopPropagation();
        await toggleSavedJob(id);
        if (!isSaved) {
            await interactWithItemService(id, 'bookmark');
        }
        await refetch();
    };

    const jobs = data?.pages.flatMap((page) => page.results) || [];
    // const jobs = data?.results ?? [];

    return (
        <>
            <div className="mb-10 mt-10 grid w-full flex-1 grid-cols-3 gap-6 pr-2">
                {jobs.map((item, i) => (
                    <Sheet key={i} onOpenChange={async (open) => !open && (await refetch())}>
                        <SheetTrigger asChild>
                            <Card
                                key={i}
                                className={classNames(
                                    'relative h-full cursor-pointer rounded-2xl border-gray-200 shadow-none transition',
                                )}
                            >
                                <CardContent className="px-6 pb-3 pt-6">
                                    <Image
                                        src={item.org?.logo}
                                        className="h-full w-full object-cover"
                                        classNames={{ wrapper: 'h-16 w-16 bg-white' }}
                                    />
                                    <p className="mt-4 font-medium">{item.org?.name}</p>
                                    <p className="mt-1 text-gray-500">{item.title}</p>
                                    <p className="mt-2 text-lg font-medium">
                                        ${item.salaryFrom} - ${item.salaryTo}
                                    </p>
                                    <Button
                                        size="icon"
                                        onClick={(e) => onBookmark(e, item.id, item.saved)}
                                        className="absolute right-5 top-5"
                                        variant={item.saved ? 'black' : 'ghost'}
                                    >
                                        <TbBookmarks
                                            className={classNames('text-xl text-gray-600', item.saved && 'text-white')}
                                        />
                                    </Button>
                                </CardContent>
                                <CardFooter className="px-6 pt-0">
                                    <div className="flex w-full items-center gap-1 text-gray-500">
                                        <TbCalendar />
                                        <p className="text-[13px]">{item.workingHours} hrs</p>
                                        <TbMapPin className="ml-4" />
                                        <p className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[13px]">
                                            {item.location}
                                        </p>
                                    </div>
                                </CardFooter>
                            </Card>
                        </SheetTrigger>
                        <SheetContent className="!max-w-[900px] overflow-y-auto p-8">
                            <JobDetail jobId={item.id} />
                        </SheetContent>
                    </Sheet>
                ))}
            </div>
            {/* <div className="mt-14 flex w-full flex-col justify-center">
                {isFetching && <p className="text-center">Loading...</p>}
                {!isFetching && hasNextPage && (
                    <Button variant="outline" className="mx-auto" onClick={() => fetchNextPage()}>
                        Load more
                    </Button>
                )}
                {!isFetching && !hasNextPage && <p className="text-center">You've reached the end of the list</p>}
            </div> */}
        </>
    );
};

export default VacancyList;
