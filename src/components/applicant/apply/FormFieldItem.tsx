import { useEffect, useRef, useState } from 'react';
import { Avatar } from '@nextui-org/react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { defaultCountries, FlagImage, parseCountry, usePhoneInput } from 'react-international-phone';
 
import 'react-international-phone/style.css';
import { useController } from 'react-hook-form';
import { Command, CommandList, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CaretSortIcon } from '@radix-ui/react-icons';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { FileItemProps, FormItemProps, TextItemProps } from '@/types/application.type';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { UploadPopover } from '@/components/common';

const ImageField = ({ form, name, label }: FileItemProps) => {
    const { data: user } = useSelfProfileQuery();

    const [profilePictureURL, setProfilePictureURL] = useState<string>();
    const fileInputRef = useRef<null | HTMLInputElement>(null);

    useEffect(() => {
        user?.avatar && setProfilePictureURL(user.avatar);
    }, [user]);
    useEffect(() => {
        return () => {
            if (profilePictureURL) {
                URL.revokeObjectURL(profilePictureURL);
            }
        };
    }, [profilePictureURL]);
    return (
        <div className="flex w-full flex-row gap-3">
            <Avatar
                isBordered
                color="primary"
                radius="sm"
                src={profilePictureURL}
                onClick={() => fileInputRef.current?.click()}
                className="aspect-square h-20 w-20 self-center text-large"
            />
            <FormField
                control={form.control}
                name={name}
                render={({ field: { onChange, onBlur, name, ref } }) => (
                    <FormItem className="my-2 flex w-[calc(100%-92px)] flex-col justify-between">
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            {
                                <Input
                                    type="file"
                                    id={'imageField' + name}
                                    className="h-10 bg-white pt-2 text-gray-500 focus-visible:border-none focus-visible:ring-1 focus-visible:ring-black/70"
                                    name={name}
                                    accept="image/*"
                                    ref={(e) => {
                                        ref(e);
                                        fileInputRef.current = e;
                                    }}
                                    onBlur={onBlur}
                                    onChange={(event) => {
                                        const files = event.target.files;
                                        if (files && files[0]) {
                                            const file = files[0];
                                            onChange(file);
                                            const fileURL = URL.createObjectURL(file);
                                            setProfilePictureURL(fileURL);
                                        }
                                    }}
                                />
                            }
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

const FileField = ({ form, name, label }: FileItemProps) => {
    const resumeUrl = form.watch('resume');
    const fileName = resumeUrl ? resumeUrl.split('/').pop() : null;

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field: { value, ref } }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <UploadPopover
                            onAttach={async (data) => {
                                form.setValue('resume', data);
                            }}
                            fileUrl={value}
                            trigger={
                                <Button
                                    ref={ref}
                                    variant="outline"
                                    className="h-10 w-full items-center justify-start border-1 border-input bg-white text-gray-500 transition group-hover:opacity-100"
                                >
                                    {value ? (
                                        <>
                                            <BsFileEarmarkPdf className="text-2xl text-red-500" />
                                            <p className="ml-2 truncate text-text">{fileName}</p>
                                        </>
                                    ) : (
                                        <p className="font-semibold text-text">
                                            Choose File
                                            <span className="ml-3 font-normal text-gray-500">No file chosen</span>
                                        </p>
                                    )}
                                </Button>
                            }
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

const TextField = ({ form, name, label, placeholder }: TextItemProps) => {
    return (
        name && (
            <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Input
                                className="h-10 bg-white text-text focus-visible:border-none focus-visible:ring-1 focus-visible:ring-black/70"
                                placeholder={placeholder}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        )
    );
};

const PhoneField = ({ form, label, placeholder }: TextItemProps) => {
    const [open, setOpen] = useState(false);

    const { field } = useController({
        name: 'phoneNumber',
        control: form.control,
    });
    const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } = usePhoneInput({
        defaultCountry: 'us',
        value: field.value,
        countries: defaultCountries,
        onChange: (data) => {
            field.onChange(data.phone);
        },
    });

    return (
        <FormField
            control={form.control}
            name={'phoneNumber'}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <div className="flex h-10 rounded-md shadow-sm transition-colors focus-within:ring-1 focus-within:ring-black/70">
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        className="h-full w-fit justify-between rounded-r-none shadow-none focus-visible:ring-black/70"
                                    >
                                        <FlagImage iso2={country.iso2} />
                                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-fit p-0">
                                    <Command>
                                        <CommandList>
                                            <CommandInput placeholder="Search country..." />
                                            <CommandEmpty>No country found.</CommandEmpty>
                                            <CommandGroup>
                                                {defaultCountries.map((c) => {
                                                    const item = parseCountry(c);
                                                    return (
                                                        <CommandItem
                                                            key={item.iso2}
                                                            value={item.name}
                                                            onSelect={() => {
                                                                setCountry(item.iso2);
                                                                setOpen(false);
                                                            }}
                                                        >
                                                            <FlagImage
                                                                iso2={item.iso2}
                                                                style={{ marginRight: '8px' }}
                                                            />
                                                            <span className="mr-2">{item.name}</span>
                                                            <span className="text-text">+{item.dialCode}</span>
                                                        </CommandItem>
                                                    );
                                                })}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <Input
                                className="h-10 rounded-l-none bg-white text-text shadow-none focus-visible:border-none focus-visible:ring-1 focus-visible:ring-black/70"
                                placeholder={placeholder}
                                {...field}
                                onChange={handlePhoneValueChange}
                                value={inputValue}
                                ref={inputRef}
                            />
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

const FormFieldItem = (props: FormItemProps) => {
    const { type } = props;
    if (type === 'image') return <ImageField {...props} />;
    else if (type === 'file') return <FileField {...props} />;
    else if (type === 'text') return <TextField {...props} />;
    else if (type === 'phone number') return <PhoneField {...props} />;
};

export default FormFieldItem;
