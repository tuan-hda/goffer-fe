import { ProjectCreate } from '@/types/project.type';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const initialData: ProjectCreate = {
    cover: '',
    description: '',
    title: '',
    content: '',
    tools: [],
    skills: [],
};

type State = {
    info: ProjectCreate;
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
