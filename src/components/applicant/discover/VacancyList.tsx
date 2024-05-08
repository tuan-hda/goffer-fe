import { JobDetail } from '@/components/jobListing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Image } from '@nextui-org/react';
import classNames from 'classnames';
import { TbBookmarks, TbCalendar, TbMapPin } from 'react-icons/tb';

const VacancyList = () => {
    return (
        <div className="mb-10 mt-10 grid w-full flex-1 grid-cols-3 gap-6 pr-2">
            {Array(10)
                .fill(0)
                .map((_, i) => (
                    <Sheet key={i}>
                        <SheetTrigger asChild>
                            <Card
                                key={i}
                                className={classNames(
                                    'relative h-full cursor-pointer rounded-2xl border-gray-200 shadow-none transition',
                                )}
                            >
                                <CardContent className="px-6 pb-3 pt-6">
                                    <Image
                                        src="https://i0.wp.com/brandingforum.org/wp-content/uploads/2023/10/Spotify-logo-500x281-1.png?resize=500%2C281&ssl=1"
                                        className="h-full w-full object-cover"
                                        classNames={{ wrapper: 'h-16 w-16 bg-white' }}
                                    />
                                    <p className="mt-4 font-medium">Spotify</p>
                                    <p className="mt-1 text-gray-500">Senior Software Engineer</p>
                                    <p className="mt-2 text-lg font-medium">$1000 - 2000</p>
                                    <Button
                                        size="icon"
                                        onClick={(e) => e.stopPropagation()}
                                        className="absolute right-5 top-5"
                                        variant="ghost"
                                    >
                                        <TbBookmarks className="text-xl text-gray-600" />
                                    </Button>
                                </CardContent>
                                <CardFooter className="px-6 pt-0">
                                    <div className="flex w-full items-center gap-1 text-gray-500">
                                        <TbCalendar />
                                        <p className="text-[13px]">40 hrs</p>
                                        <TbMapPin className="ml-4" />
                                        <p className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[13px]">
                                            364 Cong Hoa, Ward 3, Tan Binh District, HCM City
                                        </p>
                                    </div>
                                </CardFooter>
                            </Card>
                        </SheetTrigger>
                        <SheetContent className="!max-w-[900px] overflow-y-auto p-8">
                            <JobDetail jobId="662cd4e670d3eb01cc3df5ee" />
                        </SheetContent>
                    </Sheet>
                ))}
        </div>
    );
};

export default VacancyList;
