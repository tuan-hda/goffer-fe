import classNames from 'classnames';
import { useState } from 'react';
import { TbCheck, TbTimeDuration0 } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const frameworks = [
    {
        value: 'next.js',
        label: 'Next.js',
    },
    {
        value: 'sveltekit',
        label: 'SvelteKit',
    },
    {
        value: 'nuxt.js',
        label: 'Nuxt.js',
    },
    {
        value: 'remix',
        label: 'Remix',
    },
    {
        value: 'astro',
        label: 'Astro',
    },
];

const EditTime = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className="flex-1" asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between rounded-lg"
                >
                    {value ? frameworks.find((framework) => framework.value === value)?.label : 'Work anytime...'}
                    <TbTimeDuration0 className="ml-2 h-4 w-4 shrink-0 text-lg" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="rounded-lg p-0">
                <Command>
                    <CommandInput placeholder="Work anytime" className="h-9" />
                    <CommandEmpty>No framework found.</CommandEmpty>
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

export default EditTime;
