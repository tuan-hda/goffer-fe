import { useEffect, useState } from 'react';
import { FileItemProps, FormItemProps, TextItemProps } from './Application';
import { Avatar } from '@nextui-org/react';
import { FormControl, FormField, FormItem, FormLabel } from 'src/components/ui/form';
import { Input } from 'src/components/ui/input';

const ImageField = ({ form, name, label }: FileItemProps) => {
    const [profilePictureURL, setProfilePictureURL] = useState<string>();
    useEffect(() => {
        return () => {
            if (profilePictureURL) {
                URL.revokeObjectURL(profilePictureURL);
            }
        };
    }, [profilePictureURL]);
    return (
        <div className="flex flex-row gap-3">
            <Avatar isBordered radius="sm" src={profilePictureURL} className="h-20 w-24 self-center text-large" />
            <FormField
                control={form.control}
                name={name}
                render={({ field: { onChange, onBlur, name, ref } }) => (
                    <FormItem className="my-2 flex flex-col justify-between">
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            {
                                <Input
                                    type="file"
                                    id={'imageField' + name}
                                    className="h-10 bg-white pt-2 text-gray-300"
                                    name={name}
                                    ref={ref}
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
                    </FormItem>
                )}
            />
        </div>
    );
};

const FileField = ({ form, name, label }: FileItemProps) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field: { onChange, onBlur, name, ref } }) => (
                <FormItem className="my-2 flex flex-col justify-between">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        {
                            <Input
                                type="file"
                                id={'fileField' + name}
                                className="h-10 bg-white pt-2 text-gray-300"
                                name={name}
                                ref={ref}
                                onBlur={onBlur}
                                onChange={(event) => {
                                    const files = event.target.files;
                                    if (files) {
                                        onChange(files[0]);
                                    }
                                }}
                            />
                        }
                    </FormControl>
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
                            <Input className="h-10 bg-white text-gray-300" placeholder={placeholder} {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
        )
    );
};

const FormFieldItem = (props: FormItemProps) => {
    const { type } = props;
    if (type === 'image') return <ImageField {...props} />;
    else if (type === 'file') return <FileField {...props} />;
    else if (type === 'text') return <TextField {...props} />;
};

export default FormFieldItem;
