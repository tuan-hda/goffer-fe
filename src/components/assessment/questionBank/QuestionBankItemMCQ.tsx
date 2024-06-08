import { Question } from '@/types/question.type';

type QuestionBankItemMCQProps = {
    data: Question;
};

const QuestionBankItemMCQ = ({ data }: QuestionBankItemMCQProps) => {
    return (
        <div className="flex h-full flex-col">
            <p className="lines-ellipsis font-medium">{data.content}</p>
        </div>
    );
};

export default QuestionBankItemMCQ;
