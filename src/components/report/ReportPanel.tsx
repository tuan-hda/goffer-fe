import useListReports from '@/hooks/useListReports';
import { Card } from '../ui/card';
import ReportDetail from './ReportDetail';
import ReportList from './ReportList';
import SearchFilter from './SearchFilter';
import { useMemo, useState } from 'react';
import { Report } from '@/types/report.type';

const ReportPanel = () => {
    const { data, refetch } = useListReports();
    const [filter, setFilter] = useState({
        search: '',
        status: '',
        os: '',
    });
    const [selected, setSelected] = useState<string>();

    const filteredData = useMemo(() => {
        if (!data) return [];
        return data.filter((item) => {
            const search = item.title.toLowerCase().includes(filter.search.toLowerCase());
            const status = filter.status ? item.status === filter.status : true;
            const os = filter.os ? item.environment.os === filter.os : true;
            return search && status && os;
        });
    }, [filter, data]);

    if (!data) return null;

    const pending = data?.filter((item) => item.status === 'pending').length;
    const inProgress = data?.filter((item) => item.status === 'in_progress').length;
    const resolved = data?.filter((item) => item.status === 'resolved').length;

    return (
        <div className="mt-5 gap-4">
            <p className="mb-4 text-base text-text">
                You are having {pending} pending, {inProgress} in progress, {resolved} resolved reports
            </p>
            <SearchFilter filter={filter} setFilter={setFilter} />
            <Card className="relative mt-6 grid h-[calc(100vh-200px)] grid-cols-12">
                <div className="col-span-3 h-full overflow-hidden rounded-l-xl">
                    <ReportList selected={selected} setSelected={setSelected} data={filteredData} />
                </div>
                <div className="absolute left-1/4 h-full border-r" />
                <div className="col-span-9 h-full overflow-hidden rounded-r-xl">
                    <ReportDetail refetch={refetch} data={filteredData.find((item) => item.id === selected)} />
                </div>
            </Card>
        </div>
    );
};

export default ReportPanel;
