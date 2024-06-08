import { Button } from '@/components/ui/button';
import MCQChoice from './MCQChoice';
import useNewQuestionStore from '@/stores/newQuestionStore';
import { shallow } from 'zustand/shallow';
import { Choice } from '@/types/question.type';

const MCQChoices = () => {
    const [question, setQuestion] = useNewQuestionStore(
        (state) => [state.questions.mcq, state.setQuestion('mcq')],
        shallow,
    );

    const choices = question.choices || [];
    const setChoices = (choices: Choice[]) => setQuestion({ ...question, choices });
    const setChoiceData = (index: number) => (key: 'content' | 'image') => (value: string) => {
        setChoices(choices.map((choice, i) => (i === index ? { ...choice, [key]: value } : choice)));
    };

    const addChoice = () => {
        setChoices([
            ...choices,
            {
                content: '',
                isCorrect: false,
            },
        ]);
    };

    const removeChoice = (index: number) => () => {
        setChoices(choices.filter((_, i) => i !== index));
    };

    const markAsAnswer = (index: number) => () => {
        setChoices(
            choices.map((choice, i) => ({
                ...choice,
                isCorrect: i === index,
            })),
        );
    };

    return (
        <div className="col-span-6 flex w-full flex-col">
            <h2 className="text-xl">Choices</h2>
            <div className="-mx-4 mt-2">
                {choices.map((choice, index) => (
                    <MCQChoice
                        {...choice}
                        setChoiceData={setChoiceData(index)}
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
