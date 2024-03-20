import { Navigate, Outlet, matchRoutes, useLocation } from 'react-router-dom';
import useSelfProfileQuery from 'src/hooks/useSelfProfileQuery';
import useAuthStore from 'src/stores/authStore';
import AuthTwoSection from './AuthTwoSection';
import ConfirmEmail from 'src/components/auth/ConfirmEmail';
import { Spinner } from '@nextui-org/react';

const AppLayout = () => {
    const { data: user, isLoading } = useSelfProfileQuery();
    const access = useAuthStore((state) => state.access);
    const location = useLocation();
    const match = matchRoutes([{ path: '/auth' }], location);

    // if (isLoading || access === undefined)
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

    return <Outlet />;
};

export default AppLayout;
