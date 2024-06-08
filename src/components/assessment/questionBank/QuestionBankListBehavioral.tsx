import QuestionBankEmpty from './QuestionBankEmpty';
import useListOrgQuestions from '@/hooks/useListOrgQuestions';
import QuestionBankItem from './QuestionBankItem';

const QuestionBankListBehavioral = () => {
    const { data: mcq } = useListOrgQuestions({ type: 'behavioral', populate: 'author' });

    return (
        <QuestionBankEmpty isEmpty={!mcq || mcq.results.length === 0}>
            <div className="grid grid-cols-3 gap-5">
                {mcq?.results.map((question) => (
                    <QuestionBankItem data={question} key={question.id} type="behavioral" />
                ))}
            </div>
        </QuestionBankEmpty>
    );
};

export default QuestionBankListBehavioral;
