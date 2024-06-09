import { NewAssessment } from '@/types/assessment.type'; // Import the new type
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { enableMapSet } from 'immer';

enableMapSet();

export const initialData: NewAssessment = {
    title: '',
    description: '',
    questions: new Map(),
    duration: 5,
    org: '',
    job: '',
    order: 0,
    status: 'draft',
    type: 'mcq',
};

type State = {
    assessment: NewAssessment;
    error: string;
    loading: boolean;
};

type Action = {
    setAssessment: (_: NewAssessment | ((__: NewAssessment) => NewAssessment)) => void;
    clear: () => void;
    setError: (_: string) => void;
    setLoading: (_: boolean) => void;
    getProcessedAssessment: () => NewAssessment;
};

const useNewAssessmentStore = create<State & Action>()(
    immer((set, get) => ({
        assessment: initialData,
        setAssessment: (assessment) =>
            set((state) => {
                state.assessment = typeof assessment === 'function' ? assessment(state.assessment) : assessment;
            }),
        clear: () =>
            set((state) => {
                state.assessment = initialData;
            }),
        error: '',
        setError: (error) => {
            set((state) => {
                state.error = error;
            });
        },
        loading: false,
        setLoading: (value) => {
            set((state) => {
                state.loading = value;
            });
        },
        getProcessedAssessment() {
            const assessment = { ...get().assessment };
            Object.keys(assessment).forEach((key) => {
                if (!assessment[key as keyof NewAssessment]) {
                    delete assessment[key as keyof NewAssessment];
                }
            });

            return assessment;
        },
    })),
);

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('AssessmentStore', useNewAssessmentStore);
}

export default useNewAssessmentStore;
