import Upload from '@/components/common/Upload';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const MCQBasic = () => {
    return (
        <div className="col-span-6 mx-auto flex w-full flex-col gap-6">
            <h2 className="text-xl">Basic</h2>

            <Label>
                Question
                <Textarea className="mt-2" placeholder="Question here..." />
            </Label>
            <Label>
                Description
                <Textarea className="mt-2" placeholder="Clear description for this question..." />
            </Label>
            <Label>
                Image
                <div className="h-2"></div>
                <Upload />
            </Label>
            <Label>
                Category
                <Select>
                    <SelectTrigger className="mt-2 w-full">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="designing">Designing</SelectItem>
                        <SelectItem value="copywriting">Copywriting</SelectItem>
                        <SelectItem value="socialmedia">Social Media</SelectItem>
                        <SelectItem value="entertainment">Entertainment</SelectItem>
                        <SelectItem value="translation">Translation</SelectItem>
                    </SelectContent>
                </Select>
            </Label>
            <Label>
                Difficulty
                <Select defaultValue="1">
                    <SelectTrigger className="mt-2">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">Easy</SelectItem>
                        <SelectItem value="2">Medium</SelectItem>
                        <SelectItem value="3">Hard</SelectItem>
                    </SelectContent>
                </Select>
            </Label>
        </div>
    );
};

export default MCQBasic;
