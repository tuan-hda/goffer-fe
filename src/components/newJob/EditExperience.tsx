import { shallow } from 'zustand/shallow';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import useNewJobStore from '@/stores/newJob';

const experienceList = [
    {
        value: '0-1 year',
        label: '0-1 year',
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
        value: '4-7 years',
        label: '4-7 years',
    },
    {
        value: '7-10 years',
        label: '7-10 years',
    },
    {
        value: '10+ years',
        label: '10+ years',
    },
];

const EditExperience = () => {
    const [data, setData] = useNewJobStore((state) => [state.data, state.setData], shallow);

    return (
        <Select value={data.experience} onValueChange={(value) => setData((prev) => ({ ...prev, experience: value }))}>
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
