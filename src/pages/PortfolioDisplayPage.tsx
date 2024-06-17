import PortfolioDisplay from '@/components/portfolio/PortfolioDisplay';
import { useParams } from 'react-router-dom';

const PortfolioDisplayPage = () => {
    const { portfolioDomain } = useParams();

    if (!portfolioDomain) return null;

    return <PortfolioDisplay />;
};

export default PortfolioDisplayPage;
