import { Link } from '@nextui-org/react';
import { Outlet } from 'react-router-dom';

const FocusLayout = () => {
    return (
        <div className="bg-image-pale-75 min-h-screen pt-24">
            <Link href="/app/individual/jobs">
                <img src="/logo.svg" alt="logo" className=" fixed right-10 top-10 h-10 w-10 opacity-30" />
            </Link>

            <Outlet />
        </div>
    );
};

export default FocusLayout;
