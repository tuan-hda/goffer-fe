import QuestionBankItem from '../questionBank/QuestionBankItem';

const AssessmentBuilderQuestionList = () => {
    return (
        <div className="grid grid-cols-3 gap-6">
            <QuestionBankItem type="mcq" />
            <QuestionBankItem type="mcq" />
            <QuestionBankItem type="mcq" />
            <QuestionBankItem type="mcq" />
        </div>
    );
};

export default AssessmentBuilderQuestionList;
