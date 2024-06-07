import { Question } from '@/types/question.type';
import { Avatar } from '@nextui-org/react';
import moment from 'moment';

type QuestionBankItemMCQProps = {
    data: Question;
};

const QuestionBankItemMCQ = ({ data }: QuestionBankItemMCQProps) => {
    return (
        <>
            <p className="font-medium">{data.content}</p>
            <div className="mt-4 flex w-full items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
                <span className="text-[13px]">Created by</span>
                <Avatar src={data.author?.avatar} className="h-5 w-5" />
                <span>{data.author?.name}</span>
                <span>{moment(data.createdAt).fromNow()}</span>
            </div>
        </>
    );
};

export default QuestionBankItemMCQ;
