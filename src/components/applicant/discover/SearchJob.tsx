import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MultipleSelector from '@/components/ui/mutli-selector';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import skills from '@/data/skills';
import tools from '@/data/tools';
import { Image } from '@nextui-org/react';
import { TbSearch } from 'react-icons/tb';

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

const SearchJob = () => {
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
                <div className="flex h-16 max-w-[300px] flex-1 items-center justify-between rounded-3xl bg-[#333] px-5 text-white">
                    <p className="font-medium">Search result</p>
                    <p className="text-gray-300">20 jobs found</p>
                </div>
                <div className="relative z-[10] mb-4 flex flex-1 items-center">
                    <Input
                        placeholder="Your magical words here..."
                        className="h-16 flex-1 rounded-3xl bg-white/90 pl-12 pr-48 shadow-medium"
                    />
                    <TbSearch className="absolute left-4 text-xl" />
                    <div className="absolute right-3 flex items-center gap-6">
                        <button>Clear</button>
                        <Button className="rounded-2xl p-5" variant="black">
                            <span>Find work</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="relative z-[11] grid grid-cols-5 items-center gap-4">
                <Select>
                    <SelectTrigger className="-mt-[10px] h-10 rounded-2xl bg-white">
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
                        <Button
                            variant="outline"
                            className="-mt-[10px] h-10 w-full justify-start rounded-2xl bg-white/90"
                        >
                            a
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="rounded-2xl p-5 text-sm">
                        <p className="font-medium">Specify salary range</p>
                        <div className="mt-4 flex flex-row gap-3">
                            <Input className="" placeholder="Salary from" />
                            <Input className="" placeholder="Salary to" />
                        </div>
                        <div className="mt-4 flex justify-end gap-4">
                            <button>Clear</button>
                            <Button variant="black" className="text-sm" size="sm">
                                Apply filter
                            </Button>
                        </div>
                    </PopoverContent>
                </Popover>

                <Select>
                    <SelectTrigger className="-mt-[10px] h-10 rounded-2xl bg-white">
                        <SelectValue className="bg-white/90" placeholder="Date posted" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="past-24hrs">Past 24 hours</SelectItem>
                        <SelectItem value="past-week">Past week</SelectItem>
                        <SelectItem value="past-month">Past month</SelectItem>
                    </SelectContent>
                </Select>

                <MultipleSelector className="h-10 rounded-2xl bg-white/90" maxSelected={2} options={skills} />

                <MultipleSelector className="h-10 rounded-2xl bg-white/90" maxSelected={2} options={tools} />
            </div>
        </div>
    );
};

export default SearchJob;
