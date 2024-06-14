import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';
import { formSchema } from '@/utils/application';
import { Job } from './job.type';
import { User } from './user.type';

export type StringSchemaFields = {
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

export type NewApply = z.infer<typeof formSchema>;

export type Apply = NewApply & {
    id: string;
    job: Job;
    phase: string;
    owner: User;
};

export type EditApply = Partial<Apply>;

export type AnswerProps = {
    questionId: string;
    audioUrl: string;
    duration: number;
};
