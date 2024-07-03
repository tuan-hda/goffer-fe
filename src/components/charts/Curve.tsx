import { AnalyticsGranularity } from '@/types/analytics.type';
import { LineChart } from '@mui/x-charts';
import moment from 'moment';

type CurveProps = {
    xAxis: any[];
    series: any[];
    granularity: AnalyticsGranularity;
};

const Curve = ({ xAxis, series, granularity }: CurveProps) => {
    const getDateFormat = () => {
        if (granularity === 'day') {
            return 'DD/MM';
        } else if (granularity === 'month') {
            return 'MM/YY';
        }
        return 'YYYY';
    };

    return (
        <LineChart
            xAxis={[
                {
                    data: xAxis,
                    scaleType: 'point',
                    dataKey: 'date',
                    valueFormatter: (date) => moment(date).format(getDateFormat()),
                },
            ]}
            series={[
                {
                    data: series,
                    valueFormatter: (value) => `${value}%`,
                },
            ]}
            height={500}
        />
    );
};

export default Curve;
