import { Image } from '@nextui-org/react';
import { Link, Outlet } from 'react-router-dom';

const FocusLayout = () => {
    return (
        <div className="min-h-screen">
            <Link to="/app/jobs">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    className="fixed left-6 top-6 z-[1] h-16 w-16 rounded-full !opacity-50"
                />
            </Link>
            <Outlet />
        </div>
    );
};

export default FocusLayout;
