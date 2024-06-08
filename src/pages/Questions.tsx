import QuestionBehavioralForm from '@/components/assessment/questionBuilder/QuestionBehavioralForm';
import { Question } from '@/components/jobDetail';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTrigger,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Image } from '@nextui-org/react';

const Questions = () => {
    return (
        <div className="flex-1 text-sm">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl">Questions</h1>
                    <p className="mt-2 text-sm text-text/70">Add question to evaluate candidates.</p>
                </div>

                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline">Add a question</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-h-[90vh] w-[600px] max-w-full overflow-y-auto">
                        <div className="">
                            <p className="text-lg font-medium">Add question</p>
                            <p className="text-sm">Create a new question and add to your library</p>
                        </div>
                        <QuestionBehavioralForm />
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction className="bg-black text-white hover:bg-opacity-90 hover:text-white">
                                Confirm
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <div>
                <p className="mb-1 mt-3 font-semibold">Your library</p>
                <div className="grid grid-cols-3 gap-4">
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                </div>
                <p className="mb-1 mt-4 font-semibold">Our templates</p>
                <div className="grid grid-cols-3 gap-4">
                    <Question />
                    <Question />
                    <Question />
                </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center p-20 text-sm">
                <Image src="/flowerlike.png" width={240} height={240} />
                <p>You have no question yet.</p>
            </div>
        </div>
    );
};

export default Questions;
