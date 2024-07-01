import { Suggestion as SuggestionType } from '@/types/user.type';
import { TbCircleCheckFilled, TbCircleXFilled } from 'react-icons/tb';

type SuggestionProps = {
    title: string;
    value?: SuggestionType;
};

const Suggestion = ({ title, value }: SuggestionProps) => {
    const needsWork = value?.cons?.length || 0;

    return (
        <div className="flex items-center gap-2 font-medium">
            {needsWork ? (
                <TbCircleXFilled className="text-xl text-red-500" />
            ) : (
                <TbCircleCheckFilled className="text-xl text-green-500" />
            )}
            {title}
        </div>
    );
};

export default Suggestion;
