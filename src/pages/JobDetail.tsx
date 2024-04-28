import { Feedbacks, Insights, Overview, SendInviteModal, Sourcing } from '@/components/jobDetail';
import { Button } from '@/components/ui/button';
import { Tab, Tabs } from '@nextui-org/react';
import {
    TbArchive,
    TbChevronDown,
    TbClockCancel,
    TbCloudStorm,
    TbDots,
    TbEye,
    TbEyeOff,
    TbGlobe,
    TbLoader,
    TbPencil,
    TbScooter,
    TbShare,
} from 'react-icons/tb';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Analytics from '@/components/jobDetail/Analytics';
import { useNavigate, useParams } from 'react-router-dom';
import useGetOrganizationJob from '@/hooks/useGetOrganizationJob';

const JobDetail = () => {
    const { id } = useParams();
    const { data: job, isLoading } = useGetOrganizationJob(id);
    const navigate = useNavigate();

    if (isLoading) {
        return (
            <div className="flex h-[calc(100vh-240px)] w-full items-center justify-center">
                <TbLoader className="animate-spin text-xl" />
            </div>
        );
    }

    if (!job) {
        return navigate('/not-found');
    }

    return (
        <div className="w-full">
            <div className="flex items-center gap-4 text-3xl">
                <h1>{job?.title}</h1>
                <DropdownMenu>
                    <DropdownMenuTrigger className="ml-auto">
                        <TbDots className="text-base" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem asChild>
                            <SendInviteModal />
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <TbEye className="mr-2 text-base" /> View preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <TbPencil className="mr-2 text-base" /> Edit basic
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <TbScooter className="mr-2 text-base" /> Edit questions
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <TbCloudStorm className="mr-2 text-base" /> Custom feedback
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button size="icon" variant="ghost">
                                <TbShare className="text-lg" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Share link</TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className="gap-2 border-primary/50 bg-primary/10 text-orange-600 shadow-none hover:bg-primary/20 hover:text-orange-600"
                        >
                            {job.status === 'published' && (
                                <>
                                    <TbGlobe />
                                    <span>Published</span>
                                </>
                            )}
                            {job.status === 'unpublished' && (
                                <>
                                    <TbEyeOff />
                                    <span>Unpublished</span>
                                </>
                            )}
                            {job.status === 'closed' && (
                                <>
                                    <TbArchive />
                                    <span>Closed</span>
                                </>
                            )}
                            {job.status === 'expired' && (
                                <>
                                    <TbClockCancel className="text-xl" />
                                    <span>Expired</span>
                                </>
                            )}
                            <TbChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className="gap-3">
                            <TbGlobe className="text-xl" />
                            <div className="min-w-0">
                                <p className="font-semibold">Published</p>
                                <p className="text-text/70">Job is open for applications.</p>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-3">
                            <TbEyeOff className="text-xl" />
                            <div className="min-w-0">
                                <p className="font-semibold">Unpublished</p>
                                <p className="text-text/70">Currently hidden, available after you finish all steps.</p>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-3">
                            <TbArchive className="text-xl" />
                            <div className="min-w-0">
                                <p className="font-semibold">Closed</p>
                                <p className="text-text/70">Applications closed; no new submissions accepted.</p>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-3">
                            <TbClockCancel className="text-xl" />
                            <div className="min-w-0">
                                <p className="font-semibold">Expired</p>
                                <p className="text-text/70">
                                    Posting has expired; no longer accepting new applications.
                                </p>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="-mx-[6px] w-[calc(100%+12px)]">
                <Tabs aria-label="Options" className="-ml-2 mt-2" variant="underlined">
                    <Tab key="overview" title="Overview">
                        <Overview />
                    </Tab>
                    <Tab key="sourcing" title="Sourcing">
                        <Sourcing />
                    </Tab>
                    <Tab key="insights" title="Insights">
                        <Insights />
                    </Tab>
                    <Tab key="analytics" title="Analytics">
                        <Analytics />
                    </Tab>
                    <Tab key="feedbacks" title="Feedbacks">
                        <Feedbacks />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default JobDetail;
