import { Outlet } from 'react-router-dom';
import Header from './Header';
import useUpdateProfile from '@/hooks/useUpdateProfile';
import Footer from './Footer';

const colors = {
    '--text-color': '#000',
    '--secondary-color': '#727A84',
    '--special-color': '#8A909C',
    '--p-bg-color': '#fff',
    '--dots-color': '#bbbef9',
    '--button-bg-color': '#111',
    '--button-bg-color-hover': '#333',
    '--button-color': '#fff',
    // '--text-color': '#fff',
    // '--secondary-color': '#8D857B',
    // '--special-color': '#756F63',
    // '--p-bg-color': '#121212',
    // '--dots-color': '#444106',
    // '--button-bg-color': '#fff',
    // '--button-bg-color-hover': '#ccc',
    // '--button-color': '#000',
} as React.CSSProperties;

const PortfolioLayout = () => {
    const { profile } = useUpdateProfile();
    const experiences = profile?.experiences || [];

    return (
        <div
            style={colors}
            className="portfolio-bg-dots portfolio-text flex min-h-screen flex-col overflow-x-clip tracking-wider md:text-base lg:text-lg xl:text-xl"
        >
            <Header logo="Marie" hideExperiences={experiences.length === 0} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default PortfolioLayout;
