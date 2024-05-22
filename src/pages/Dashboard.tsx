import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbDashboard } from 'react-icons/tb';
import { DatePickerWithRange } from '@/components/common';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OverviewStats } from '@/components/dashboard';
import Traffic from '@/components/dashboard/Traffic';

const Dashboard = () => {
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
                <div className="ml-auto">
                    <p className="mb-1">Time range</p>
                    <DatePickerWithRange />
                </div>
            </div>
            <div className="mt-8">
                <OverviewStats />
                <div className="mt-9 grid grid-cols-12">
                    <Traffic />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
