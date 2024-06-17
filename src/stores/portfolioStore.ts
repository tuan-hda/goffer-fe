import { PALETTE } from '@/data/portfolio';
import { PortfolioConfiguration } from '@/types/portfolio.type';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
    portfolio?: PortfolioConfiguration;
};

type Action = {
    setPortfolio: (_: State['portfolio'] | ((__: State['portfolio']) => State['portfolio'])) => void;
    clear: () => void;
};

const initialData = {
    portfolio: {
        palette: PALETTE.WHITE,
        template: undefined,
        portfolioDomain: '',
        brandName: '',
        logo: '',
        status: 'draft',
    } as PortfolioConfiguration,
};

const usePortfolioStore = create<State & Action>()(
    immer((set) => ({
        portfolio: initialData.portfolio,
        setPortfolio: (portfolio) =>
            set((state) => {
                state.portfolio = typeof portfolio === 'function' ? portfolio(state.portfolio) : portfolio;
            }),
        clear: () => {
            set(() => ({ ...initialData }));
        },
    })),
);

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('PortfolioStore', usePortfolioStore);
}

export default usePortfolioStore;
