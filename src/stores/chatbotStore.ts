import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
    hasMessage: boolean;
};

type Actions = {
    setMessage: (message: boolean) => void;
};

const useChatbotStore = create<State & Actions>()(
    immer((set) => ({
        hasMessage: false,
        setMessage(message) {
            set((state) => {
                state.hasMessage = message;
            });
        },
    })),
);

export default useChatbotStore;
