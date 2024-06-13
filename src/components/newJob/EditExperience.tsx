import { shallow } from 'zustand/shallow';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import useNewJobStore from '@/stores/newJob';
import { experienceList } from '@/data/experiences';

const EditExperience = () => {
    const [data, setData] = useNewJobStore((state) => [state.data, state.setData], shallow);

    return (
        <Select value={data.experience} onValueChange={(value) => setData((prev) => ({ ...prev, experience: value }))}>
            <SelectTrigger className="flex-1">
                <SelectValue />
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
