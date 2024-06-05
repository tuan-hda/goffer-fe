import MCQBasic from './MCQBasic';
import MCQChoices from './MCQChoices';
import Header from './Header';

const MCQ = () => {
    return (
        <div className="relative grid grid-cols-12 flex-col gap-x-16 gap-y-6">
            <Header title="MCQ Builder" />
            <MCQBasic />
            <div className="absolute left-1/2 mt-16 h-[calc(100%-64px)] border-r" />
            <MCQChoices />
        </div>
    );
};

export default MCQ;
