import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { TbSearch, TbX } from 'react-icons/tb';

const QuestionBankHeader = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl">120 questions</h1>
                    <p>20 easy, 60 medium, 40 hard</p>
                </div>
                <Button asChild>
                    <Link to="build">Add question</Link>
                </Button>
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
                <Button variant="outline">
                    <TbX className="mr-2" /> Clear filter
                </Button>
            </div>
        </div>
    );
};

export default QuestionBankHeader;
