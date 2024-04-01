import MultipleSelector, { Option } from '../ui/mutli-selector';

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
    return (
        <div className="mt-8 h-fit w-full rounded-xl bg-white/70 p-8 text-sm shadow-small">
            <div className="flex items-center justify-between">
                <p>Skills required</p>
                <p>0/3</p>
            </div>
            <MultipleSelector
                options={OPTIONS}
                placeholder="Select skills required for this job..."
                emptyIndicator={
                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">no results found.</p>
                }
                className="mt-1 rounded-lg"
            />

            <div className="mt-4 flex items-center justify-between">
                <p>Tools required</p>
                <p>0/7</p>
            </div>
            <MultipleSelector
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
