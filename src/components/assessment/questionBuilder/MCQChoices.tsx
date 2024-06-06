import { Button } from '@/components/ui/button';
import MCQChoice from './MCQChoice';
import { useEffect, useState } from 'react';

const MCQChoices = () => {
    const [choices, setChoices] = useState([1, 2, 3, 4]);
    const [answer, setAnswer] = useState<number | null>(null);

    const addChoice = () => {
        setChoices([...choices, choices.length + 1]);
    };

    const removeChoice = (index: number) => () => {
        setChoices(choices.filter((_, i) => i !== index));
    };

    const markAsAnswer = (index: number) => () => {
        setAnswer(index);
    };

    useEffect(() => {
        if (answer !== null && answer >= choices.length) {
            setAnswer(-1);
        }
    }, [choices, answer]);

    return (
        <div className="col-span-6 flex w-full flex-col">
            <h2 className="text-xl">Choices</h2>
            <div className="-mx-4 mt-2">
                {choices.map((choice, index) => (
                    <MCQChoice
                        isAnswer={answer === index}
                        onSelect={markAsAnswer(index)}
                        onRemove={removeChoice(index)}
                        num={index + 1}
                        key={index}
                    />
                ))}
            </div>
            <Button className="mt-6" onClick={addChoice} variant="outline">
                Add new choice
            </Button>
        </div>
    );
};

export default MCQChoices;
