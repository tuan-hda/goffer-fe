import { Value } from '@udecode/plate-common';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type Info = {
    cover: string;
    description: string;
    title: string;
    content: Value;
    tools: string[];
    skills: string[];
};

const initialData: Info = {
    cover: '',
    description: '',
    title: '',
    content: [],
    tools: [],
    skills: [],
};

type State = {
    info: Info;
    error: string;
};

type Action = {
    setInfo: (_: State['info'] | ((__: State['info']) => State['info'])) => void;
    clear: () => void;
    setError: (_: string) => void;
};

const useNewProjectStore = create<State & Action>()(
    immer((set) => ({
        info: initialData,
        setInfo: (info) =>
            set((state) => {
                state.info = typeof info === 'function' ? info(state.info) : info;
            }),
        clear: () =>
            set((state) => {
                state.info = initialData;
            }),
        error: '',
        setError: (error) => {
            set((state) => {
                state.error = error;
            });
        },
    })),
);

export default useNewProjectStore;
