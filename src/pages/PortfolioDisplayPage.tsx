import PortfolioDisplay from '@/components/portfolio/PortfolioDisplay';
import { analytics } from '@/configs/firebase';
import { logEvent } from 'firebase/analytics';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PortfolioDisplayPage = () => {
    useEffect(() => {
        logEvent(analytics, 'page_view', {
            page_location: window.location.href,
            page_path: window.location.pathname,
        })
    },[])

    const { portfolioDomain } = useParams();

    if (!portfolioDomain) return null;

    return <PortfolioDisplay />;
};

export default PortfolioDisplayPage;
