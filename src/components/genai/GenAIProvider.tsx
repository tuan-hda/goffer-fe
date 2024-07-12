import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import classNames from 'classnames';
import { IoSparkles } from 'react-icons/io5';
import { GenAIProviderProps } from './data';
import GenAIPromptState from './GenAIPromptState';
import GenAIResultState from './GenAIResultState';

const GenAIProvider = (props: GenAIProviderProps) => {
    const [opened, setOpened] = useState(false);

    const [parsedResult, setParsedResult] = useState<{
        prompt: string;
        result: any;
    }>({
        prompt: '',
        result: null,
    });

    const handleOpenChange = (isOpen: boolean) => {
        setOpened(isOpen);
    };

    return (
        <Dialog open={opened} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <div>{props.children}</div>
            </DialogTrigger>
            <DialogContent className={classNames('max-h-[90vh] max-w-[700px] overflow-y-auto !rounded-3xl px-8 py-6')}>
                <div className="flex flex-col">
                    <DialogHeader>
                        <div className="mb-8 mt-4 flex flex-grow items-center justify-center gap-6">
                            <IoSparkles className="h-9 w-9" />
                            <p className="font-serif text-4xl">{props.title}</p>
                        </div>
                    </DialogHeader>

                    {parsedResult.result ? (
                        <GenAIResultState
                            {...props}
                            onApplyResult={() => setOpened(false)}
                            parsedResult={parsedResult}
                            setParsedResult={setParsedResult}
                        />
                    ) : (
                        <GenAIPromptState {...props} setParsedResult={setParsedResult} />
                    )}
                </div>
                <div className="h-2" />
            </DialogContent>
        </Dialog>
    );
};

export default GenAIProvider;
