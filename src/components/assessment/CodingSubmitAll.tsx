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
import { useState } from 'react';
import { Button } from '../ui/button';
import { TbLoader, TbUpload } from 'react-icons/tb';
import catchAsync from '@/utils/catchAsync';
import { submitAllService } from '@/services/takeAssessment.service';
import useCurrTakingAssessment from '@/hooks/useCurrTakingAssessment';

const CodingSubmitAll = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const { data: taking, refetch } = useCurrTakingAssessment();

    const submitAll = () =>
        catchAsync(
            async () => {
                if (!taking) return;
                setLoading(true);
                await submitAllService(taking.id);
                await refetch();
                setOpen(false);
            },
            () => {
                setLoading(false);
            },
        );

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="gap-2 text-black" variant="outline">
                    <TbUpload className="text-[15px]" />
                    Submit & finish test
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Submit this assessment?</DialogTitle>
                    <DialogDescription>
                        Once submit you can't change your answer. Are you sure you want to submit this assessment?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose disabled={loading} asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button onClick={submitAll} disabled={loading} variant="black">
                        {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                        Summit assessment
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CodingSubmitAll;
