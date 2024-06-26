import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

type State = {
    tabKey: string;
    sideBarPinned: boolean;
};

type Action = {
    updateTabKey: (_: State['tabKey']) => void;
    updateSideBarPinned: (_: State['sideBarPinned']) => void;
};

// Create your store, which includes both state and (optionally) actions
const useDiscoverStore = create<State & Action>()(
    immer(
        persist(
            (set) => ({
                tabKey: 'people',
                sideBarPinned: false,
                updateTabKey: (tabKey) => set(() => ({ tabKey: tabKey })),
                updateSideBarPinned: (pinned) => set(() => ({ sideBarPinned: pinned })),
            }),
            {
                name: 'discover-store',
            },
        ),
    ),
);

export default useDiscoverStore;
