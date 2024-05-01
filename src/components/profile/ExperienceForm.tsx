import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const ExperienceForm = () => {
    return (
        <Card>
            <CardContent className="grid grid-cols-2 gap-x-8 gap-y-4 p-6">
                <div>
                    <p className="mb-1 text-gray-500">Job Title</p>
                    <Input />
                </div>
                <div>
                    <p className="mb-1 text-gray-500">Company</p>
                    <Input />
                </div>
                <div>
                    <p className="mb-1 text-gray-500">Start Date</p>
                    <Input placeholder="MM/YYYY" />
                </div>
                <div>
                    <p className="mb-1 text-gray-500">End Date</p>
                    <Input placeholder="MM/YYYY" />
                </div>
                <div className="col-span-2">
                    <p className="mb-1 text-gray-500">Description</p>
                    <Textarea className="min-h-[100px]" />
                </div>
            </CardContent>
        </Card>
    );
};

export default ExperienceForm;
