import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { TbLoader } from 'react-icons/tb';
import useCurrPortfolio from '@/hooks/useCurrPortfolio';
import { NotFound } from '@/pages';

const PortfolioLayout = () => {
    const { isLoading, user, notFound, portfolio } = useCurrPortfolio();

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <TbLoader className="animate-spin text-2xl" />
            </div>
        );
    }

    if (!portfolio || notFound) {
        return <NotFound />;
    }

    return (
        <div
            style={portfolio.palette as React.CSSProperties}
            className="portfolio-bg-dots portfolio-text flex min-h-screen flex-col overflow-x-clip tracking-wider md:text-base lg:text-lg xl:text-xl"
        >
            <Header logo="Marie" hideExperiences={false} />
            <Outlet context={[portfolio]} />
            <Footer links={user?.links} />
        </div>
    );
};

export default PortfolioLayout;
