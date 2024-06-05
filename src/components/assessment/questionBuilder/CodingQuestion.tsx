import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Tips from './Tips';
import { PlateEditor } from '@/components/editor/PlateEditor';
import { TbCircleCheckFilled, TbCircleXFilled } from 'react-icons/tb';

const CodingQuestion = () => {
    return (
        <div className="-mt-4 grid grid-cols-12 gap-10 text-text">
            <div className="col-span-12">
                <p className="text-xl">1. Name and describe your question</p>
                <p className="text-gray-400">It's good to provide examples which will help users understand easily.</p>
            </div>
            <div className="col-span-7 flex flex-col gap-6">
                <Label>
                    Category
                    <Select>
                        <SelectTrigger className="mt-2 max-w-[320px]">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="algo">Algorithm</SelectItem>
                            <SelectItem value="db">Database</SelectItem>
                            <SelectItem value="fe">Frontend</SelectItem>
                            <SelectItem value="sh">Shell</SelectItem>
                        </SelectContent>
                    </Select>
                </Label>

                <Label className="flex max-w-[320px] flex-col">
                    Difficulty
                    <Select>
                        <SelectTrigger className="mt-2 w-[320px]">
                            <SelectValue placeholder="Difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="easy">Easy</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="hard">Hard</SelectItem>
                        </SelectContent>
                    </Select>
                </Label>

                <Label className="flex max-w-[320px] flex-col">
                    Question
                    <Input placeholder="Pick a title" className="mt-2 max-w-[320px]" />
                    <p className="ml-auto mt-2 text-xs font-light text-gray-400">0/150</p>
                </Label>

                <div className="flex flex-col">
                    <Label>Description</Label>
                    <div className="h-2"></div>
                    <PlateEditor className="min-h-[200px]" />
                    <p className="ml-auto mt-2 text-xs font-light text-gray-400">0/5000</p>
                </div>
            </div>
            <div className="col-span-5">
                <Tips>
                    <p className="mt-4 font-medium">
                        1. Great titles are concise, descriptive, and specific. Find Substring Shortest Unsorted
                        Continuous Subarray
                    </p>
                    <div className="mt-2 flex items-center gap-1">
                        <TbCircleXFilled className="text-red-500" /> Change String
                    </div>
                    <div className="flex items-start gap-1">
                        <TbCircleCheckFilled className="mt-0.5 text-green-500" /> Append Characters to String to Make
                        Subsequence
                    </div>
                    <div className="my-5 border-t"></div>
                    <p className="mt-4 font-medium">
                        2. Clearly describe your question, and check our question set to make sure your problem isn’t
                        already there.
                    </p>
                    <p className="mt-4 text-2xl">Sample</p>
                    <p className="mt-4">
                        Given an array of integers, return indices of the two numbers such that they add up to a
                        specific target
                    </p>
                    <p className="mt-2">
                        You may assume that each input would have exactly one solution, and you may not use the same
                        element twice.
                    </p>
                    <p className="mt-2 font-medium">Example:</p>
                    <p>
                        Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
                    </p>
                </Tips>
            </div>
        </div>
    );
};

export default CodingQuestion;
