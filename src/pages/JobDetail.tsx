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
import Analytics from '@/components/jobDetail/Analytics';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useGetOrganizationJob from '@/hooks/useGetOrganizationJob';

import JobPanels from '@/components/jobDetail/JobPanels';
import StatusButton from '@/components/jobDetail/StatusButton';

const JobDetail = () => {
    const { id, domain } = useParams();
    const { data: job, isLoading, refetch } = useGetOrganizationJob(id);
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
                {/* <Dialog> */}
                <DropdownMenu>
                    <DropdownMenuTrigger className="-mr-2 ml-auto p-2">
                        <TbDots className="text-base" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {/* <DropdownMenuItem asChild className="p-0">
                                <DialogTrigger asChild>
                                    <button
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex w-full items-center rounded px-2 py-[6px] text-sm transition duration-150 hover:bg-[#F5F5F5]"
                                    >
                                        <TbSend className="mr-2 text-base" /> Send invite
                                    </button>
                                </DialogTrigger>
                            </DropdownMenuItem> */}
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
                        <DropdownMenuItem disabled={job.status === 'published'}>
                            <Link
                                className="flex w-full items-center"
                                to={`/app/organization/${domain}/job/${id}/questions`}
                            >
                                <TbScooter className="mr-2 text-base" /> Edit advanced
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <StatusButton refetch={refetch} job={job} />
                {/* <DialogContent className="!rounded-2xl">
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
                    </DialogContent> */}
                {/* </Dialog> */}
            </div>
            <JobPanels />
        </div>
    );
};

export default JobDetail;
