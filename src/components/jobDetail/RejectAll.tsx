import { useSearchParams } from 'react-router-dom';
import { Button } from '../ui/button';
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
import useCountApplicationsByPhases from '@/hooks/useCountApplicationsByPhases';
import { useState } from 'react';
import catchAsync from '@/utils/catchAsync';
import { TbLoader } from 'react-icons/tb';
import { rejectAllService } from '@/services/apply.service';
import useRefetchInsights from '@/hooks/useRefetchInsights';

type RejectAllProps = {
    jobId: string;
};

const RejectAll = ({ jobId }: RejectAllProps) => {
    const [opened, setOpened] = useState(false);
    const [loading, setLoading] = useState(false);

    const [searchParams] = useSearchParams();
    const phase = searchParams.get('phase') || '';
    const { refetch } = useRefetchInsights();
    const { data } = useCountApplicationsByPhases({
        job: jobId,
    });

    const currCount = data?.find((item) => item._id === phase)?.count || 0;

    const rejectAll = () =>
        catchAsync(
            async () => {
                setLoading(true);
                await rejectAllService(jobId, phase);
                await refetch();
                setOpened(false);
            },
            () => {
                setLoading(false);
            },
        );

    return (
        <div className="flex items-center justify-end py-4 pr-5">
            <Dialog open={opened} onOpenChange={setOpened}>
                <DialogTrigger asChild>
                    <Button disabled={phase === 'rejected' || !currCount} variant="destructive">
                        Reject all
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Reject all candidates of phase {phase}</DialogTitle>
                    </DialogHeader>
                    <p className="text-sm">
                        Are you sure you want to reject all {currCount} candidates in phase {phase}
                    </p>
                    <DialogFooter>
                        <DialogClose>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button onClick={rejectAll} disabled={loading} type="button" variant="destructive">
                            {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                            Reject all
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default RejectAll;
