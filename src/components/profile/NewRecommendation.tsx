import { Image } from '@nextui-org/react';
import { Button } from '../ui/button';
import { TbLoader, TbPlus } from 'react-icons/tb';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '../ui/alert-dialog';
import { Textarea } from '../ui/textarea';
import catchAsync from '@/utils/catchAsync';
import { useState } from 'react';
import { createRecommendationService } from '@/services/recommendation.service';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { toast } from 'sonner';

type Props = {
    userId: string;
};

const NewRecommendation = ({ userId }: Props) => {
    const [loading, setLoading] = useState(false);
    const { data: self } = useSelfProfileQuery();
    const [recommendation, setRecommendation] = useState('');
    const [open, setOpen] = useState(false);

    const handleSubmit = () =>
        catchAsync(
            async () => {
                setLoading(true);
                createRecommendationService({
                    content: recommendation,
                    user: userId,
                });
                toast.success('Recommendation created successfully');
                setOpen(false);
            },
            () => {
                setLoading(false);
            },
        );

    return (
        <>
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="relative flex h-32 w-full items-center justify-start overflow-hidden rounded-xl border p-7 text-left shadow-none"
                    >
                        <div className="-mt-0.5">
                            <p className="text-xl font-medium">Leave a recommendation ✨</p>
                            <p className="mt-2">
                                Let others know your experience with this person. Help them to get better opportunities.
                            </p>
                        </div>
                        <div className="absolute right-10 z-[1] flex rounded-full bg-white/60 p-4 shadow-large">
                            <TbPlus className="text-3xl" />
                        </div>
                        <div className="absolute -right-10 top-4 z-0">
                            <Image
                                src="/flower.png"
                                classNames={{
                                    wrapper: 'w-48 h-48',
                                }}
                            />
                        </div>
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="gap-1">
                    <AlertDialogTitle>Leave a recommendation ✨</AlertDialogTitle>
                    <Textarea
                        value={recommendation}
                        onChange={(e) => setRecommendation(e.target.value)}
                        className="mt-2 min-h-[100px]"
                        placeholder="Write your recommendation here"
                    />
                    <AlertDialogFooter className="mt-4 items-center">
                        <p className="mr-10 w-full text-[13px] leading-[17px] text-black/70">
                            Leaving recommendation as {self?.name}
                        </p>
                        <AlertDialogCancel asChild disabled={loading}>
                            <Button variant="outline">Cancel</Button>
                        </AlertDialogCancel>
                        <Button onClick={handleSubmit} variant="black" disabled={loading}>
                            {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                            Submit
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default NewRecommendation;
