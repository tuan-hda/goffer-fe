import { Outlet } from 'react-router-dom';
import Header from './Header';
import useUpdateProfile from '@/hooks/useUpdateProfile';
import Footer from './Footer';

const PortfolioLayout = () => {
    const { profile } = useUpdateProfile();
    const experiences = profile?.experiences || [];

    return (
        <div className="bg-dots flex min-h-screen flex-col overflow-x-clip tracking-wider text-black md:text-base lg:text-lg xl:text-xl">
            <Header logo="Marie" hideExperiences={experiences.length === 0} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default PortfolioLayout;
