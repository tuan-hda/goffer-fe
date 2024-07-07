import { LeftPanel, RightPanel } from '@/components/profile';
import { analytics } from '@/configs/firebase';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { logEvent } from 'firebase/analytics';
import { useEffect } from 'react';
import { TbLoader, TbUser } from 'react-icons/tb';

const Profile = () => {
    useEffect(() => {
        logEvent(analytics, 'page_view', {
            page_location: window.location.href,
            page_path: window.location.pathname,
        })
    },[])

    const { isLoading } = useSelfProfileQuery();

    if (isLoading) {
        return (
            <div className="flex h-[calc(100vh-40px)] w-full items-center justify-center">
                <TbLoader className="animate-spin text-xl" />
            </div>
        );
    }

    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[5px]">
                <BreadcrumbItem>
                    <TbUser className="text-lg" /> Profile
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="mr-16 flex gap-x-16 pt-5">
                <LeftPanel />
                <RightPanel />
            </div>
        </div>
    );
};

export default Profile;
