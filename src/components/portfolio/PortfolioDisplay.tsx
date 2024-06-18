import { TEMPLATE } from '@/data/portfolio';
import Ditto from './ditto/Ditto';
import OnceInAMoon from './onceInAMoon/OnceInAMoon';
import useCurrPortfolio from '@/hooks/useCurrPortfolio';

const PortfolioDisplay = () => {
    const { portfolio, user } = useCurrPortfolio();

    if (!portfolio || !user) {
        return null;
    }

    if (portfolio?.template === TEMPLATE.ONCE_IN_A_MOON.key) {
        return <OnceInAMoon user={user!} portfolio={portfolio} />;
    }
    return <Ditto user={user} portfolio={portfolio} />;
};

export default PortfolioDisplay;
