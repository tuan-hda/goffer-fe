import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MultipleSelector, { Option } from '@/components/ui/mutli-selector';
import skillOptions from '@/data/skills';
import toolOptions from '@/data/tools';
import { useEffect, useState } from 'react';
import { TbSearch, TbSparkles } from 'react-icons/tb';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Filter = () => {
    const [value, setValue] = useState('');
    const [skills, setSkills] = useState<Option[]>([]);
    const [tools, setTools] = useState<Option[]>([]);
    const [, setSearchParams] = useSearchParams();

    const filter = () => {
        const query: Record<string, string> = {};
        if (value) {
            query.searchQuery = value;
        }
        if (skills.length) {
            query.skills = skills.map((skill) => skill.value).join(',');
        }
        if (tools.length) {
            query.tools = tools.map((tool) => tool.value).join(',');
        }
        setSearchParams(query);
    };

    useEffect(() => {
        const params = Object.fromEntries(new URLSearchParams(window.location.search).entries());
        setValue(params.searchQuery || '');
        setSkills(
            (params.skills || '')
                .split(',')
                .filter((skill) => skill)
                .map((skill) => ({ label: skill, value: skill })),
        );
        setTools(
            (params.tools || '')
                .split(',')
                .filter((tool) => tool)
                .map((tool) => ({ label: tool, value: tool })),
        );
    }, []);

    const clear = () => {
        setValue('');
        setSkills([]);
        setTools([]);
        setSearchParams({});
    };

    return (
        <div className="sticky top-10 mt-2 w-[300px] self-start text-sm">
            <div className="flex justify-between">
                <p className="text-lg font-medium">Filters</p>
            </div>

            <div className="relative mt-10 flex w-full min-w-0 flex-1 items-center">
                <TbSearch className="absolute left-4 text-base text-gray-400" />
                <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search..."
                    className="h-10 w-full flex-1 rounded-xl bg-white pl-12"
                />
            </div>
            <div>
                <p className="mb-1 mt-6">Skills</p>
                <MultipleSelector
                    value={skills}
                    onChange={(skills) => {
                        setSkills(skills);
                    }}
                    className="min-h-10 bg-white"
                    options={skillOptions}
                    maxSelected={5}
                />
            </div>

            <div>
                <p className="mb-1 mt-4">Tools</p>
                <MultipleSelector
                    value={tools}
                    onChange={setTools}
                    className="min-h-10 bg-white"
                    maxSelected={5}
                    options={toolOptions}
                />
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
                <Button onClick={clear} variant="outline" className="flex-1">
                    Clear
                </Button>
                <Button onClick={filter} className="flex-1" variant="black">
                    Apply filters
                </Button>
            </div>
        </div>
    );
};

export default Filter;
