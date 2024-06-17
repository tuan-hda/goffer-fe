import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { NewAnswer } from '@/types/answer.type';

type State = {
    loading: boolean;
    answer?: NewAnswer;
};

type Action = {
    setLoading: (_: State['loading']) => void;
    setAnswer: (_: NewAnswer) => void;
};

const useApplyStore = create<State & Action>()(
    immer(
        persist(
            (set) => ({
                loading: false,
                answer: undefined,
                setLoading: (loading) => set(() => ({ loading: loading })),
                setAnswer: (answer) => set(() => ({ answer: answer })),
            }),

            {
                name: 'apply-store',
            },
        ),
    ),
);

export default useApplyStore;
