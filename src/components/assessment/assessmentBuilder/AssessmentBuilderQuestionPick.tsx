import { Label } from '@/components/ui/label';
import AssessmentBuilderQuestionList from './AssessmentBuilderQuestionList';
import { Button } from '@/components/ui/button';

const AssessmentBuilderQuestionPick = () => {
    return (
        <Label className="mt-8">
            <p className="mb-2 text-xl font-normal">Pick questions (12)</p>
            <Button variant="black">Pick from bank</Button>
            <Button variant="outline" className="ml-2">
                Create new question
            </Button>
            <div className="h-4" />
            <AssessmentBuilderQuestionList />
        </Label>
    );
};

export default AssessmentBuilderQuestionPick;
