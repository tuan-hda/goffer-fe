import { TbLocation } from 'react-icons/tb';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import useNewJobStore from '@/stores/newJob';
import { shallow } from 'zustand/shallow';
import { useEffect, useState } from 'react';

const EditLocation = () => {
    const [data, setData] = useNewJobStore((state) => [state.data, state.setData], shallow);
    const [isAnywhere, setIsAnywhere] = useState(true);

    useEffect(() => {
        setIsAnywhere(data.location === 'Work from anywhere');
    }, [data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData((prev) => ({ ...prev, location: e.target.value }));
    };

    const handleValueChange = (value: string) => {
        setIsAnywhere(value === 'Work from anywhere');
        if (value === 'Work from anywhere') setData((prev) => ({ ...prev, location: 'Work from anywhere' }));
    };

    return (
        <div className="min-w-0 flex-1">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        type="button"
                        variant="outline"
                        className="flex w-full flex-1 items-center justify-between rounded-lg text-left"
                    >
                        <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                            {data.location}
                        </span>
                        <TbLocation className="flex-shrink-0 text-lg" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="rounded-lg text-sm">
                    <RadioGroup
                        value={isAnywhere ? 'Work from anywhere' : 'Custom'}
                        onValueChange={handleValueChange}
                        defaultValue="option-one"
                    >
                        <p className="mb-2 text-sm">Location</p>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Work from anywhere" id="option-one" />
                            <Label htmlFor="option-one">Work from anywhere</Label>
                        </div>
                        <div className="my-2 border-t border-t-gray-400"></div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Custom" id="option-two" />
                            <Label htmlFor="option-two">A specific location</Label>
                        </div>
                        <Input
                            value={data.location === 'Work from anywhere' ? '' : data.location}
                            onChange={handleChange}
                            className="mt-1"
                            placeholder="Your address here..."
                        />
                    </RadioGroup>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default EditLocation;
