import { Question } from '@/types/question.type';

type QuestionBankItemCodingProps = {
    data: Question;
};

const QuestionBankItemCoding = ({ data }: QuestionBankItemCodingProps) => {
    return (
        <div>
            <p className="lines-ellipsis font-medium">{data.content}</p>
        </div>
    );
};

export default QuestionBankItemCoding;
