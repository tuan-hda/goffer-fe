export type NewJob = {
    title: string;
    type: 'contractor' | 'employee';
    description: string;
    field: string;
    slots: number;
    workingHours: number;
};
