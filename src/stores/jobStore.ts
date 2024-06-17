import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { Job } from '@/types/job.type';
import { NewApply } from '@/types/application.type';
import { NewAnswer } from '@/types/answer.type';

type State = {
    tabKey: string;
    jobDetailOpening: boolean;
    detail?: Job;
    applicationInfo?: NewApply;
    applyAnswer?: NewAnswer;
};

type Action = {
    updateTabKey: (_: State['tabKey']) => void;
    updateJobDetailOpening: (_: State['jobDetailOpening']) => void;
    setDetail: (_: State['detail']) => void;
    setInfo: (_: State['applicationInfo']) => void;
    setApplyAnswer: (_: NewAnswer) => void;
    resetDetail: () => void;
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
                applyAnswer: undefined,
                updateTabKey: (tabKey) => set(() => ({ tabKey: tabKey })),
                updateJobDetailOpening: (opening) => set(() => ({ jobDetailOpening: opening })),
                setDetail: (detail) => set(() => ({ detail: detail })),
                setInfo: (info) => set(() => ({ applicationInfo: info })),
                setApplyAnswer: (answer) => set(() => ({ applyAnswer: answer })),
                resetDetail: () =>
                    set(() => ({
                        detail: undefined,
                        applicationInfo: undefined,
                        applyAnswer: undefined,
                    })),
            }),

            {
                name: 'job-store',
            },
        ),
    ),
);

export default useJobStore;
