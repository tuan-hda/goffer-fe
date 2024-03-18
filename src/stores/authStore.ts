import { Token } from 'src/types/token.type';
import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { immer } from 'zustand/middleware/immer';

type AuthState = {
    access?: Token | null;
};

type Actions = {
    setAccess: (_: Token) => void;
    logOut: () => void;
};

const useAuthStore = create<AuthState & Actions>()(
    immer((set) => ({
        access: undefined,
        setAccess: (access) =>
            set((state) => {
                state.access = access;
            }),
        logOut: () =>
            set((state) => {
                if (state.access) {
                    state.access = null;
                    window.location.pathname = '/';
                }
            }),
    })),
);

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('AuthStore', useAuthStore);
}

export default useAuthStore;
