import QuestionBankEmpty from './QuestionBankEmpty';
import useListOrgQuestions from '@/hooks/useListOrgQuestions';
import QuestionBankItem from './QuestionBankItem';

type Props = {
    mode?: 'pick' | 'normal';
};

const QuestionBankListBehavioral = ({ mode = 'normal' }: Props) => {
    const { data: mcq } = useListOrgQuestions({ type: 'behavioral', populate: 'author' });

    return (
        <QuestionBankEmpty isEmpty={!mcq || mcq.results.length === 0}>
            <div className="grid grid-cols-3 gap-5">
                {mcq?.results.map((question) => (
                    <QuestionBankItem data={question} key={question.id} type="behavioral" mode={mode} />
                ))}
            </div>
        </QuestionBankEmpty>
    );
};

export default QuestionBankListBehavioral;
