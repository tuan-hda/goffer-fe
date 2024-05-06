import { Input } from '@/components/ui/input';
import MultipleSelector from '@/components/ui/mutli-selector';
import { TbSparkles } from 'react-icons/tb';

const Filter = () => {
    return (
        <div className="mt-2 w-[300px] text-sm">
            <div className="flex justify-between">
                <p className="text-lg font-medium">Filters</p>
                <button>Clear filters</button>
            </div>
            <div>
                <p className="mb-1 mt-10">Skills</p>
                <MultipleSelector className="h-10 bg-white" options={[]} />
            </div>

            <div>
                <p className="mb-1 mt-4">Tools</p>
                <MultipleSelector className="h-10 bg-white" options={[]} />
            </div>

            <div>
                <p className="mb-1 mt-4">Location</p>
                <Input className="h-10 bg-white" />
            </div>

            <div className="mt-8 flex h-[300px] flex-col justify-center rounded-3xl bg-[#151514] p-7 text-xl text-white">
                Expand your network by connecting with people who share your interests.
                <TbSparkles className="ml-auto mt-auto text-9xl" />
            </div>
        </div>
    );
};

export default Filter;
