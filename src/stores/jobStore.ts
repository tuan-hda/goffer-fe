import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { IndividualJob } from '@/types/job.type';

type State = {
    tabKey: string;
    jobDetailOpening: boolean;
    detail?: IndividualJob;
};

type Action = {
    updateTabKey: (_: State['tabKey']) => void;
    updateJobDetailOpening: (_: State['jobDetailOpening']) => void;
    setDetail: (_: State['detail']) => void;
};

// Create your store, which includes both state and (optionally) actions
const useJobStore = create<State & Action>()(
    immer(
        persist(
            (set) => ({
                tabKey: 'all',
                jobDetailOpening: false,
                detail: undefined,
                updateTabKey: (tabKey) => set(() => ({ tabKey: tabKey })),
                updateJobDetailOpening: (opening) => set(() => ({ jobDetailOpening: opening })),
                setDetail: (detail) => set(() => ({ detail: detail })),
            }),
            {
                name: 'job-store',
            },
        ),
    ),
);

export default useJobStore;
