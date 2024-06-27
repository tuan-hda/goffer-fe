import QuestionBankEmpty from './QuestionBankEmpty';
import useListOrgQuestions from '@/hooks/useListOrgQuestions';
import QuestionBankItem from './QuestionBankItem';
import { Button } from '@/components/ui/button';

type Props = {
    mode?: 'pick' | 'normal';
};

const QuestionBankListMCQ = ({ mode = 'normal' }: Props) => {
    const {
        list: mcq,
        hasNextPage,
        isFetching,
        fetchNextPage,
    } = useListOrgQuestions({ type: 'mcq', populate: 'author' });

    return (
        <QuestionBankEmpty isEmpty={!mcq || mcq.length === 0}>
            <div className="grid grid-cols-3 gap-5">
                {mcq?.map((question) => <QuestionBankItem data={question} key={question.id} type="mcq" mode={mode} />)}
            </div>
            <div className="mt-10 flex w-full flex-col justify-center">
                {isFetching && <p className="text-center">Loading...</p>}
                {!isFetching && hasNextPage && (
                    <Button variant="outline" className="mx-auto" onClick={() => fetchNextPage()}>
                        Load more
                    </Button>
                )}
                {!isFetching && !hasNextPage && <p className="text-center">You've reached the end of the list.</p>}
            </div>
        </QuestionBankEmpty>
    );
};

export default QuestionBankListMCQ;
