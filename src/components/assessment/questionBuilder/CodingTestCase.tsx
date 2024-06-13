import { Textarea } from '@/components/ui/textarea';
import Tips from './Tips';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import useNewQuestionStore from '@/stores/newQuestionStore';
import { shallow } from 'zustand/shallow';
import { NewQuestion } from '@/types/question.type';

const CodingTestCase = () => {
    const [question, setQuestion] = useNewQuestionStore(
        (state) => [state.questions.coding, state.setQuestion('coding')],
        shallow,
    );

    const handleChange =
        (key: keyof NewQuestion) =>
        (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
            setQuestion((prev) => ({ ...prev, [key]: e.target.value }));
        };

    const handleNumberChange =
        (key: 'numberOfTestCaseLines' | 'numberOfOutputLines') => (e: React.ChangeEvent<HTMLInputElement>) => {
            if (!/^\d+$/.test(e.target.value) && e.target.value !== '' && e.target.value !== '0') return;
            setQuestion((prev) => ({ ...prev, [key]: e.target.value as unknown as number }));
        };

    return (
        <div className="grid grid-cols-12 gap-10 text-text">
            <div className="col-span-12">
                <p className="text-xl">2. Create test cases</p>
                <p className="text-gray-400">What does the input/output look like?</p>
            </div>
            <div className="col-span-7 flex flex-col gap-6">
                <div className="mt-2 grid grid-cols-2 gap-4">
                    <Label>
                        Number of lines for each test case
                        <Input
                            value={question.numberOfTestCaseLines}
                            onChange={handleNumberChange('numberOfTestCaseLines')}
                            className="mt-2 w-[120px]"
                            type="number"
                        />
                    </Label>
                    <Label>
                        Number of lines for each output
                        <Input
                            value={question.numberOfOutputLines}
                            onChange={handleNumberChange('numberOfOutputLines')}
                            className="mt-2 w-[120px]"
                            type="number"
                        />
                    </Label>
                </div>
                <div>
                    <Label>Your example test cases (this will be shown for candidate)</Label>
                    <div className="mt-2 flex gap-4">
                        <Textarea
                            value={question.exampleInput}
                            onChange={handleChange('exampleInput')}
                            className="min-h-[200px]"
                            placeholder="Input of test cases..."
                        />
                        <Textarea
                            value={question.exampleOutput}
                            onChange={handleChange('exampleOutput')}
                            className="min-h-[200px]"
                            placeholder="Output of test cases..."
                        />
                    </div>
                </div>

                <div>
                    <Label>Your hidden test cases (this will be used for grading)</Label>
                    <div className="mt-2 flex gap-4">
                        <Textarea
                            value={question.gradingInput}
                            onChange={handleChange('gradingInput')}
                            className="min-h-[200px]"
                            placeholder="Input of test cases..."
                        />
                        <Textarea
                            value={question.gradingOutput}
                            onChange={handleChange('gradingOutput')}
                            className="min-h-[200px]"
                            placeholder="Output of test cases..."
                        />
                    </div>
                </div>
            </div>
            <div className="col-span-5">
                <Tips>
                    <p className="mt-4 text-gray-500">
                        You can provide multiple test cases to help users understand the problem better.
                    </p>
                    <p className="mt-2 text-gray-500">
                        The test case should be in plain text format for easy checking.
                    </p>
                    <p className="mt-4 text-2xl">Sample</p>
                    <p className="mt-2">Input: [1, 2, 3, 4, 5, 6, 7, 8]</p>
                    <p className="mt-2">Output: 36</p>
                </Tips>
            </div>
        </div>
    );
};

export default CodingTestCase;
