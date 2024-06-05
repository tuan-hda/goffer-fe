import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TbSearch, TbX } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const AssessmentOrgHeader = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl">Assessment (12)</h1>
                <Button asChild>
                    <Link to="builder">Create assessment</Link>
                </Button>
            </div>
            <div className="mt-3 flex gap-4">
                <div className="relative w-[360px]">
                    <Input className="w-full pl-8" placeholder="Search assessment..." />
                    <TbSearch className="absolute left-3 top-[10px]" />
                </div>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="mcq">MCQ assessment</SelectItem>
                        <SelectItem value="coding assessment">Coding assessment</SelectItem>
                    </SelectContent>
                </Select>

                <Button variant="outline">
                    <TbX className="mr-2" /> Clear filter
                </Button>
            </div>
        </div>
    );
};

export default AssessmentOrgHeader;
