import { create } from 'zustand'

type State = {
  tabKey: string
}

type Action = {
  updateTabKey: (_tabKey: State['tabKey']) => void
}

// Create your store, which includes both state and (optionally) actions
const useDiscoverStore = create<State & Action>((set) => ({
  tabKey: 'jobs',
  updateTabKey: (tabKey) => set(() => ({ tabKey: tabKey })),
}))

export default useDiscoverStore