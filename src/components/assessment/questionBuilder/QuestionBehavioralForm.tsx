import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { behavioralCategory } from '@/data/categories';
import useNewQuestionStore from '@/stores/newQuestionStore';
import { NewQuestion } from '@/types/question.type';
import { TbMicrophone2, TbVideo } from 'react-icons/tb';
import { shallow } from 'zustand/shallow';

const QuestionBehavioralForm = () => {
    const [question, setQuestion] = useNewQuestionStore(
        (state) => [state.questions.behavioral, state.setQuestion('behavioral')],
        shallow,
    );

    const handleChange =
        (key: keyof NewQuestion) =>
        (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
            setQuestion((prev) => ({ ...prev, [key]: e.target.value }));
        };

    const handleSelectionChange = (key: keyof NewQuestion) => (value: string) => {
        setQuestion((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div className="space-y-4">
            <div className="grid gap-2">
                <Label htmlFor="Title">Question *</Label>
                <Textarea
                    value={question.content}
                    onChange={handleChange('content')}
                    id="Title"
                    placeholder="A brief question here"
                    required
                />
            </div>
            <div className="grid grid-cols-3 gap-3">
                <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select value={question.category} onValueChange={handleSelectionChange('category')} name="category">
                        <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            {behavioralCategory.map((category) => (
                                <SelectItem value={category.value} key={category.value}>
                                    {category.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Label htmlFor="type">Kind *</Label>
                    <Select value={question.kind} onValueChange={handleSelectionChange('kind')} name="kind">
                        <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="audio">
                                <div className="flex items-center gap-2">
                                    <TbMicrophone2 /> Audio
                                </div>
                            </SelectItem>
                            <SelectItem value="video">
                                <div className="flex items-center gap-2">
                                    <TbVideo /> Video
                                </div>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Label htmlFor="limit">Constraint *</Label>
                    <Select
                        value={String(question.constraint || 0)}
                        onValueChange={handleSelectionChange('constraint')}
                        name="limit"
                    >
                        <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Limit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="30">30 secs</SelectItem>
                            <SelectItem value="60">1 min</SelectItem>
                            <SelectItem value="180">3 mins</SelectItem>
                            <SelectItem value="300">5 mins</SelectItem>
                            <SelectItem value="420">7 mins</SelectItem>
                            <SelectItem value="600">10 mins</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    value={question.description as string}
                    onChange={handleChange('description')}
                    id="description"
                    placeholder="Give a description for this question"
                    required
                />
            </div>
        </div>
    );
};

export default QuestionBehavioralForm;
