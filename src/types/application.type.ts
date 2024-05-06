import { Application } from '@/components/applicant/apply';
import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';
import { formSchema } from '@/utils/application';

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

export type FormProps = z.infer<typeof formSchema>;

export type AnswerProps = {
    questionId: string;
    audioUrl: string;
    duration: number;
};

export type ApplicationProps = FormProps & {
    job: string;
    applicant: string;
    answers: string[];
};
