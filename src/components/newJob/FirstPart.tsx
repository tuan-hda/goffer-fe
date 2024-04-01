import useNewJobStore from '@/stores/newJob';
import { Input } from '../ui/input';
import { shallow } from 'zustand/shallow';
import { Counter } from '../common';
import { Slider } from '../ui/slider';
import EditLocation from './EditLocation';
import EditTime from './EditTime';
import { TbCoin } from 'react-icons/tb';

const FirstStep = () => {
    const [data, setData] = useNewJobStore((state) => [state.data, state.setData], shallow);

    return (
        <div className="mt-4 h-fit w-full rounded-xl bg-white/80 p-8 text-sm shadow-small">
            <label htmlFor="title" className="block">
                What kind of job is this?
            </label>
            <div className="mt-2">
                <Input
                    onChange={(e) => setData({ title: e.target.value })}
                    value={data?.title}
                    className="border-0 p-0 text-2xl shadow-none !ring-0"
                    id="title"
                />
                <div className="mt-1 border-t border-gray-500" />
            </div>

            <div className="mt-6 flex-1">
                <label htmlFor="title" className="block">
                    How many slots?
                </label>

                <div className="mt-1 flex gap-2">
                    <Counter value={data.slots} setValue={(value) => setData({ slots: value })} />
                </div>
            </div>

            <div className="mt-6 flex gap-4">
                <div className="flex-1">
                    <label htmlFor="salary-from">Salary from</label>
                    <div className="relative">
                        <TbCoin className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-500" />
                        <Input id="salary-from" className="mt-1 rounded-lg pl-9" placeholder="Monthly salary..." />
                    </div>
                </div>
                <div className="flex-1">
                    <label htmlFor="salary-to">Salary to</label>
                    <div className="relative">
                        <TbCoin className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-500" />
                        <Input id="salary-to" className="mt-1 rounded-lg pl-9" placeholder="Monthly salary..." />
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
                <label htmlFor="title" className="block">
                    Working hours per week
                </label>
                <div className="rounded-lg bg-black px-2 py-0.5 text-white">{data.workingHours} hours</div>
            </div>
            <Slider
                className="mt-3"
                onValueChange={(v) => setData({ workingHours: v[0] })}
                value={[data.workingHours]}
                max={48}
                min={1}
                step={1}
            />

            <p className="mt-6 block">Any requirements for location and time?</p>
            <div className="mt-3 flex justify-between gap-4">
                <div className="flex-1">
                    <EditLocation />
                </div>
                <div className="flex-1">
                    <EditTime />
                </div>
            </div>
        </div>
    );
};

export default FirstStep;
