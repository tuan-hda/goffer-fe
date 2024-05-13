import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

const QuestionList = () => {
    return (
        <div className="mt-10 w-full space-y-20">
            {Array(10)
                .fill(0)
                .map((_, i) => (
                    <div key={i} className="flex gap-4" id={`q-${i}`}>
                        <div className="flex h-9 w-12 items-center justify-center rounded-xl font-mono font-bold shadow-medium">
                            {i + 1}
                        </div>
                        <div>
                            <p className="mt-[6px] text-base font-medium text-black">
                                What is the difference between var, let, and const in JavaScript?
                            </p>
                            <RadioGroup defaultValue="comfortable" className="space-y-4 pt-5 text-text opacity-80">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="default" id="r1" />
                                    <Label htmlFor="r1">Default</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="comfortable" id="r2" />
                                    <Label htmlFor="r2">Comfortable</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="compact" id="r3" />
                                    <Label htmlFor="r3">Compact</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default QuestionList;
