import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbDashboard } from 'react-icons/tb';
import { DatePickerWithRange } from '@/components/common';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
                    <p className="text-xl font-medium text-black">Hello {user?.name},</p>
                    <p className="mt-1 text-text/70">Here's your statistics for Goffer</p>
                </div>
                <div className="ml-auto">
                    <p className="mb-1">Time range</p>
                    <DatePickerWithRange />
                </div>
                <div>
                    <p className="mb-1">Granularity</p>
                    <Select>
                        <SelectTrigger className="w-[180px] bg-white">
                            <SelectValue placeholder="Select interval" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="day">Day</SelectItem>
                            <SelectItem value="month">Month</SelectItem>
                            <SelectItem value="quarter">Quarter</SelectItem>
                            <SelectItem value="year">Year</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
