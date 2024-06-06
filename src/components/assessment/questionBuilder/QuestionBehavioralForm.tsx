import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { TbMicrophone2, TbVideo } from 'react-icons/tb';

const QuestionBehavioralForm = () => {
    return (
        <div className="space-y-4">
            <div className="grid gap-2">
                <Label htmlFor="Title">Title</Label>
                <Input id="Title" type="Title" placeholder="A brief question title here" required />
            </div>
            <div className="grid grid-cols-3 gap-3">
                <div>
                    <Label htmlFor="category">Category</Label>
                    <Select name="category">
                        <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="behavioral">Behavioral</SelectItem>
                            <SelectItem value="technical">Technical</SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="experience">Experience</SelectItem>
                            <SelectItem value="motivation">Motivation</SelectItem>
                            <SelectItem value="communication">Communication</SelectItem>
                            <SelectItem value="opinion">Opinion</SelectItem>
                            <SelectItem value="performance-based">Performance-based</SelectItem>
                            <SelectItem value="brainteaser">Brainteaser</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Label htmlFor="type">Kind</Label>
                    <Select name="kind">
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
                    <Label htmlFor="limit">Limit</Label>
                    <Select name="limit">
                        <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Limit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">1 min</SelectItem>
                            <SelectItem value="3">3 min</SelectItem>
                            <SelectItem value="5">5 min</SelectItem>
                            <SelectItem value="7">7 min</SelectItem>
                            <SelectItem value="10">10 min</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="description">Description (optional)</Label>
                <Textarea id="description" placeholder="Give a description for this question" required />
            </div>
        </div>
    );
};

export default QuestionBehavioralForm;
