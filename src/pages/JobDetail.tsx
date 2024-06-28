import { Button } from '@/components/ui/button';
import {
    TbArchive,
    TbChevronDown,
    TbClockCancel,
    TbDots,
    TbEye,
    TbEyeOff,
    TbGlobe,
    TbLoader,
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
import { Link, useNavigate, useParams } from 'react-router-dom';
import useGetOrganizationJob from '@/hooks/useGetOrganizationJob';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import JobPanels from '@/components/jobDetail/JobPanels';

const JobDetail = () => {
    const { id, domain } = useParams();
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
        navigate('/not-found');
        return null;
    }

    return (
        <div className="w-full">
            <div className="flex items-center gap-4 text-3xl">
                <h1>{job?.title}</h1>
                <Dialog>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="-mr-2 ml-auto p-2">
                            <TbDots className="text-base" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem asChild className="p-0">
                                <DialogTrigger asChild>
                                    <button
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex w-full items-center rounded px-2 py-[6px] text-sm transition duration-150 hover:bg-[#F5F5F5]"
                                    >
                                        <TbSend className="mr-2 text-base" /> Send invite
                                    </button>
                                </DialogTrigger>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to={`preview`} className="flex items-center">
                                    <TbEye className="mr-2 text-base" /> View preview
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link className="flex w-full items-center" to={`/app/organization/${domain}/${id}`}>
                                    <TbPencil className="mr-2 text-base" /> Edit basic
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    className="flex w-full items-center"
                                    to={`/app/organization/${domain}/job/${id}/questions`}
                                >
                                    <TbScooter className="mr-2 text-base" /> Edit advanced
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DialogContent className="!rounded-2xl">
                        <DialogHeader>
                            <DialogTitle>Invite this job for someone</DialogTitle>
                        </DialogHeader>
                        <div className="flex gap-2">
                            <Input className="font-normal" placeholder="Enter email" />
                            <Button variant="black">Send invite</Button>
                        </div>
                        <Textarea placeholder="Your message here (optional)" />
                        <div className="flex min-h-[140px] items-center justify-center text-sm">
                            <p>You have not invited anyone yet.</p>
                        </div>
                    </DialogContent>
                </Dialog>

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
            <JobPanels />
        </div>
    );
};

export default JobDetail;
