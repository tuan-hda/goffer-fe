import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { TbX } from 'react-icons/tb';

type TestCaseProps = {
    num: number;
    onRemove: () => void;
};

const TestCase = ({ num, onRemove }: TestCaseProps) => {
    return (
        <div className="flex flex-wrap gap-2">
            <p className="mr-2">{num}.</p>
            <Textarea placeholder="Input" className="flex-1" />
            <Textarea placeholder="Output" className="flex-1" />
            <Button onClick={onRemove} variant="ghost" size="icon">
                <TbX />
            </Button>
        </div>
    );
};

export default TestCase;
