import { Answer } from '@/types/answer.type';
import { Badge } from '../ui/badge';
import useListEvaluations from '@/hooks/useListEvaluations';
import { Avatar } from '@nextui-org/react';
import moment from 'moment';
import emojis from '@/data/emojis';

type BadgeProps = {
    answer?: Answer;
};

const AnswerEvaluation = ({ answer }: BadgeProps) => {
    const { data } = useListEvaluations({
        answer: answer?.id,
    });

    const formatSeconds = (seconds: number) => {
        let result = '';
        if (seconds >= 60) {
            result += Math.floor(seconds / 60) < 10 ? `0${Math.floor(seconds / 60)}:` : `${Math.floor(seconds / 60)}:`;
        } else {
            result += '00:';
        }
        result += Math.floor(seconds % 60) < 10 ? `0${Math.floor(seconds % 60)}` : Math.floor(seconds % 60);
        return result;
    };

    const avg = (data?.reduce((acc, curr) => acc + curr.score, 0) || 0) / (data?.length || 1);

    return (
        <>
            <div className="mt-3 flex items-center gap-2">
                <p className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-serif text-lg font-semibold text-black">
                    {answer?.question.content}
                </p>
                <Badge className="ml-auto bg-gray-100 font-normal text-text/70 shadow-none">
                    {Math.round(avg * 10) / 10}
                </Badge>
            </div>
            {data?.map((evaluation, index) => (
                <div key={index} className="relative flex items-center gap-4 text-sm">
                    <Avatar radius="md" size="sm" src={evaluation.owner?.avatar} />
                    <p className="absolute -top-2 left-5 text-lg">{emojis.at(evaluation.score - 1)}</p>
                    <p className="text-text/80">evaluated at {formatSeconds(evaluation.timestamp || 0)}</p>
                    <p className="ml-auto text-text/80">{moment(evaluation.updatedAt).fromNow()}</p>
                </div>
            ))}
        </>
    );
};

export default AnswerEvaluation;
