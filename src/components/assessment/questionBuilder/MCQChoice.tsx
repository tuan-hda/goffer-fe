import Upload from '@/components/common/Upload';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Toggle } from '@/components/ui/toggle';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import classNames from 'classnames';
import { useState } from 'react';
import { TbPhoto, TbTrash } from 'react-icons/tb';

type MCQChoiceProps = {
    num: number;
    isAnswer: boolean;
    onRemove: () => void;
    onSelect: () => void;
};

const MCQChoice = ({ num, isAnswer, onRemove, onSelect }: MCQChoiceProps) => {
    const [hasImage, setHasImage] = useState<boolean>(false);

    return (
        <div className={classNames(isAnswer && 'rounded-2xl bg-gray-50 transition', 'px-4 py-3')}>
            <Label>Choice #{num}.</Label>
            <div className="mb-2 mt-1 flex gap-2">
                <div className="grid gap-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button onClick={onSelect} asChild size="icon" className="mr-1" variant="outline">
                                    <Checkbox checked={isAnswer} />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Mark this as correct answer</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                <div className="flex-1">
                    <Textarea className="min-h-[78px] bg-white" placeholder="Content of this choice..." />
                    {hasImage && <Upload className="mt-4 flex-1" />}
                </div>
                <div className="flex flex-col gap-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div>
                                    <Toggle
                                        pressed={hasImage}
                                        onPressedChange={setHasImage}
                                        className="flex w-9 items-center justify-center p-0"
                                    >
                                        <TbPhoto className="text-base" />
                                    </Toggle>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>Add image for this question</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <Button onClick={onRemove} variant="ghost" size="icon">
                        <TbTrash />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MCQChoice;
