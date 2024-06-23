import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MultipleSelector, { Option } from '@/components/ui/mutli-selector';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { experienceList } from '@/data/experiences';
import skills from '@/data/skills';
import tools from '@/data/tools';
import { Image } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { TbSearch } from 'react-icons/tb';
import { useNavigate, useSearchParams } from 'react-router-dom';

const SearchJob = () => {
    const [range, setRange] = useState('');
    const [value, setValue] = useState('');
    const [salaryRange, setSalaryRange] = useState({ from: '', to: '' });
    const [yoe, setYoe] = useState('');
    const [selectedSkills, setSelectedSkills] = useState<Option[]>([]);
    const [selectedTools, setSelectedTools] = useState<Option[]>([]);
    const [, setSearchParams] = useSearchParams();

    const clearRange = () => {
        setSalaryRange({ from: '', to: '' });
        setRange('');
    };

    const findWork = () => {
        const query: Record<string, string> = {};
        if (value) query.searchQuery = value;
        if (salaryRange.from) {
            query.salaryFrom = salaryRange.from;
        }
        if (salaryRange.to) {
            query.salaryTo = salaryRange.to;
        }
        if (yoe) query.experience = yoe;
        if (selectedSkills.length) query.skills = selectedSkills.map((skill) => skill.value).join(',');
        if (selectedTools.length) query.tools = selectedTools.map((tool) => tool.value).join(',');
        setSearchParams(query);
    };

    const clear = () => {
        setValue('');
        setRange('');
        setSalaryRange({ from: '', to: '' });
        setYoe('');
        setSelectedSkills([]);
        setSelectedTools([]);
        setSearchParams({});
    };

    return (
        <div className="relative mt-10 w-full rounded-[36px] bg-beige/30 p-14">
            <p className="relative z-[11] font-serif text-5xl font-black">Search jobs</p>
            <p className="relative z-[11] mt-7 text-base">
                Discover best jobs for you based on your skills and experience, around the world.
            </p>
            <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden">
                <Image
                    classNames={{
                        wrapper:
                            'pointer-events-none absolute -right-7 -top-12 h-[670px] w-[670px] object-contain rotate-[270deg]',
                    }}
                    src="/shape9.png"
                />
            </div>
            <div className="mt-12 flex gap-4">
                <div className="relative z-[10] mb-4 flex flex-1 items-center">
                    <Input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Your magical words here..."
                        className="h-16 flex-1 rounded-3xl bg-white/50 pl-12 pr-48 shadow-medium backdrop-blur-xl"
                    />
                    <TbSearch className="absolute left-4 text-xl" />
                    <div className="absolute right-3 flex items-center gap-6">
                        <button onClick={clear}>Clear</button>
                        <Button onClick={findWork} className="rounded-2xl p-5" variant="black">
                            <span>Apply filters</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="relative z-[11] grid grid-cols-4 gap-4">
                <Select value={yoe} onValueChange={setYoe}>
                    <SelectTrigger className="h-10 rounded-2xl bg-white">
                        <SelectValue placeholder="Years of exp" />
                    </SelectTrigger>
                    <SelectContent>
                        {experienceList.map((exp) => (
                            <SelectItem value={exp.value} key={exp.value}>
                                {exp.value}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className="h-10 w-full justify-start rounded-2xl bg-white/90">
                            {range || 'Salary range'}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="rounded-2xl p-5 text-sm">
                        <p className="font-medium">Specify salary range</p>
                        <div className="mt-4 flex flex-row gap-3">
                            <Input
                                className=""
                                placeholder="Salary from"
                                value={salaryRange.from}
                                onChange={(e) =>
                                    setSalaryRange((prev) => ({
                                        ...prev,
                                        from: e.target.value,
                                    }))
                                }
                            />
                            <Input
                                className=""
                                placeholder="Salary to"
                                value={salaryRange.to}
                                onChange={(e) =>
                                    setSalaryRange((prev) => ({
                                        ...prev,
                                        to: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="mt-4 flex justify-end gap-4">
                            <button onClick={clearRange}>Clear</button>
                            <Button
                                onClick={() => setRange(`${salaryRange.from} - ${salaryRange.to}`)}
                                variant="black"
                                className="text-sm"
                                size="sm"
                            >
                                OK
                            </Button>
                        </div>
                    </PopoverContent>
                </Popover>

                <MultipleSelector
                    value={selectedSkills}
                    onChange={setSelectedSkills}
                    placeholder="Skills"
                    className="min-h-10 rounded-2xl bg-white/90"
                    maxSelected={3}
                    options={skills}
                />

                <MultipleSelector
                    value={selectedTools}
                    onChange={setSelectedTools}
                    placeholder="Tools"
                    className="min-h-10 rounded-2xl bg-white/90"
                    maxSelected={5}
                    options={tools}
                />
            </div>
        </div>
    );
};

export default SearchJob;
