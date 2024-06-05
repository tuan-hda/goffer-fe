import QuestionBankItem from '../questionBank/QuestionBankItem';

const AssessmentBuilderQuestionList = () => {
    return (
        <div className="grid grid-cols-3 gap-6">
            <QuestionBankItem type="mcq" mode="pick" />
            <QuestionBankItem type="mcq" mode="pick" />
            <QuestionBankItem type="mcq" mode="pick" />
            <QuestionBankItem type="mcq" mode="pick" />
        </div>
    );
};

export default AssessmentBuilderQuestionList;
