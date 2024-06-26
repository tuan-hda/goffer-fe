import { Image } from '@nextui-org/react';
import { TbBookmarks, TbBoxAlignBottomFilled, TbDots, TbShare } from 'react-icons/tb';
import { Button } from '../ui/button';
import { Job } from '@/types/job.type';
import { Badge } from '../ui/badge';
import { formatUTCDate } from '@/utils/time';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '@/stores/authStore';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import classNames from 'classnames';
import { toggleSavedJob } from '@/services/interaction.service';
import useGetOrganizationJob from '@/hooks/useGetOrganizationJob';
import { toast } from 'sonner';
import { interactWithItemService } from '@/services/recommender.service';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import moment from 'moment';

type JobHeaderProps = {
    job: Job;
};

const JobHeader = ({ job }: JobHeaderProps) => {
    const navigate = useNavigate();
    const isLoggedIn = !!useAuthStore((state) => state.access);
    const { data: self } = useSelfProfileQuery();
    const { refetch } = useGetOrganizationJob(job.id);

    const onBookmark = async (e: any, id: string) => {
        e.stopPropagation();
        await toggleSavedJob(id);
        if (!job.saved) {
            await interactWithItemService(job.id, 'bookmark');
        }
        await refetch();
    };
    const onShare = () => {
        window.navigator.clipboard.writeText(job.publicLink);
        toast.success('Link copied to clipboard');
    };
    const handleApply = () => {
        if (isLoggedIn) {
            if (job.applied) navigate(`/app/job/${job.id}/pipeline`);
            else navigate(`/job/${job.id}/application`);
        } else {
            navigate(`/auth/login?redirect=/job/${job.id}/application`);
        }
    };

    return (
        <>
            <div className="flex items-center gap-2">
                <div className="flex h-fit w-fit items-center gap-4 overflow-hidden">
                    <Image src={job.org?.logo} className="h-16 w-16 rounded-3xl" />
                    <div>
                        <p className="font-semibold">{job.org?.name}</p>
                        <p>{job.org?.field}</p>
                    </div>
                </div>
                <Button variant="black" className="ml-auto gap-2" onClick={handleApply}>
                    <TbBoxAlignBottomFilled className="text-lg" /> {job.applied ? 'Applied' : 'Apply'}
                </Button>
                <Button size="icon" onClick={(e) => onBookmark(e, job.id)} variant={job.saved ? 'black' : 'outline'}>
                    <TbBookmarks className={classNames('text-lg', job.saved && 'text-white')} />
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="outline">
                            <TbDots className="text-lg" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Options</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={onShare}>
                            <TbShare className="mr-2" /> Share
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <p className="mt-4 text-3xl">{job.title}</p>

            <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />

            <div className="flex h-fit w-fit items-center gap-4 overflow-hidden">
                <Image src={self?.avatar} className="h-10 w-10 rounded-2xl" />
                <div>
                    <p className="font-light text-gray-500">You are logged in as</p>
                    <p className="font-semibold">{self?.name}</p>
                </div>

                <div className="mx-2 h-6 border-r" />
                <p className="text-[13px] font-light text-gray-500">Created {moment(job.createdAt).fromNow()}</p>
            </div>

            <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />

            <div className="grid grid-cols-3">
                <div>
                    <p className="text-[13px] text-gray-500">Experience</p>
                    <p className=" font-semibold">{job.experience}</p>
                </div>
                <div>
                    <p className="text-[13px] text-gray-500">Working hours</p>
                    <p className=" font-semibold">{job.workingHours}</p>
                </div>
                <div>
                    <p className="text-[13px] text-gray-500">Salary</p>
                    <p className=" font-semibold">
                        ${job.salaryFrom}
                        {job.salaryTo && ` - $${job.salaryTo}`}
                    </p>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-3">
                <div>
                    <p className="text-[13px] text-gray-500">Open positions</p>
                    <p className=" text-text">
                        {job.slots} vancanc{job.slots === 1 ? 'y' : 'ies'}
                    </p>
                </div>
                <div>
                    <p className="text-[13px] text-gray-500">Date line</p>
                    <p className=" text-text">30 days left</p>
                </div>
                <div>
                    <p className="text-[13px] text-gray-500">Working time</p>
                    <p className=" text-text">{job.time}</p>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-[13px] text-gray-500">Working location</p>
                <p className=" text-text">{job.location}</p>
            </div>
            <div className="mt-6">
                <p className="mb-1 text-[13px] text-gray-500">Skills & Tools</p>
                <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                        <Badge className="text-sm font-normal" variant="outline">
                            {skill}
                        </Badge>
                    ))}
                    {job.tools.map((skill) => (
                        <Badge className="text-sm font-normal" variant="outline">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        </>
    );
};

export default JobHeader;
