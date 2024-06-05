import { Label } from '@/components/ui/label';
import AssessmentBuilderQuestionList from './AssessmentBuilderQuestionList';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link, useParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';

const AssessmentBuilderQuestionPick = () => {
    const { domain } = useParams();

    return (
        <div className="mt-8">
            <Label className="mb-2 block text-xl font-normal">Pick questions (12)</Label>
            <div className="flex items-center gap-2">
                <Input placeholder="Search question bank..." className="w-fit" />
                <span>or</span>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="black">Create new question</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Choose question type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link to={`/app/organization/${domain}/bank/builder/mcq`}>MCQ</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link to={`/app/organization/${domain}/bank/builder/coding`}>Coding</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="h-4" />
            <AssessmentBuilderQuestionList />
        </div>
    );
};

export default AssessmentBuilderQuestionPick;
