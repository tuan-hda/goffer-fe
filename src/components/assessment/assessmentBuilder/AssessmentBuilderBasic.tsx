import Upload from '@/components/common/Upload';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const AssessmentBuilderBasic = () => {
    return (
        <>
            <p className="mb-4 text-xl">Basic information</p>
            <Label className="w-[280px]">
                Title *
                <Input placeholder="Title here..." className="mt-2" />
            </Label>
            <Label className="mt-4 w-[480px]">
                Description *
                <Textarea placeholder="Description here..." className="mt-2" />
            </Label>

            <div className="mt-4 w-[280px]">
                <Label className="w-[280px]">Image</Label>
                <Upload showingImage className="mt-2 w-[480px]" />
            </div>

            <Label className="mt-5 w-[280px]">
                Assessment type *
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
        </>
    );
};

export default AssessmentBuilderBasic;
