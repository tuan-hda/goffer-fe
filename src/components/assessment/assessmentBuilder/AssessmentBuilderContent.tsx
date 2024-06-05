import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AssessmentBuilderQuestionPick from './AssessmentBuilderQuestionPick';
import AssessmentBuilderConfigure from './AssessmentBuilderConfigure';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const AssessmentBuilderContent = () => {
    return (
        <div>
            <div className="flex flex-col pt-6">
                <p className="mb-4 text-xl">Basic information</p>
                <Label className="w-[280px]">
                    Title
                    <Input placeholder="Title here..." className="mt-2" />
                </Label>
                <Label className="mt-4 w-[480px]">
                    Description
                    <Textarea placeholder="Description here..." className="mt-2" />
                </Label>
                <Label className="mt-4 w-[280px]">
                    Assessment type
                    <Select defaultValue="mcq">
                        <SelectTrigger className="mt-2 w-[280px]">
                            <SelectValue placeholder="Assessment type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="mcq">MCQ assessment</SelectItem>
                            <SelectItem value="coding">Coding assessment</SelectItem>
                        </SelectContent>
                    </Select>
                </Label>

                <div className="mt-12 border-t" />

                <AssessmentBuilderQuestionPick />

                <div className="mt-12 border-t" />

                <AssessmentBuilderConfigure />
            </div>
        </div>
    );
};

export default AssessmentBuilderContent;
