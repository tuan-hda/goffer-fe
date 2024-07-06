import { TbLoader, TbUpload } from 'react-icons/tb';
import { Button } from '../ui/button';
import catchAsync from '@/utils/catchAsync';
import { useEffect, useMemo, useState } from 'react';
import { submitAnswerService } from '@/services/takeAssessment.service';
import useCurrentTakingCodingQuestion from '@/hooks/useCurrentTakingCodingQuestion';
import { useParams } from 'react-router-dom';
import useCodingStore from '@/stores/codingStore';
import useCurrTakingAssessment from '@/hooks/useCurrTakingAssessment';
import { toast } from 'sonner';
import { languageOptions } from '@/configs/languageOptions';

const CodingSubmit = () => {
    const [loading, setLoading] = useState(false);
    const { data: currentQuestion } = useCurrentTakingCodingQuestion();
    const { refetch, data: currentTaking } = useCurrTakingAssessment();
    const submissions = useCodingStore((state) => state.submissions);

    const currentWork = useMemo(() => {
        if (currentQuestion) {
            return submissions[currentQuestion.id];
        }
    }, [submissions, currentQuestion]);

    const isDisabled = useMemo(() => {
        const answer = currentTaking?.answers.find((a) => a.question.id === currentQuestion?.id);
        return answer?.content === currentWork?.code && answer?.lang === currentWork?.lang?.id;
    }, [currentTaking, currentQuestion, currentWork]);

    const submit = () =>
        catchAsync(
            async () => {
                setLoading(true);
                if (currentTaking && currentQuestion) {
                    const answer = {
                        question: currentQuestion?.id,
                        ref: currentTaking.id,
                        content: currentWork?.code || '',
                        lang: currentWork?.lang?.id || languageOptions[0].id,
                    };
                    await submitAnswerService(currentTaking.id, answer);
                    await refetch();
                }
            },
            () => {
                setLoading(false);
            },
        );

    return (
        <Button onClick={submit} disabled={loading || isDisabled} className="gap-2" variant="black">
            {loading ? <TbLoader className="animate-spin text-xl" /> : <TbUpload className="text-[15px]" />}
            Submit
        </Button>
    );
};

export default CodingSubmit;
