import useNewJobStore from '@/stores/newJob';
import MultipleSelector, { Option } from '../ui/mutli-selector';
import EditExperience from './EditExperience';
import { shallow } from 'zustand/shallow';

const OPTIONS: Option[] = [
    { label: 'nextjs', value: 'nextjs' },
    { label: 'React', value: 'react' },
    { label: 'Remix', value: 'remix' },
    { label: 'Vite', value: 'vite' },
    { label: 'Nuxt', value: 'nuxt' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Angular', value: 'angular' },
    { label: 'Ember', value: 'ember', disable: true },
    { label: 'Gatsby', value: 'gatsby', disable: true },
    { label: 'Astro', value: 'astro' },
];

const SecondPart = () => {
    const [data, setData] = useNewJobStore((state) => [state.data, state.setData], shallow);

    const handleMultiChange = (key: string) => (value: Option[]) => {
        if (key === 'skills' && value.length > 3) return;
        if (key === 'tools' && value.length > 7) return;
        setData((prev) => ({ ...prev, [key]: value.map((v) => v.value) }));
    };

    return (
        <div className="mt-8 h-fit w-full rounded-xl bg-white/80 p-8 text-sm shadow-small">
            <div className="flex justify-between gap-4">
                <div className="flex-1">
                    <p className="mb-1">Experience</p>
                    <EditExperience />
                </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <p>Skills required</p>
                <p>{data.skills.length}/3</p>
            </div>
            <MultipleSelector
                partialDelete={data.skills.length === 3}
                value={data.skills.map((skill) => ({ label: skill, value: skill })) as Option[]}
                onChange={handleMultiChange('skills')}
                options={OPTIONS}
                placeholder="Select skills required for this job..."
                emptyIndicator={
                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">no results found.</p>
                }
                className="mt-1 rounded-lg"
            />

            <div className="mt-4 flex items-center justify-between">
                <p>Tools required</p>
                <p>{data.tools.length}/7</p>
            </div>
            <MultipleSelector
                partialDelete={data.tools.length === 7}
                value={data.tools.map((tool) => ({ label: tool, value: tool })) as Option[]}
                onChange={handleMultiChange('tools')}
                options={OPTIONS}
                placeholder="Select skills required for this job..."
                emptyIndicator={
                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">no results found.</p>
                }
                className="mt-1 rounded-lg"
            />
        </div>
    );
};

export default SecondPart;
