import { DatePickerWithRange } from '../common';
import MetricsBox from './MetricsBox';

export const DeeperStats = () => {
    return (
        <div className="mt-10">
            <div className="mb-4 flex items-center">
                <h1 className="text-xl">Statistics by period</h1>
                <div className="ml-auto">
                    <DatePickerWithRange />
                </div>
            </div>
            <div className="grid grid-cols-5 gap-8">
                <MetricsBox dark color="#1C1B20" title="Revenue" showTrend value="4500$" percent={3} trend="up" />
                <MetricsBox color="#FFEFE3" title="Total Users" showTrend value="25" percent={5} trend="up" />
                <MetricsBox color="#fbd7d7" title="Organizations" showTrend value="30" percent={3} trend="up" />
                <MetricsBox color="#E4F1EE" title="Reports" showTrend value="40" percent={3} trend="down" />
                <MetricsBox color="#DEDAF4" title="Refunds request" showTrend value="10" percent={3} trend="up" />

                <MetricsBox color="#F8FAEA" title="Web Visits" showTrend value="123.3k" percent={5} trend="up" />
                <MetricsBox
                    color="#FCF4FE"
                    title="Average Duration"
                    showTrend
                    value="1m16sec"
                    percent={5}
                    trend="down"
                />
                <MetricsBox color="#F5F6FA" title="Bounce Rate" showTrend value="20%" percent={5} trend="down" />
            </div>
        </div>
    );
};
