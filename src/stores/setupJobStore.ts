import { Assessment } from '@/types/assessment.type';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
    data: {
        hasFeedback?: boolean;
        assessments: Assessment[];
        selectedAssessments: string[];
    };
};

type Action = {
    setData: (_: State['data'] | ((__: State['data']) => State['data'])) => void;
};

const initialData = {
    hasFeedback: false,
    assessments: [],
    selectedAssessments: [],
};

// Create your store, which includes both state and (optionally) actions
const useSetupJobStore = create<State & Action>()(
    immer((set, get) => ({
        data: initialData,
        setData: (data) => set(() => ({ data: typeof data === 'function' ? data(get().data) : data })),
    })),
);

export default useSetupJobStore;
