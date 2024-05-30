import { Card } from '../ui/card';
import ReportDetail from './ReportDetail';
import ReportList from './ReportList';
import SearchFilter from './SearchFilter';

const ReportPanel = () => {
    return (
        <div className="mt-5 gap-4">
            <p className="mb-4 text-base text-text">You are having 30 opened, 10 working, 50 closed reports</p>
            <SearchFilter />
            <Card className="relative mt-6 grid h-[calc(100vh-200px)] grid-cols-12">
                <div className="col-span-3 h-full overflow-hidden rounded-l-xl">
                    <ReportList />
                </div>
                <div className="absolute left-1/4 h-full border-r" />
                <div className="col-span-9 h-full overflow-hidden rounded-r-xl">
                    <ReportDetail />
                </div>
            </Card>
        </div>
    );
};

export default ReportPanel;
