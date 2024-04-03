import { NewJob } from '@/types/job.type';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
    data: NewJob;
};

type Action = {
    setData: (_: State['data'] | ((__: State['data']) => State['data'])) => void;
};

const initialData: NewJob = {
    title: '',
    description: '',
    slots: 1,
    workingHours: 40,
    salaryFrom: '',
    skills: [],
    experience: '<1 year',
    tools: [],
    location: 'Work from anywhere',
    time: 'Any working time',
    salaryTo: '',
    orgId: '',
};

const useNewJobStore = create<State & Action>()(
    immer((set) => ({
        data: initialData,
        setData: (data) =>
            set((state) => {
                state.data = typeof data === 'function' ? data(state.data) : data;
            }),
    })),
);

export default useNewJobStore;
