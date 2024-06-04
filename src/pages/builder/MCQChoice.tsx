import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TbTrash } from 'react-icons/tb';

const MCQChoice = () => {
    return (
        <div>
            <Label>Choice #1.</Label>
            <div className="mt-1 flex gap-2">
                <div className="flex flex-col gap-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button asChild size="icon" variant="outline">
                                    <Checkbox />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Mark this as correct answer</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <Button variant="outline" size="icon">
                        <TbTrash />
                    </Button>
                </div>
                <Textarea className="flex-1" placeholder="Content of this choice..." />
            </div>
        </div>
    );
};

export default MCQChoice;
