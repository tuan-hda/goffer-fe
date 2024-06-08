import { NewQuestion, QUESTION_TYPE } from '@/types/question.type';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const initialData: NewQuestion = {
    content: '',
    description: '',
    constraint: 180,
    type: '',
    sample: '',
    answer: '',
    choices: [
        {
            content: 'Content 1',
            isCorrect: true,
        },
        {
            content: 'Content 2',
            isCorrect: false,
        },
        {
            content: 'Content 3',
            isCorrect: false,
        },
        {
            content: 'Content 4',
            isCorrect: false,
        },
    ],
    difficulty: 1,
    kind: 'audio',
    org: '',
    category: '',
    numberOfTestCaseLines: 1,
};

type State = {
    questions: {
        [key in QUESTION_TYPE]: NewQuestion;
    };
    errors: {
        [key in QUESTION_TYPE]: string;
    };
    loading: boolean;
};

type Action = {
    setQuestion: (type: QUESTION_TYPE) => (_: NewQuestion | ((__: NewQuestion) => NewQuestion)) => void;
    clear: (type: QUESTION_TYPE) => void;
    setError: (type: QUESTION_TYPE) => (_: string) => void;
    setLoading: (_: boolean) => void;
    getProcessedQuestion: (_: QUESTION_TYPE) => NewQuestion;
};

const useNewQuestionStore = create<State & Action>()(
    immer((set, get) => ({
        questions: {
            behavioral: initialData,
            mcq: initialData,
            coding: initialData,
        },
        setQuestion: (type) => (question) =>
            set((state) => {
                state.questions[type] = typeof question === 'function' ? question(state.questions[type]) : question;
            }),
        clear: (type) =>
            set((state) => {
                state.questions[type] = initialData;
            }),
        errors: {
            behavioral: '',
            mcq: '',
            coding: '',
        },
        setError: (type) => (error) => {
            set((state) => {
                state.errors[type] = error;
            });
        },
        loading: false,
        setLoading: (value) => {
            set((state) => {
                state.loading = value;
            });
        },
        getProcessedQuestion(type) {
            const question = { ...get().questions[type] };
            Object.keys(question).forEach((key) => {
                if (!question[key as keyof NewQuestion]) {
                    delete question[key as keyof NewQuestion];
                }
            });

            return question;
        },
    })),
);

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('QuestionStore', useNewQuestionStore);
}

export default useNewQuestionStore;
