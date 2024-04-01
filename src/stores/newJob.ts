import { NewJob } from '@/types/job.type';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
    data: NewJob;
};

type Action = {
    setData: (_: Partial<State['data']>) => void;
};

const initialData: NewJob = {
    title: '',
    type: 'employee',
    description: '',
    field: '',
    slots: 1,
    workingHours: 40,
};

const useNewJobStore = create<State & Action>()(
    immer((set) => ({
        data: initialData,
        setData: (data) =>
            set((prev) => {
                prev.data = { ...prev.data, ...data };
            }),
    })),
);

export default useNewJobStore;
