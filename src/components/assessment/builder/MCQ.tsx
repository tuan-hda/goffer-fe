import MCQBasic from './MCQBasic';
import MCQChoices from './MCQChoices';

const MCQ = () => {
    return (
        <div className="relative grid grid-cols-12 flex-col gap-x-16 gap-y-6">
            <h1 className="col-span-full text-2xl">MCQ Builder</h1>
            <MCQBasic />
            <div className="absolute left-1/2 mt-16 h-[calc(100%-64px)] border-r" />
            <MCQChoices />
        </div>
    );
};

export default MCQ;
