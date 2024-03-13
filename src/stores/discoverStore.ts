import { create } from 'zustand';

type State = {
    tabKey: string;
    sideBarPinned: boolean;
};

type Action = {
    updateTabKey: (_tabKey: State['tabKey']) => void;
    updateSideBarPinned: (_pinned: State['sideBarPinned']) => void;
};

// Create your store, which includes both state and (optionally) actions
const useDiscoverStore = create<State & Action>((set) => ({
    tabKey: 'jobs',
    sideBarPinned: false,
    updateTabKey: (tabKey) => set(() => ({ tabKey: tabKey })),
    updateSideBarPinned: (pinned) => set(() => ({ sideBarPinned: pinned })),
}));

export default useDiscoverStore;
