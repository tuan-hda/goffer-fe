import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

type State = {
    tabKey: string;
    jobDetailOpening: boolean;
};

type Action = {
    updateTabKey: (_: State['tabKey']) => void;
    updateJobDetailOpening: (_: State['jobDetailOpening']) => void;
};

// Create your store, which includes both state and (optionally) actions
const useJobStore = create<State & Action>()(
    immer(
        persist(
            (set) => ({
                tabKey: 'all',
                jobDetailOpening: false,
                updateTabKey: (tabKey) => set(() => ({ tabKey: tabKey })),
                updateJobDetailOpening: (opening) => set(() => ({ jobDetailOpening: opening })),
            }),
            {
                name: 'job-store',
            },
        ),
    ),
);

export default useJobStore;
