import { languageOptions } from '@/configs/languageOptions';
import { CodingLanguage, SubmissionResponse } from '@/types/coding.type';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
    code: string;
    config: {
        lang: CodingLanguage;
    };
    input: string;
    currentTab: 'input' | 'output';
    results?: SubmissionResponse[];
};

type Actions = {
    setCode: (code: string) => void;
    setConfig: (value: State['config']) => void;
    setInput: (value: string) => void;
    setCurrentTab: (value: State['currentTab']) => void;
    setResults: (value: SubmissionResponse[]) => void;
};

const useCodingStore = create<State & Actions>()(
    immer((set) => ({
        code: '',
        result: undefined,
        currentTab: 'input',
        config: {
            lang: languageOptions[0],
        },
        input: '',
        setInput(value) {
            set((state) => {
                state.input = value;
            });
        },
        setCode(code) {
            set((state) => {
                state.code = code;
            });
        },
        setConfig(config) {
            set((state) => {
                state.config = config;
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
