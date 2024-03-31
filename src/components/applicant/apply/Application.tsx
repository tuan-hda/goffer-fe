import { zodResolver } from '@hookform/resolvers/zod';
import { UseFormReturn, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from 'src/components/ui/form';
import FormFieldItem from './FormFieldItem';
import ProgressFooter from '../common/ProgressFooter';
import { useNavigate } from 'react-router-dom';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

function isValidPhoneNumber(phoneNumber: string): boolean {
    try {
        const parsedNumber = parsePhoneNumberFromString(phoneNumber);
        return parsedNumber ? parsedNumber.isValid() : false;
    } catch {
        return false;
    }
}

const formSchema = z.object({
    profilePicture: z.instanceof(File).optional(),
    resume: z
        .instanceof(File)
        .optional()
        .refine((file) => file, {
            message: 'Please select a valid file',
        }),
    fullName: z.string().min(2, { message: 'Please enter your full name' }),
    location: z.string().optional(),
    email: z.string().email({ message: 'Please enter a valid email' }),
    phoneNumber: z.string().refine((value) => isValidPhoneNumber(value), {
        message: 'Please enter a valid phone number',
    }),
    role: z.string().min(1, { message: 'Please enter your job role' }),
    lastCompany: z.string().optional(),
    linkedIn: z.string().optional(),
    personalWebsite: z.string().optional(),
});

type StringSchemaFields = {
    [P in keyof z.infer<typeof formSchema>]: z.infer<typeof formSchema>[P] extends string | undefined ? P : never;
};

export type FileItemProps = {
    form: UseFormReturn<z.infer<typeof formSchema>>;
    type: 'image' | 'file';
    label: string;
    name: keyof z.infer<typeof formSchema>;
};

export type TextItemProps = {
    form: UseFormReturn<z.infer<typeof formSchema>>;
    type: 'text' | 'phone number';
    label: string;
    name: StringSchemaFields[keyof StringSchemaFields];
    placeholder?: string;
};

export type FormItemProps = FileItemProps | TextItemProps;

const fields = [
    {
        type: 'image',
        label: 'Profile picture (optional)',
        name: 'profilePicture',
    },
    {
        type: 'file',
        label: 'Upload resume',
        name: 'resume',
    },
    {
        type: 'text',
        label: 'Full name',
        name: 'fullName',
        placeholder: 'Enter your full name',
    },
    {
        type: 'text',
        label: 'Location (optional)',
        name: 'location',
        placeholder: 'San Francisco, CA',
    },
    {
        type: 'text',
        label: 'Email',
        name: 'email',
        placeholder: 'your@email.com',
    },
    {
        type: 'phone number',
        label: 'Phone number',
        name: 'phoneNumber',
        placeholder: 'Your phone number',
    },
    {
        type: 'text',
        label: 'Role',
        name: 'role',
        placeholder: 'Job headline (e.g. Project Manager)',
    },
    {
        type: 'text',
        label: 'Last Company (optional)',
        name: 'lastCompany',
        placeholder: 'Your current (or last) employer',
    },
    {
        type: 'text',
        label: 'LinkedIn',
        name: 'linkedIn',
        placeholder: 'Enter your LinkedIn URL',
    },
    {
        type: 'text',
        label: 'Personal website',
        name: 'personalWebsite',
        placeholder: 'Enter your Website URL',
    },
] as FormItemProps[];

const Application = () => {
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            profilePicture: undefined,
            resume: undefined,
            fullName: '',
            location: '',
            email: '',
            phoneNumber: '',
            role: '',
            lastCompany: '',
            linkedIn: '',
            personalWebsite: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <div className="mx-auto flex max-w-screen-md flex-col gap-9 p-7 pb-36">
            {/* Title */}
            <div>
                <p className="font-serif text-xl font-medium text-default-500 underline">Goffer</p>
                <p className="font-serif text-5xl font-black text-text">Senior Frontend Developer (React)</p>
                <p>
                    <span className="font-serif text-sm font-medium capitalize text-default-500">
                        Work from Anywhere
                    </span>
                    <span className="mx-2 font-serif text-sm font-medium text-default-500">•</span>
                    <span className="font-serif text-sm font-medium text-default-500">Full time</span>
                </p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex grid-cols-2 flex-col gap-6 md:grid">
                    {fields.map((field) => (
                        <FormFieldItem {...field} form={form} key={field.name} />
                    ))}
                    <ProgressFooter
                        rate={20}
                        onStartPress={() => navigate(-1)}
                        endContent={'Next'}
                        endProps={{ type: 'submit' }}
                    />
                </form>
            </Form>
        </div>
    );
};

export default Application;
