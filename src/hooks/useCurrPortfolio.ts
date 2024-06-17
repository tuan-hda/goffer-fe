import { useParams } from 'react-router-dom';
import useListPeople from './useListPeople';

const useCurrPortfolio = () => {
    const { portfolioDomain } = useParams();
    const { data, isLoading } = useListPeople({
        portfolioDomain,
    });
    const user = data?.results.at(0);
    const portfolio = user?.portfolio;

    return {
        isLoading,
        notFound: !user || !user.isPro || !portfolio || portfolio.status === 'draft',
        portfolio,
        user,
    };
};

export default useCurrPortfolio;
