import { useState } from 'react';
import timezones from '@/data/timezones';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const EditTime = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    return (
        <Select>
            <SelectTrigger className="flex-1">
                <SelectValue placeholder="Any working time" />
            </SelectTrigger>
            <SelectContent>
                {timezones.map((timezone) => (
                    <SelectItem key={timezone.text} value={timezone.value}>
                        {timezone.text}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default EditTime;
