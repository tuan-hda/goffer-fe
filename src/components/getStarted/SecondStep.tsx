import { Button, Input } from '@nextui-org/react';
import { useMemo, useState } from 'react';
import { TbCheck, TbChevronLeft, TbX } from 'react-icons/tb';
import { StartedInfo } from '@/types/start.type';

export type SecondStepProps = {
    onContinue: () => void;
    onBack: () => void;
    info: StartedInfo;
    setInfo: React.Dispatch<React.SetStateAction<StartedInfo>>;
};

const SecondStep = ({ onContinue, onBack, info, setInfo }: SecondStepProps) => {
    const [value, setValue] = useState<string>('');
    const skills = useMemo(() => info.skills || new Set<string>(), [info.skills]);
    const setSkills = (skills: Set<string>) => {
        setInfo((prev) => ({ ...prev, skills }));
    };

    const addSkill = (skill: string) => {
        if (skill) {
            const newSkills = new Set(skills);
            newSkills.add(skill);
            setSkills(newSkills);
            setValue('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addSkill(value);
        }
    };

    const handleDelete = (index: number) => () => {
        const newSkills = new Set(skills);
        newSkills.delete(Array.from(skills)[index]);
        setSkills(newSkills);
    };

    return (
        <div className="flex-1">
            <p className="text-sm font-light text-black/40">Step 2/4</p>
            <h1 className="mt-4 font-serif text-4xl">Tell us your skills</h1>
            {skills.size > 0 && (
                <div className="mt-4 flex flex-wrap gap-1">
                    {Array.from(skills).map((skill, index) => (
                        <div
                            key={index}
                            className="group relative rounded-xl border border-gray-200 bg-white p-2 text-sm text-text"
                        >
                            {skill}
                            <button
                                onClick={handleDelete(index)}
                                className="absolute -right-1 -top-2 hidden rounded-full border bg-white p-0.5 group-hover:block"
                            >
                                <TbX />
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <form>
                <div className="mt-5 flex gap-2">
                    <Input
                        onKeyDown={handleKeyDown}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="w-[240px]"
                        placeholder="Type and enter to add"
                        classNames={{
                            inputWrapper: 'h-10',
                        }}
                    />
                    <Button onClick={() => addSkill(value)} className="flex items-center" variant="flat">
                        <TbCheck /> Add
                    </Button>
                </div>
                <p className="mt-2 text-sm text-text/60">Add at least 1 skill</p>
                <div className="mt-6 flex items-center gap-3">
                    <Button onClick={onBack} isIconOnly radius="full" variant="flat">
                        <TbChevronLeft className="text-lg" />
                    </Button>
                    <Button type="submit" isDisabled={skills.size === 0} onClick={onContinue} size="md" color="primary">
                        Continue
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SecondStep;
