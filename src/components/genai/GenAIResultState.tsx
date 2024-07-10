import { Avatar } from '@nextui-org/react';
import { GenAIProviderProps } from './data';
import { TbCheck, TbSparkles } from 'react-icons/tb';
import { IoSparkles, IoSync } from 'react-icons/io5';
import { Button } from '../ui/button';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';

type GenAIResultStateProps = GenAIProviderProps & {
    parsedResult: {
        prompt: string;
        result: any;
    };
    setParsedResult: (data: { result: any; prompt: string }) => void;
    onApplyResult: () => void;
};

const GenAIResultState = (props: GenAIResultStateProps) => {
    const { data: self } = useSelfProfileQuery();

    const ResultDisplayComponent = props.resultDisplayComponent;

    if (!ResultDisplayComponent) {
        return null;
    }

    const clear = () => {
        props.setParsedResult({
            prompt: '',
            result: null,
        });
    };

    const handleApply = () => {
        props?.onResponse(props.parsedResult.result);
        props?.onApplyResult();
    };

    return (
        <div>
            <div className="mb-4 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-small">
                <Avatar size="sm" className="flex-shrink-0" src={self?.avatar} />
                <p className="min-w-0 rounded-xl text-base">{props.parsedResult.prompt}</p>
            </div>
            <div className="rounded-2xl p-4 shadow-small">
                <ResultDisplayComponent data={props.parsedResult.result} />
            </div>
            <div className="mt-6 flex items-center gap-2 pl-1">
                <IoSparkles className="mr-auto text-3xl" />
                <Button onClick={clear} className="text-base" variant="outline">
                    <IoSync className="mr-2 text-base" />
                    Generate another
                </Button>
                <Button onClick={handleApply} className="text-base" variant="black">
                    <TbCheck className="mr-2 text-base" />
                    Apply result
                </Button>
            </div>
        </div>
    );
};

export default GenAIResultState;
