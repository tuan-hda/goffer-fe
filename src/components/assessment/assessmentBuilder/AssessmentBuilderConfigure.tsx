import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { TbCalendar } from 'react-icons/tb';
import classNames from 'classnames';
import moment from 'moment';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import useNewAssessmentStore from '@/stores/newAssessmentStore';
import { shallow } from 'zustand/shallow';

const AssessmentBuilderConfigure = () => {
    const [assessment, setAssessment] = useNewAssessmentStore(
        (state) => [state.assessment, state.setAssessment],
        shallow,
    );
    const date = assessment.due;
    const setDate = (day?: Date) => {
        setAssessment((state) => ({ ...state, due: day }));
    };

    return (
        <>
            <p className="mt-8 pt-2 text-xl">Configure assessment</p>
            <Label className="mt-4  w-[280px]">
                Duration *
                <Select
                    value={String(assessment.duration || 0)}
                    onValueChange={(value) =>
                        setAssessment((state) => ({ ...state, duration: value as unknown as number }))
                    }
                >
                    <SelectTrigger className="mt-2 w-[280px]">
                        <SelectValue placeholder="Time constraint" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Time constraint</SelectLabel>
                            <SelectItem value="5">5 minutes</SelectItem>
                            <SelectItem value="10">10 minutes</SelectItem>
                            <SelectItem value="15">15 minutes</SelectItem>
                            <SelectItem value="20">20 minutes</SelectItem>
                            <SelectItem value="25">25 minutes</SelectItem>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="45">45 minutes</SelectItem>
                            <SelectItem value="60">60 minutes</SelectItem>
                            <SelectItem value="90">90 minutes</SelectItem>
                            <SelectItem value="120">120 minutes</SelectItem>
                            <SelectItem value="150">150 minutes</SelectItem>
                            <SelectItem value="180">180 minutes</SelectItem>
                            <SelectItem value="210">210 minutes</SelectItem>
                            <SelectItem value="300">300 minutes</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </Label>

            <Label className="mt-4 w-[280px]">
                Due date
                <div className="h-2" />
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={'outline'}
                            className={classNames(
                                'w-[280px] justify-start text-left font-normal',
                                !date && 'text-muted-foreground',
                            )}
                        >
                            <TbCalendar className="mr-2 h-4 w-4" />
                            {date ? moment(date).format('MMM DD, YYYY') : 'Pick a date'}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            disabled={{
                                before: new Date(),
                            }}
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </PopoverContent>
                </Popover>
            </Label>
        </>
    );
};

export default AssessmentBuilderConfigure;
