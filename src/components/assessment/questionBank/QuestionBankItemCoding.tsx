import { Question } from '@/types/question.type';
import { Avatar } from '@nextui-org/react';

type QuestionBankItemCodingProps = {
    data: Question;
};

const QuestionBankItemCoding = ({ data }: QuestionBankItemCodingProps) => {
    return (
        <div>
            <p className="lines-ellipsis font-medium">{data.content}</p>

            <div className="mt-4 flex items-center gap-2">
                <span className="text-[13px]">Created by</span>
                <Avatar
                    src="http://res.cloudinary.com/doxsstgkc/image/upload/v1714386131/goffer/ig8lpaodzrhtwzzkdaj3.jpg"
                    className="h-5 w-5"
                />
                <span>Hoang Dinh Anh Tuan</span>
                <span>10 days ago</span>
            </div>
        </div>
    );
};

export default QuestionBankItemCoding;
