import { Button } from '@/components/ui/button';
import MCQChoice from './MCQChoice';

const MCQChoices = () => {
    return (
        <div className="col-span-6 mx-auto flex w-full flex-col gap-6">
            <h2 className="text-xl">Choices</h2>
            <MCQChoice />
            <Button variant="outline">Add new choice</Button>
        </div>
    );
};

export default MCQChoices;
