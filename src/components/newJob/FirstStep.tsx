import useNewJobStore from 'src/stores/newJob';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { shallow } from 'zustand/shallow';
import classNames from 'classnames';
import { Counter } from '../common';
import { Slider } from '../ui/slider';

const fields = [
    {
        name: 'Engineering',
        img: '/macbook.png',
    },
    {
        name: 'Education',
        img: '/education.png',
    },
    {
        name: 'Designing',
        img: '/design.png',
    },
];

const FirstStep = () => {
    const [data, setData] = useNewJobStore((state) => [state.data, state.setData], shallow);

    return (
        <form className="h-full w-full p-8 text-sm">
            <h1 className="text-3xl">Let&apos;s set up your new job</h1>
            <label htmlFor="title" className="mt-8 block">
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

            <div className="flex items-start gap-8">
                <div>
                    <label htmlFor="title" className="mt-6 block">
                        Choose a job type
                    </label>

                    <div className="mt-2 flex gap-4">
                        <Button
                            onClick={() => setData({ type: 'employee' })}
                            type="button"
                            variant="outline"
                            className={classNames(
                                'h-fit rounded-md border-none px-8 py-4 font-semibold shadow-sm',
                                data?.type === 'employee' && 'bg-m-yellow hover:bg-m-yellow/80',
                            )}
                        >
                            Employee
                        </Button>
                        <Button
                            onClick={() => setData({ type: 'contractor' })}
                            type="button"
                            variant="outline"
                            className={classNames(
                                'h-fit rounded-md border-none bg-gray-100 px-8 py-4 font-semibold shadow-sm',
                                data?.type === 'contractor' && 'bg-m-yellow hover:bg-m-yellow/80',
                            )}
                        >
                            Contractor
                        </Button>
                    </div>
                </div>
            </div>

            <label htmlFor="title" className="mt-6 block">
                How many slots?
            </label>

            <div className="mt-2 flex gap-2">
                <Counter value={data.slots} setValue={(value) => setData({ slots: value })} />
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

            {/* <div className="mt-2 flex gap-4">
                {fields.map((field, index) => (
                    <Button
                        // onClick={setField(field.name)}
                        type="button"
                        variant="outline"
                        className={classNames(
                            'relative aspect-square h-28 w-[160px] items-start rounded-xl px-8 py-4 text-center text-sm shadow-medium',
                            // field.name === _field
                            //     ? 'border-primary bg-orange-300/30 hover:bg-orange-300/30'
                            //     : 'bg-white/20',
                        )}
                        key={index}
                    >
                        {field.name}
                        <img
                            src={field.img}
                            alt="illustration"
                            className="absolute bottom-2 h-16 w-16 object-contain"
                        />
                    </Button>
                ))}
            </div> */}
        </form>
    );
};

export default FirstStep;
