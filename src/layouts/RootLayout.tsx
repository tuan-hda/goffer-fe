import { Outlet } from 'react-router-dom';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import ReportButton from '@/components/report/ReportButton';

const RootLayout = () => {
    const { data } = useSelfProfileQuery();
    return (
        <div className="h-full w-full">
            <Outlet />
            {data && <ReportButton />}
        </div>
    );
};

export default RootLayout;
