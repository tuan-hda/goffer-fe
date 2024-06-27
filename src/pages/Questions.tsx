import QuestionBankListBehavioral from '@/components/assessment/questionBank/QuestionBankListBehavioral';
import QuestionBehavioralForm from '@/components/assessment/questionBuilder/QuestionBehavioralForm';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTrigger,
    AlertDialogFooter,
    AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import useCreateQuestionBehavioral from '@/hooks/useCreateQuestionBehavioral';
import useGetOrganizationJob from '@/hooks/useGetOrganizationJob';
import useListOrgQuestions from '@/hooks/useListOrgQuestions';
import useNewAssessmentStore from '@/stores/newAssessmentStore';
import { Image } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { TbLoader } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

const Questions = () => {
    const { create, loading } = useCreateQuestionBehavioral(true);
    const [open, setOpen] = useState(false);
    const { list: mcq } = useListOrgQuestions({ type: 'behavioral', populate: 'author' });
    const { id } = useParams();
    const { data } = useGetOrganizationJob(id!);
    const [assessment, setAssessment] = useNewAssessmentStore(
        (state) => [state.assessment, state.setAssessment],
        shallow,
    );

    useEffect(() => {
        if (data) {
            setAssessment((state) => ({
                ...state,
                questions: data.questions,
            }));
        }
    }, [data]);

    const handleSubmit = async () => {
        await create(() => {
            setOpen(false);
        });
    };

    return (
        <div className="flex-1 text-sm">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl">Questions ({assessment.questions.size})</h1>
                    <p className="mt-2 text-sm text-text/70">Add question to evaluate candidates.</p>
                </div>

                <AlertDialog open={open} onOpenChange={setOpen}>
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
                            <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
                            <Button onClick={handleSubmit} variant="black" disabled={loading}>
                                {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                                Confirm
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <div>
                <p className="mb-1 mt-3 font-semibold">Your library</p>
                <QuestionBankListBehavioral mode="pick" />
            </div>
            {!mcq ||
                (mcq.length === 0 && (
                    <div className="flex w-full flex-col items-center justify-center p-20 text-sm">
                        <Image src="/flowerlike.png" width={240} height={240} />
                        <p>You have no question yet.</p>
                    </div>
                ))}
        </div>
    );
};

export default Questions;
