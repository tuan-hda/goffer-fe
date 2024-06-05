import { Label } from '@/components/ui/label';
import AssessmentBuilderQuestionList from './AssessmentBuilderQuestionList';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import QuestionCreateDropdown from '../questionBank/QuestionCreateDropdown';

const AssessmentBuilderQuestionPick = () => {
    return (
        <div className="mt-8">
            <Label className="mb-2 block text-xl font-normal">Pick questions (12)</Label>
            <div className="flex items-center gap-2">
                <Input placeholder="Search question bank..." className="w-fit" />
                <span>or</span>
                <QuestionCreateDropdown>
                    <Button variant="black">Create new question</Button>
                </QuestionCreateDropdown>
            </div>
            <div className="h-4" />
            <AssessmentBuilderQuestionList />
        </div>
    );
};

export default AssessmentBuilderQuestionPick;
