import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const experienceList = [
    {
        value: '<1 year',
        label: '<1 year',
    },
    {
        value: '1-2 years',
        label: '1-2 years',
    },
    {
        value: '2-4 years',
        label: '2-4 years',
    },
    {
        value: '4-10 years',
        label: '4-10 years',
    },
    {
        value: '10+ years',
        label: '10+ years',
    },
];

const EditExperience = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('<1 year');

    return (
        <Select>
            <SelectTrigger className="flex-1">
                <SelectValue defaultValue={'<1 year'} />
            </SelectTrigger>
            <SelectContent>
                {experienceList.map((exp) => (
                    <SelectItem key={exp.label} value={exp.value}>
                        {exp.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default EditExperience;
