import { Suggestion } from '@/types/user.type';
import { TbCircleCheck, TbCircleX } from 'react-icons/tb';

type EvaluationListProps = {
    suggestion?: Suggestion;
};

const EvaluationList = ({ suggestion }: EvaluationListProps) => {
    if (!suggestion) {
        return null;
    }

    return (
        <div className="space-y-2">
            {suggestion.pros?.map((pro, index) => (
                <div key={index} className="flex gap-2">
                    <TbCircleCheck className="mt-[1px] text-lg text-green-500" />
                    <span
                        className="min-w-0 flex-1"
                        dangerouslySetInnerHTML={{
                            __html: pro,
                        }}
                    ></span>
                </div>
            ))}
            {suggestion.cons?.map((con, index) => (
                <div key={index} className="flex gap-2">
                    <TbCircleX className="text-lg text-red-500" />
                    <span
                        className="min-w-0 flex-1"
                        dangerouslySetInnerHTML={{
                            __html: con,
                        }}
                    ></span>
                </div>
            ))}
        </div>
    );
};

export default EvaluationList;
