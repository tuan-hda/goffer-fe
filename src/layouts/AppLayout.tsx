import { matchRoutes, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import AutoCenterLayout from './AutoCenterLayout';
import AuthRequiredLayout from './AuthRequiredLayout';
import { useEffect, useMemo, useState } from 'react';
import { orgItems } from '@/components/navigation/items';
import useCurrentMembership from '@/hooks/useCurrentMembership';
import { NotFound } from '@/pages';
import { TbLoader } from 'react-icons/tb';
import { Loading } from '@/components/common';
import { Spinner } from '@nextui-org/react';

const AppLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { domain } = useParams();
    const { data: currentMembership } = useCurrentMembership();
    const [finished, setFinished] = useState(false);

    // const isValidOrg = useMemo(() => {
    //     if (!domain) return true;
    //     const result = matchRoutes(
    //         orgItems(domain, { onClickMap: {} }, false, currentMembership?.role)
    //             .filter((item) => item.type === 'link')
    //             .map((item) => ({
    //                 path: 'path' in item.element ? item.element.path : '',
    //             })),
    //         location.pathname,
    //     );
    //     return result && result.length > 0;
    // }, [location.pathname, currentMembership]);

    useEffect(() => {
        if (location.pathname === '/app') {
            navigate('/app/profile');
        }
        setFinished(false);
    }, [location]);

    useEffect(() => {
        if (!finished) {
            setTimeout(() => {
                setFinished(() => true);
            }, 3000);
        }
    }, [finished]);

    // if (!isValidOrg && !finished) {
    //     return (
    //         <AutoCenterLayout>
    //             <div className="flex h-screen items-center justify-center">
    //                 <Spinner className="scale-200 text-primary" />
    //             </div>
    //         </AutoCenterLayout>
    //     );
    // }

    // if (!isValidOrg && finished) {
    //     return <NotFound />;
    // }

    return (
        <AuthRequiredLayout>
            <DashboardLayout>
                <AutoCenterLayout>
                    <Outlet />
                </AutoCenterLayout>
            </DashboardLayout>
        </AuthRequiredLayout>
    );
};

export default AppLayout;
