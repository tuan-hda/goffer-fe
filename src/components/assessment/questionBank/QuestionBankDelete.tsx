import React, { useState } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import catchAsync from '@/utils/catchAsync';
import { deleteQuestionService } from '@/services/question.service';
import { TbLoader } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';
import { QUESTION_TYPE } from '@/types/question.type';
import useListOrgQuestions from '@/hooks/useListOrgQuestions';

type QuestionBankDeleteProps = {
    children?: React.ReactNode;
    id?: string;
    type: QUESTION_TYPE;
};

const QuestionBankDelete = ({ children, id, type }: QuestionBankDeleteProps) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { domain } = useParams();
    const { refetch } = useListOrgQuestions({ type, populate: 'author' });

    const deleteQuestion = () =>
        catchAsync(
            async () => {
                if (id) {
                    setLoading(true);
                    await deleteQuestionService(id);
                    await refetch();
                    navigate(`/app/organization/${domain}/bank`);
                }
            },
            () => {
                setLoading(false);
            },
        );

    return (
        <Dialog>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>The resource cannot be recovered once deleted.</DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex justify-end">
                    <DialogClose asChild disabled={loading}>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button onClick={deleteQuestion} disabled={loading} variant="destructive">
                        {loading && <TbLoader className="mr-2 text-xl" />}
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
            {children}
        </Dialog>
    );
};

export default QuestionBankDelete;
