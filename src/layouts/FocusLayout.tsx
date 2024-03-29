import { Outlet } from 'react-router-dom';

const FocusLayout = () => {
    return (
        <div className="bg-image-pale-75 min-h-screen">
            <div className="flex flex-row justify-end p-8">
                <img src="/logo.svg" alt="logo" className="h-10 w-10 opacity-30" />
            </div>
            <Outlet />
        </div>
    );
};

export default FocusLayout;
