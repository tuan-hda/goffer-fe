import QuestionBankEmpty from './QuestionBankEmpty';
import useListOrgQuestions from '@/hooks/useListOrgQuestions';
import QuestionBankItem from './QuestionBankItem';
import { Button } from '@/components/ui/button';

type Props = {
    mode?: 'pick' | 'normal';
};

const QuestionBankListCoding = ({ mode }: Props) => {
    const {
        list: coding,
        isFetching,
        hasNextPage,
        fetchNextPage,
    } = useListOrgQuestions({ type: 'coding', populate: 'author' });

    return (
        <QuestionBankEmpty isEmpty={!coding || coding.length === 0}>
            <div className="grid grid-cols-3 gap-5">
                {coding?.map((question) => (
                    <QuestionBankItem data={question} key={question.id} type="coding" mode={mode} />
                ))}
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

export default QuestionBankListCoding;
