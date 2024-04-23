import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { IndividualJob } from '@/types/job.type';
import { AnswerProps, FormProps } from '@/types/application.type';

type State = {
    tabKey: string;
    jobDetailOpening: boolean;
    detail?: IndividualJob;
    applicationInfo?: FormProps;
    answers: AnswerProps[];
};

type Action = {
    updateTabKey: (_: State['tabKey']) => void;
    updateJobDetailOpening: (_: State['jobDetailOpening']) => void;
    setDetail: (_: State['detail']) => void;
    setInfo: (_: State['applicationInfo']) => void;
    updateAnswer: (_: AnswerProps) => void;
};

// Create your store, which includes both state and (optionally) actions
const useJobStore = create<State & Action>()(
    immer(
        persist(
            (set) => ({
                tabKey: 'all',
                jobDetailOpening: false,
                detail: undefined,
                applicationInfo: undefined,
                answers: [],
                updateTabKey: (tabKey) => set(() => ({ tabKey: tabKey })),
                updateJobDetailOpening: (opening) => set(() => ({ jobDetailOpening: opening })),
                setDetail: (detail) => set(() => ({ detail: detail })),
                setInfo: (info) => set(() => ({ applicationInfo: info })),
                updateAnswer: (answer) =>
                    set((state) => {
                        const index = state.answers.findIndex((a) => a.questionId === answer.questionId);
                        if (index !== -1) {
                            state.answers[index] = answer;
                        } else {
                            state.answers.push(answer);
                        }
                    }),
            }),
            {
                name: 'job-store',
            },
        ),
    ),
);

export default useJobStore;
