import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbDashboard } from 'react-icons/tb';
import { CopilotInsights, OverviewStats, Traffic } from '@/components/admin';
import { DeeperStats } from '@/components/admin/DeeperStats';
import UserHistory from '@/components/admin/UserHistory';
import RevenueHistory from '@/components/admin/RevenueHistory';
import { useEffect } from 'react';
import { logEvent } from 'firebase/analytics';
import { analytics } from '@/configs/firebase';

const Dashboard = () => {
    useEffect(() => {
        logEvent(analytics, 'page_view', {
            page_location: window.location.href,
            page_path: window.location.pathname,
        })
    },[])

    const { data: user } = useSelfProfileQuery();

    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[5px]">
                <BreadcrumbItem>
                    <TbDashboard className="text-lg" /> Dashboard
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="mt-5 flex items-center gap-4">
                <div>
                    <p className="text-xl text-black">Hello {user?.name},</p>
                    <p className="mt-[6px] font-light text-text">Here's your statistics for Goffer</p>
                </div>
            </div>
            <div className="mt-6">
                <OverviewStats />
                <DeeperStats />
                <div className="mt-12 grid grid-cols-12 gap-10">
                    <div className="col-span-9 space-y-10">
                        <Traffic />
                        <RevenueHistory />
                        <UserHistory />
                    </div>
                    <CopilotInsights />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
