import { Education } from '@/types/user.type';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import MonthPicker from '../ui/month-picker';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import moment from 'moment';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { TbTerminal } from 'react-icons/tb';

type EducationFormProps = {
    data: Education;
    setData: React.Dispatch<React.SetStateAction<Education>>;
    error?: string;
};

const EducationForm = ({ data, setData, error }: EducationFormProps) => {
    const handleChange =
        (key: keyof Education) => (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
            setData((prev) => ({
                ...prev,
                [key]: e.target.value,
            }));
        };

    return (
        <Card className="rounded-2xl pb-2">
            <CardContent className="grid grid-cols-2 gap-x-8 gap-y-4 p-7">
                <div>
                    <p className="mb-1 text-gray-500">
                        School <span className="text-red-500">*</span>
                    </p>
                    <Input placeholder="Your school..." onChange={handleChange('school')} value={data.school} />
                </div>
                <div>
                    <p className="mb-1 text-gray-500">Degree</p>
                    <Input placeholder="Your degree..." onChange={handleChange('degree')} value={data.degree || ''} />
                </div>
                <div>
                    <p className="mb-1 text-gray-500">Major</p>
                    <Input placeholder="Your major..." onChange={handleChange('major')} value={data.major || ''} />
                </div>
                <div>
                    <p className="mb-1 text-gray-500">Start / End Date</p>
                    <div className="flex gap-2">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button className="flex-1 justify-start" variant="outline">
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
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button className="flex-1 justify-start" variant="outline">
                                    {data.endDate ? moment(data.endDate).format('MM/YYYY') : 'End Date'}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <MonthPicker
                                    currentMonth={data.endDate ?? new Date()}
                                    onMonthChange={(data) => setData((prev) => ({ ...prev, endDate: data }))}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="col-span-2">
                    <p className="mb-1 text-gray-500">Description</p>
                    <Textarea
                        placeholder="Description..."
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

export default EducationForm;
