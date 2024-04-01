import { TbMinus, TbPlus } from 'react-icons/tb';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import validator from 'validator';

type CounterProps = {
    value: number;
    setValue: (_: number) => void;
};

const Counter = ({ value = 1, setValue }: CounterProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (validator.isNumeric(e.target.value) && parseInt(e.target.value) >= 0) {
            setValue(parseInt(e.target.value));
        }
    };

    return (
        <div className="flex items-center gap-2">
            <Button
                onClick={() => setValue(Math.max(1, value - 1))}
                type="button"
                variant="ghost"
                className="aspect-square rounded-full border border-gray-200 bg-gray-200"
                size="icon"
            >
                <TbMinus />
            </Button>
            <Input className="w-16 rounded-full bg-white text-center" value={value} onChange={handleChange} />
            <Button
                onClick={() => setValue(value + 1)}
                type="button"
                variant="ghost"
                className="aspect-square rounded-full border border-gray-200 bg-gray-200"
                size="icon"
            >
                <TbPlus />
            </Button>
        </div>
    );
};

export default Counter;
