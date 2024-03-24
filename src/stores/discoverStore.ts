import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

type State = {
    tabKey: string;
    sideBarPinned: boolean;
    jobDetailOpening: boolean;
};

type Action = {
    updateTabKey: (_tabKey: State['tabKey']) => void;
    updateSideBarPinned: (_pinned: State['sideBarPinned']) => void;
    updateJobDetailOpening: (_pinned: State['jobDetailOpening']) => void;
};

// Create your store, which includes both state and (optionally) actions
const useDiscoverStore = create<State & Action>()(
    immer(
        persist(
            (set) => ({
                tabKey: 'jobs',
                sideBarPinned: false,
                jobDetailOpening: false,
                updateTabKey: (tabKey) => set(() => ({ tabKey: tabKey })),
                updateSideBarPinned: (pinned) => set(() => ({ sideBarPinned: pinned })),
                updateJobDetailOpening: (opening) => set(() => ({ jobDetailOpening: opening })),
            }),
            {
                name: 'discover-store',
            },
        ),
    ),
);

export default useDiscoverStore;
