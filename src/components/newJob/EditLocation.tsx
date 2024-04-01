import { TbLocation } from 'react-icons/tb';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { RadioGroup, RadioGroupItem } from 'src/components/ui/radio-group';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

const EditLocation = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    type="button"
                    variant="outline"
                    className="flex w-full flex-1 items-center justify-between rounded-lg text-left"
                >
                    <span>Work from anywhere</span>
                    <TbLocation className="text-lg" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="rounded-lg text-sm">
                <RadioGroup defaultValue="option-one">
                    <p className="mb-2 text-sm">Location</p>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Work from anywhere</Label>
                    </div>
                    <div className="my-2 border-t border-t-gray-400"></div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">A specific location</Label>
                    </div>
                    <Input className="mt-1" placeholder="Your address here..." />
                </RadioGroup>
            </PopoverContent>
        </Popover>
    );
};

export default EditLocation;
