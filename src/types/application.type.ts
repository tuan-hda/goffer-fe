import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';
import { formSchema } from '@/utils/application';
import { JobResponse } from './job.type';
import { User } from './user.type';
import { Answer } from './answer.type';

export type StringSchemaFields = {
    [P in keyof z.infer<typeof formSchema>]: z.infer<typeof formSchema>[P] extends string | undefined ? P : never;
};

export type FileItemProps = {
    form: UseFormReturn<z.infer<typeof formSchema>>;
    type: 'image' | 'file';
    label: string;
    name: keyof z.infer<typeof formSchema>;
    disabled?: boolean;
};

export type TextItemProps = {
    form: UseFormReturn<z.infer<typeof formSchema>>;
    type: 'text' | 'phone number';
    label: string;
    name: StringSchemaFields[keyof StringSchemaFields];
    placeholder?: string;
    disabled?: boolean;
};

export type FormItemProps = FileItemProps | TextItemProps;

export type NewApply = z.infer<typeof formSchema> & {
    job?: string;
};

export type Apply = Omit<NewApply, 'job' | 'profilePicture' | 'resume'> & {
    id: string;
    job: JobResponse;
    phase: string;
    owner?: User;
    profilePicture: string;
    resume: string;
    createdAt: string;
    updatedAt: string;
    match?: number;
    rating?: number;
    assessmentAvg?: number;
    reason?: string;
    answers?: Answer[];
    timeToSubmit?: Date;
};

export type EditApply = Partial<NewApply> & {
    phase?: string;
    timeToSubmit?: Date;
};

export type ApplyResponse = Omit<EditApply, 'job' | 'applicant'> & {
    id: string;
    job: JobResponse;
    applicant: User;
    answers: Answer[];
};

export type ApplyCount = {
    _id: string;
    count: number;
};
