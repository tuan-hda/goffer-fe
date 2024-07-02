import {
    TbAlertCircle,
    TbArchive,
    TbBaguette,
    TbCoin,
    TbDots,
    TbLocation,
    TbPaperclip,
    TbPencil,
    TbShare,
    TbTrash,
    TbUser,
} from 'react-icons/tb';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Job } from '@/types/job.type';
import { Badge } from '../ui/badge';
import classNames from 'classnames';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar } from '@nextui-org/react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { formatUTCDate } from '@/utils/time';
import { toast } from 'sonner';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';

type JobItemProps = {
    data: Job;
};

const iconMap = {
    unpublished: TbPencil,
    published: TbPaperclip,
    closed: TbTrash,
    expired: TbAlertCircle,
};

type IconsProps = {
    status: string;
};

const Icon = ({ status }: IconsProps) => {
    const El = iconMap[status as keyof typeof iconMap];
    return <El className="mr-1" />;
};

const JobItem = ({ data }: JobItemProps) => {
    const navigate = useNavigate();
    const { domain } = useParams();

    const copyLink = async () => {
        await navigator.clipboard.writeText(`http://localhost:3000/job/${data.id}`);
        toast.success('Link copied to clipboard');
    };

    return (
        <Card className="bg-white/100 text-sm shadow-none transition hover:shadow-small">
            <CardHeader className="pb-0 pt-4">
                <CardTitle className="text-lg font-medium">
                    <Link to={`/app/organization/${domain}/job/${data.id}`}>{data.title}</Link>
                </CardTitle>
            </CardHeader>
            <CardContent className="pb-4 pt-2 text-text/80">
                <div className="flex items-center">
                    <TbLocation className="flex-shrink-0" />
                    <p className="ml-2 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">{data.location}</p>
                </div>
                <div className="flex gap-6">
                    <div className="mt-2 flex items-center">
                        <TbBaguette className="flex-shrink-0" />
                        <p className="ml-2 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                            {data.workingHours} hours/week
                        </p>
                    </div>
                    <div className="mt-2 flex items-center">
                        <TbCoin className="flex-shrink-0 text-base" />
                        <p className="ml-2 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                            {data.salaryFrom} {data.salaryTo && `- ${data.salaryTo}`}
                        </p>
                    </div>
                </div>
                <div className="mt-2 flex items-center">
                    <TbUser className="flex-shrink-0" />
                    <p className="ml-2 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">3/{data.slots} slots</p>
                </div>

                <p className="mt-7 flex items-center">
                    Created by
                    <span className="mx-2 flex text-black">
                        <Avatar src={data.owner?.avatar} className="h-5 w-5" />
                        <span className="-mr-1 ml-1">{data.owner?.name}</span>
                    </span>
                    {formatUTCDate(data.createdAt)}
                </p>
            </CardContent>
            <CardFooter className="border-t py-3 font-semibold">
                <Badge
                    className={classNames(
                        {
                            'bg-gray-100 text-gray-600': data.status === 'unpublished',
                            'bg-blue-100 text-blue-500': data.status === 'published',
                            'bg-red-100 text-red-500': data.status === 'closed',
                        },
                        'rounded-lg font-normal shadow-none',
                    )}
                >
                    <Icon status={data.status} />
                    {data.status[0].toUpperCase() + data.status.slice(1)}
                </Badge>

                <button className="ml-auto text-gray-400">Applicants (0)</button>

                <Dialog>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="ml-3 rounded-xl p-2">
                            <TbDots />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent onClick={(e) => e.stopPropagation()}>
                            <DropdownMenuItem
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`job/${data.id}`);
                                }}
                            >
                                <TbPencil className="mr-2 text-base" /> Edit
                            </DropdownMenuItem>
                            {data.status === 'published' && (
                                <DropdownMenuItem
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        copyLink();
                                    }}
                                >
                                    <TbShare className="mr-2 text-base" /> Share
                                </DropdownMenuItem>
                            )}
                            <DropdownMenuItem asChild onClick={(e) => e.stopPropagation()}>
                                <DialogTrigger className="w-full">
                                    <TbArchive className="mr-2 text-base" /> Archive
                                </DialogTrigger>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>The candidate cannot apply for this job anymore.</DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="outline">
                                    Close
                                </Button>
                            </DialogClose>
                            <Button variant="destructive">Archive</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
    );
};

export default JobItem;
