import classNames from 'classnames';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter } from '../ui/card';
import { TbPencil } from 'react-icons/tb';
import { useState } from 'react';
import { Input } from '../ui/input';

type FeedbackQuestionProps = {
    question: string;
    size?: string;
    answers?: string[];
    editable?: boolean;
    selected?: string;
    onSelected?: (_: string) => void;
};

const FeedbackQuestion = ({
    question,
    answers = ['1', '2', '3', '4', '5'],
    size = 'text-sm',
    editable = false,
    selected,
    onSelected,
}: FeedbackQuestionProps) => {
    const [isEdit, setEdit] = useState(false);
    const [select, setSelect] = useState(selected);

    const handleSelected = (value: string) => {
        if (onSelected) {
            setSelect(value);
            onSelected(value);
            console.log('🚀 ~ file: FeedbackQuestion.tsx:33 ~ handleSelected ~ value:', value);
        }
    };

    return (
        <Card className={'group relative bg-white/100 pt-1 shadow-none'}>
            <CardContent className="mt-4">
                {isEdit ? <Input value={'Your new custom feedback question'} /> : <p>{question}</p>}
                <div
                    className={classNames(
                        'mt-4 grid grid-cols-5 gap-3',
                        editable || onSelected ? 'pointer-events-auto' : 'pointer-events-none',
                    )}
                >
                    {answers.map((ans) => (
                        <Button
                            onClick={() => handleSelected(ans)}
                            variant={ans === select ? 'secondary' : 'outline'}
                            key={ans}
                            className={classNames(size)}
                        >
                            {ans}
                        </Button>
                    ))}
                </div>
            </CardContent>
            {editable && !isEdit && (
                <Button
                    onClick={() => setEdit((prev) => !prev)}
                    size="icon"
                    variant="ghost"
                    className="absolute right-3 top-3 hidden items-center justify-center group-hover:flex"
                >
                    <TbPencil className="text-base" />
                </Button>
            )}
            {isEdit && (
                <CardFooter className="w-full gap-4">
                    <Button variant="destructive">Delete</Button>
                    <Button onClick={() => setEdit(false)} variant="outline" className="ml-auto">
                        Close
                    </Button>
                    <Button onClick={() => setEdit(false)} variant="black">
                        Save
                    </Button>
                </CardFooter>
            )}
        </Card>
    );
};

export default FeedbackQuestion;
