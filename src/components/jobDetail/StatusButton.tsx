import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Job } from '@/types/job.type';
import { TbAlertCircle, TbArchive, TbChevronDown, TbEyeOff, TbGlobe, TbLoader } from 'react-icons/tb';
import { DialogClose } from '../plate-ui/dialog';
import { useState } from 'react';
import catchAsync from '@/utils/catchAsync';
import { updateJobService } from '@/services/jobs.service';
import classNames from 'classnames';

type StatusButtonProps = {
    job: Job;
    refetch: (params?: any) => Promise<any>;
};

const StatusButton = ({ job, refetch }: StatusButtonProps) => {
    const [opened, setOpened] = useState(false);
    const [loading, setLoading] = useState(false);

    const updateStatus = (status: 'unpublished' | 'published' | 'closed') => () =>
        catchAsync(
            async () => {
                setLoading(true);
                await updateJobService(job.id, {
                    status: status,
                });
                await refetch();
                setOpened(false);
            },
            () => {
                setLoading(false);
            },
        );

    return (
        <Dialog open={opened} onOpenChange={setOpened}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className={classNames('gap-2 shadow-none', {
                            'border-primary/50 bg-primary/10 text-orange-500 hover:bg-primary/20 hover:text-orange-600':
                                job.status === 'unpublished',
                            'border-green-500 bg-green-50 text-green-500 hover:bg-green-100 hover:text-green-500':
                                job.status === 'published',
                            'border-red-500 bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-500':
                                job.status === 'closed',
                        })}
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
                        <TbChevronDown />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DialogTrigger asChild>
                        <DropdownMenuItem disabled={job.status === 'published'} className="gap-3">
                            <TbGlobe className="text-xl" />
                            <div className="min-w-0">
                                <p className="font-semibold">Published</p>
                                <p className="text-text/70">Job is open for applications.</p>
                            </div>
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem
                        onClick={updateStatus('unpublished')}
                        disabled={job.status === 'unpublished'}
                        className="gap-3"
                    >
                        <TbEyeOff className="text-xl" />
                        <div className="min-w-0">
                            <p className="font-semibold">Unpublished</p>
                            <p className="text-text/70">Hide the vacancy. Your job cannot be found.</p>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={updateStatus('closed')}
                        disabled={job.status === 'closed'}
                        className="gap-3"
                    >
                        <TbArchive className="text-xl" />
                        <div className="min-w-0">
                            <p className="font-semibold">Closed</p>
                            <p className="text-text/70">Applications closed; no new submissions accepted.</p>
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Publish this job?</DialogTitle>
                    <DialogDescription className="mt-1">
                        Once published, your job will be visible to the public and open for applications, and you{' '}
                        <strong className="text-black">cannot change your job advanced setup!</strong>
                    </DialogDescription>
                </DialogHeader>

                <img src="/states/empty1.avif" className="h-[120px] w-full object-cover" />
                <DialogFooter>
                    <DialogClose disabled={loading} asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button disabled={loading} onClick={updateStatus('published')} variant="black">
                        {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                        Publish
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default StatusButton;
