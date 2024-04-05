import { Navigate, Outlet, matchRoutes, useLocation } from 'react-router-dom';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import useAuthStore from '@/stores/authStore';
import AuthTwoSection from './AuthTwoSection';
import ConfirmEmail from '@/components/auth/ConfirmEmail';
import { Spinner } from '@nextui-org/react';
import DashboardLayout from './DashboardLayout';

const AppLayout = () => {
    // const { data: user, isLoading } = useSelfProfileQuery();
    // const access = useAuthStore((state) => state.access);
    // const location = useLocation();
    // const match = matchRoutes([{ path: '/auth' }], location);
    // const getStarted = matchRoutes([{ path: '/get-started' }], location);

    // if (isLoading || (access === undefined && !user))
    //     return (
    //         <div className="flex h-screen w-screen">
    //             <Spinner className="m-auto" />
    //         </div>
    //     );

    // if (access === null) return <Navigate to="/" />;

    // if (access && user && !user.isEmailVerified && !match)
    //     return (
    //         <AuthTwoSection
    //             right={
    //                 <div className="m-auto p-10 font-light">
    //                     <img
    //                         src="/trivia1.png"
    //                         className="h-full w-full max-w-[400px] object-cover mix-blend-difference"
    //                         alt="Cone"
    //                     />
    //                 </div>
    //             }
    //         >
    //             <div className="m-auto w-80 text-sm">
    //                 <ConfirmEmail
    //                     initialType={user.initialType}
    //                     // eslint-disable-next-line no-self-assign
    //                     onSuccess={() => (window.location.pathname = window.location.pathname)}
    //                     email={user.email}
    //                     accessToken={access}
    //                 />
    //             </div>
    //         </AuthTwoSection>
    //     );

    // if (user && (!user.name || !user.skills || user.skills.length === 0 || !user.avatar) && !getStarted) {
    //     return <Navigate to="/get-started" />;
    // }

    // if (user)
    return (
        <DashboardLayout>
            <Outlet />
        </DashboardLayout>
    );
};

export default AppLayout;
