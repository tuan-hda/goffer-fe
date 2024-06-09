import Upload from '@/components/common/Upload';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import useNewQuestionStore from '@/stores/newQuestionStore';
import { NewQuestion } from '@/types/question.type';
import { shallow } from 'zustand/shallow';

const MCQBasic = () => {
    const [question, setQuestion] = useNewQuestionStore(
        (state) => [state.questions.mcq, state.setQuestion('mcq')],
        shallow,
    );

    const handleChange = (key: keyof NewQuestion) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQuestion((prev) => ({ ...prev, [key]: e.target.value }));
    };

    const handleSelectionChange = (key: keyof NewQuestion) => (value: string) => {
        setQuestion((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div className="col-span-6 mx-auto flex w-full flex-col gap-6">
            <h2 className="text-xl">Basic</h2>

            <Label>
                Question *
                <Textarea
                    value={question.content}
                    onChange={handleChange('content')}
                    className="mt-2"
                    placeholder="Question here..."
                />
            </Label>
            <Label>
                Description *
                <Textarea
                    value={question.description as string}
                    onChange={handleChange('description')}
                    className="mt-2"
                    placeholder="Clear description for this question..."
                />
            </Label>
            <Label>
                Category *
                <Select value={question.category} onValueChange={handleSelectionChange('category')}>
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
            <div>
                <Label>Image</Label>
                <div className="h-2"></div>
                <Upload
                    showingImage
                    directUpload
                    onDelete={() => setQuestion((prev) => ({ ...prev, image: '' }))}
                    fileUrl={question.image}
                    onAttach={(url) => setQuestion((prev) => ({ ...prev, image: url }))}
                />
            </div>
            <Label>
                Difficulty
                <Select
                    value={String(question.difficulty)}
                    onValueChange={handleSelectionChange('difficulty')}
                    defaultValue="1"
                >
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
