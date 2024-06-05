import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { TbSearch, TbX } from 'react-icons/tb';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import { Link } from 'react-router-dom';

const QuestionBankHeader = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl">120 questions</h1>
                    <p>20 easy, 60 medium, 40 hard</p>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button>Add question</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Choose question type</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link to="builder/mcq">MCQ</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link to="builder/coding">Coding</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="mt-6 flex gap-4">
                <div className="relative w-[360px]">
                    <Input className="w-full pl-8" placeholder="Search question..." />
                    <TbSearch className="absolute left-3 top-[10px]" />
                </div>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px]">
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
                <Button variant="outline">
                    <TbX className="mr-2" /> Clear filter
                </Button>
            </div>
        </div>
    );
};

export default QuestionBankHeader;
