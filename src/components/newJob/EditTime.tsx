import timezones from '@/data/timezones';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import useNewJobStore from '@/stores/newJob';
import { shallow } from 'zustand/shallow';
import { useMemo } from 'react';

const EditTime = () => {
    const [data, setData] = useNewJobStore((state) => [state.data, state.setData], shallow);

    const appendedTimezones = useMemo(() => {
        return [{ text: 'Any working time', value: 'Any working time' }, ...timezones];
    }, []);

    return (
        <div className="min-w-0 flex-1">
            <Select value={data.time} onValueChange={(value) => setData((prev) => ({ ...prev, time: value }))}>
                <SelectTrigger className="w-full">
                    <SelectValue className="min-w-0 flex-1" placeholder="Any working time" />
                </SelectTrigger>
                <SelectContent>
                    {appendedTimezones.map((timezone, index) => (
                        <SelectItem key={index} value={timezone.text}>
                            {timezone.text}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default EditTime;
