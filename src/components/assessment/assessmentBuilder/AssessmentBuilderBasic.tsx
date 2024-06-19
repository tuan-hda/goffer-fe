import Upload from '@/components/common/Upload';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import useGetCurrAssessment from '@/hooks/useGetCurrAssessment';
import useNewAssessmentStore from '@/stores/newAssessmentStore';
import { NewAssessment } from '@/types/assessment.type';
import { QUESTION_TYPE } from '@/types/question.type';
import { shallow } from 'zustand/shallow';

const AssessmentBuilderBasic = () => {
    const [assessment, setAssessment] = useNewAssessmentStore(
        (state) => [state.assessment, state.setAssessment],
        shallow,
    );
    const { data } = useGetCurrAssessment();

    const handleChange = (key: keyof NewAssessment) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setAssessment((state) => ({ ...state, [key]: e.target.value }));
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= 5000) {
            setAssessment((state) => ({ ...state, description: e.target.value }));
        }
    };

    return (
        <>
            <p className="mb-4 text-xl">Basic information</p>
            <Label className="w-[280px]">Title *</Label>
            <Input
                onChange={handleChange('title')}
                value={assessment.title}
                placeholder="Title here..."
                className="mt-2 w-[280px]"
            />

            <div className="flex w-[480px] flex-col">
                <Label className="mt-4 w-[480px]">Description *</Label>
                <Textarea
                    value={assessment.description}
                    onChange={handleDescriptionChange}
                    placeholder="Description here..."
                    className="mt-2 w-[480px]"
                />
                <p className="ml-auto mt-2 text-xs font-light text-gray-400">
                    {assessment.description?.length || 0}/5000
                </p>
            </div>

            <div className="mt-4 w-[280px]">
                <Label className="w-[280px]">Image</Label>
                <Upload
                    fileUrl={assessment.image}
                    onAttach={(url) => {
                        setAssessment((state) => ({ ...state, image: url }));
                    }}
                    onDelete={() => {
                        setAssessment((state) => ({ ...state, image: '' }));
                    }}
                    directUpload
                    showingImage
                    className="mt-2 w-[480px]"
                />
            </div>

            <Label className="mt-5 w-[280px]">
                Assessment type *
                <Select
                    value={assessment.type}
                    onValueChange={(value) => {
                        setAssessment((state) => ({
                            ...state,
                            type: value as QUESTION_TYPE,
                            questions: data && data.questions.size > 0 ? data.questions : new Map(),
                        }));
                    }}
                    defaultValue="mcq"
                >
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
