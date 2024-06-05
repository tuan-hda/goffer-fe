import { useState } from 'react';
import TestCase from './TestCase';
import Tips from './Tips';
import { Button } from '@/components/ui/button';

const CodingTestCase = () => {
    const [testCases, setTestCases] = useState([1, 2, 3]);

    const addTestCase = () => {
        setTestCases([...testCases, testCases.length + 1]);
    };

    const removeTestCase = (index: number) => {
        setTestCases(testCases.filter((_, i) => i !== index));
    };

    return (
        <div className="grid grid-cols-12 gap-10 text-text">
            <div className="col-span-12">
                <p className="text-xl">2. Create test cases</p>
                <p className="text-gray-400">What does the input/output look like?</p>
            </div>
            <div className="col-span-7 flex flex-col gap-6">
                {testCases.map((testCase, index) => (
                    <TestCase onRemove={() => removeTestCase(index)} num={index + 1} key={index} />
                ))}
                <Button onClick={addTestCase} variant="outline">
                    New test case
                </Button>
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
