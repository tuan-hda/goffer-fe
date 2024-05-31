import { Outlet } from 'react-router-dom';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { useRef } from 'react';
import ReportButton from '@/components/report/ReportButton';

const RootLayout = () => {
    const ref = useRef<HTMLDivElement>(null);

    const { data } = useSelfProfileQuery();
    return (
        <div className="h-full w-full" ref={ref}>
            <Outlet />
            {data && <ReportButton containerRef={ref} />}
        </div>
    );
};

export default RootLayout;
