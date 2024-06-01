import { Outlet } from 'react-router-dom';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import ReportButton from '@/components/report/ReportButton';
import { useRef } from 'react';

const RootLayout = () => {
    const { data } = useSelfProfileQuery();
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div ref={ref} className="min-h-screen w-full">
            <Outlet />
            {data && <ReportButton container={ref.current} />}
        </div>
    );
};

export default RootLayout;
