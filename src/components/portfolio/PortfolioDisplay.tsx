import { TEMPLATE } from '@/data/portfolio';
import Ditto from './ditto/Ditto';
import OnceInAMoon from './onceInAMoon/OnceInAMoon';
import useCurrPortfolio from '@/hooks/useCurrPortfolio';

const PortfolioDisplay = () => {
    const { portfolio } = useCurrPortfolio();

    if (portfolio?.template === TEMPLATE.ONCE_IN_A_MOON.key) {
        return <OnceInAMoon portfolio={portfolio} />;
    }
    return <Ditto portfolio={portfolio} />;
};

export default PortfolioDisplay;
