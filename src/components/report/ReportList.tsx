import { Report as ReportType } from '@/types/report.type';
import Report from './Report';
import { Fragment } from 'react/jsx-runtime';

type ReportListProps = {
    data: ReportType[];
    selected?: string;
    setSelected: (id?: string) => void;
};

const ReportList = ({ data, selected, setSelected }: ReportListProps) => {
    return (
        <div className="h-full overflow-y-scroll">
            {data.map((item, index) => (
                <Fragment key={item.id}>
                    <Report
                        onClick={() => setSelected(item.id)}
                        selected={selected === item.id}
                        title={item.title}
                        description={item.description}
                        status={item.status}
                    />
                    {index < data.length - 1 && <div className="border-t"></div>}
                </Fragment>
            ))}
        </div>
    );
};

export default ReportList;
