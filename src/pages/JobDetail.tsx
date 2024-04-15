import { Insights, Overview, Sourcing } from '@/components/jobDetail';
import { Button } from '@/components/ui/button';
import { OrgDetailLayout, OrgLayout } from '@/layouts';
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
    TbPencil,
    TbScooter,
    TbSend,
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

const JobDetail = () => {
    return (
        <div className="w-full">
            <div className="flex items-center gap-4 text-3xl">
                <h1>Senior Software Engineer</h1>
                <DropdownMenu>
                    <DropdownMenuTrigger className="ml-auto">
                        <TbDots className="text-base" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <TbSend className="mr-2 text-base" /> Send invite
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
                            className="gap-2 rounded-lg border-primary/50 bg-primary/10 text-orange-600 shadow-none hover:bg-primary/20 hover:text-orange-600"
                        >
                            <TbEyeOff />
                            <span>Unpublished</span>
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
                <Tabs aria-label="Options" className="-ml-2" variant="underlined">
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
                </Tabs>
            </div>
        </div>
    );
};

export default JobDetail;
