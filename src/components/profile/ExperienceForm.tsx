import { Experience } from '@/types/user.type';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { TbTerminal } from 'react-icons/tb';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import moment from 'moment';
import MonthPicker from '../ui/month-picker';

type ExperienceForm = {
    data: Experience;
    setData: React.Dispatch<React.SetStateAction<Experience>>;
    error?: string;
};

const ExperienceForm = ({ data, setData, error }: ExperienceForm) => {
    const handleChange =
        (key: keyof Experience) =>
        (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
            setData((prev) => ({
                ...prev,
                [key]: e.target.value,
            }));
        };

    return (
        <Card className="pb-2">
            <CardContent className="grid grid-cols-2 gap-x-8 gap-y-4 p-6">
                <div>
                    <p className="mb-1 text-gray-500">
                        Job Title <span className="text-red-500">*</span>
                    </p>
                    <Input onChange={handleChange('title')} value={data.title} />
                </div>
                <div>
                    <p className="mb-1 text-gray-500">
                        Company <span className="text-red-500">*</span>
                    </p>
                    <Input onChange={handleChange('company')} value={data.company} />
                </div>
                <div>
                    <p className="mb-1 text-gray-500">
                        Start Date <span className="text-red-500">*</span>
                    </p>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button className="w-full flex-1 justify-start" variant="outline">
                                {data.startDate ? moment(data.startDate).format('MM/YYYY') : 'Start Date'}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <MonthPicker
                                currentMonth={data.startDate ?? new Date()}
                                onMonthChange={(data) => setData((prev) => ({ ...prev, startDate: data }))}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                    <p className="mb-1">End Date</p>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button className="w-full flex-1 justify-start text-gray-500" variant="outline">
                                {data.endDate ? moment(data.endDate).format('MM/YYYY') : 'End Date'}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <MonthPicker
                                currentMonth={data.endDate ?? new Date()}
                                onMonthChange={(data) => setData((prev) => ({ ...prev, endDate: data }))}
                            />
                        </PopoverContent>
                    </Popover>{' '}
                </div>
                <div className="col-span-2">
                    <p className="mb-1 text-gray-500">Description</p>
                    <Textarea
                        onChange={handleChange('description')}
                        value={data.description}
                        className="min-h-[100px]"
                    />
                </div>
                {error && (
                    <Alert variant="destructive" className="col-span-2 mt-3">
                        <TbTerminal className="h-4 w-4" />
                        <AlertTitle>Error!</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
            </CardContent>
        </Card>
    );
};

export default ExperienceForm;
