import classNames from 'classnames';
import { TbArrowLeft } from 'react-icons/tb';

type MetricsBoxProps = {
    title?: string;
    value?: string;
    percent?: number;
    color?: string;
    trend?: 'up' | 'down';
    dark?: boolean;
    showTrend?: boolean;
};

const MetricsBox = ({ title, value, percent, color, trend, dark, showTrend }: MetricsBoxProps) => {
    return (
        <div
            className="relative rounded-3xl p-6 text-center"
            style={{
                backgroundColor: color,
            }}
        >
            <p className={classNames('text-center text-3xl font-medium', dark && 'text-white')}>{value}</p>
            <p className={classNames('mt-2', dark && 'text-white')}>{title}</p>
            {showTrend && (
                <p className={classNames('mt-[6px] text-xs font-light', dark ? 'text-gray-300' : 'text-gray-500')}>
                    {percent}% {trend === 'down' ? 'decreased' : 'increased'} from last period
                </p>
            )}
            {showTrend && (
                <TbArrowLeft
                    className={classNames('absolute right-4 top-4 text-xl text-white mix-blend-difference', {
                        'rotate-[135deg]': trend === 'up',
                        'rotate-[225deg]': trend === 'down',
                    })}
                />
            )}
        </div>
    );
};

export default MetricsBox;
