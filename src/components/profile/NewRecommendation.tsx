import { Image } from '@nextui-org/react';
import { Button } from '../ui/button';
import { TbPlus } from 'react-icons/tb';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '../ui/alert-dialog';
import { Textarea } from '../ui/textarea';

const NewRecommendation = () => {
    return (
        <>
            <AlertDialog>
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
                    <Textarea className="mt-2 min-h-[100px]" placeholder="Write your recommendation here" />
                    <AlertDialogFooter className="mt-4 items-center">
                        <p className="mr-10 text-[13px] leading-[17px] text-black/70">
                            Leaving recommendation as Tuan Hoang Dinh Anh - Bosch
                        </p>
                        <AlertDialogCancel asChild>
                            <Button variant="outline">Cancel</Button>
                        </AlertDialogCancel>
                        <Button variant="black">Submit</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default NewRecommendation;
