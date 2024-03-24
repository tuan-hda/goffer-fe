import { create } from 'zustand';

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
const useDiscoverStore = create<State & Action>((set) => ({
    tabKey: 'jobs',
    sideBarPinned: false,
    jobDetailOpening: false,
    updateTabKey: (tabKey) => set(() => ({ tabKey: tabKey })),
    updateSideBarPinned: (pinned) => set(() => ({ sideBarPinned: pinned })),
    updateJobDetailOpening: (opening) => set(() => ({ jobDetailOpening: opening })),
}));

export default useDiscoverStore;
