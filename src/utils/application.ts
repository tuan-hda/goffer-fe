import { z } from 'zod';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { FormItemProps } from '@/types/application.type';

function isValidPhoneNumber(phoneNumber: string): boolean {
    try {
        const parsedNumber = parsePhoneNumberFromString(phoneNumber);
        return parsedNumber ? parsedNumber.isValid() : false;
    } catch {
        return false;
    }
}

export const formSchema = z.object({
    profilePicture: z.string().url().optional(),
    resume: z
        .string()
        .url()
        .optional()
        .refine((value) => value !== '', {
            message: 'Please select a valid file',
        }),
    name: z.string().min(2, { message: 'Please enter your full name' }),
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

export const formFields = [
    {
        type: 'file',
        label: 'Upload resume',
        name: 'resume',
    },
    {
        type: 'text',
        label: 'Full name',
        name: 'name',
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
