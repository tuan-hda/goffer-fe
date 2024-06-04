import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TbCheck, TbCircle, TbX } from 'react-icons/tb';

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
            <div className="flex flex-col">
                <Button onClick={onRemove} variant="ghost" size="icon">
                    <TbX />
                </Button>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost" size="icon">
                                <TbCircle className="text-gray-500/10" />
                            </Button>
                            {/* <Button variant="ghost" size="icon">
                                <TbCheck />
                            </Button> */}
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Show as example for examinee</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    );
};

export default TestCase;
