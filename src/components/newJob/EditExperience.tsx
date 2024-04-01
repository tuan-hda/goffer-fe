import classNames from 'classnames';
import { useState } from 'react';
import { TbCheck } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const frameworks = [
    {
        value: '<1 year',
        label: '<1 year',
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
        value: '4-10 years',
        label: '4-10 years',
    },
    {
        value: '10+ years',
        label: '10+ years',
    },
];

const EditExperience = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('<1 year');

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className="flex-1" asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between rounded-lg"
                >
                    {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : 'Choose experience range...'}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[556px] rounded-lg p-0">
                <Command>
                    <CommandInput placeholder="Work anytime" className="h-9" />
                    <CommandEmpty>No experience range found</CommandEmpty>
                    <CommandGroup>
                        {frameworks.map((framework) => (
                            <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? '' : currentValue);
                                    setOpen(false);
                                }}
                            >
                                {framework.label}
                                <TbCheck
                                    className={classNames(
                                        'ml-auto h-4 w-4',
                                        value === framework.value ? 'opacity-100' : 'opacity-0',
                                    )}
                                />
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default EditExperience;
