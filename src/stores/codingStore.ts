import { languageOptions } from '@/configs/languageOptions';
import { CodingLanguage, SubmissionResponse } from '@/types/coding.type';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
    submissions: Record<
        string,
        {
            code?: string;
            lang?: CodingLanguage;
        }
    >;
    input: string;
    currentTab: 'input' | 'output';
    results?: SubmissionResponse[];
};

type Actions = {
    setSubmissions: (value: State['submissions'] | ((value: State['submissions']) => State['submissions'])) => void;
    setInput: (value: string) => void;
    setCurrentTab: (value: State['currentTab']) => void;
    setResults: (value: SubmissionResponse[]) => void;
};

const useCodingStore = create<State & Actions>()(
    immer((set) => ({
        submissions: {},
        result: undefined,
        currentTab: 'input',
        input: '',
        setInput(value) {
            set((state) => {
                state.input = value;
            });
        },
        setSubmissions(value) {
            set((state) => {
                state.submissions = typeof value === 'function' ? value(useCodingStore.getState().submissions) : value;
            });
        },
        setCurrentTab(value) {
            set((state) => {
                state.currentTab = value;
            });
        },
        setResults(value) {
            set((state) => {
                state.results = value;
            });
        },
    })),
);

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('CodingStore', useCodingStore);
}

export default useCodingStore;
