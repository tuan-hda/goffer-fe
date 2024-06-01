import MetricsBox from './MetricsBox';

const OverviewStats = () => {
    return (
        <div>
            <div className="grid grid-cols-5 gap-8">
                <MetricsBox color="#FFEFE3" title="Total Users" value="25" percent={5} trend="up" />
                <MetricsBox color="#F8FAEA" title="Web Visits" value="123.3k" percent={5} trend="up" />
                <MetricsBox color="#FCF4FE" title="Average Duration" value="1m16sec" percent={5} trend="down" />
                <MetricsBox color="#F5F6FA" title="Bounce Rate" value="20%" percent={5} trend="down" />
                <MetricsBox dark color="#1C1B20" title="Reports" value="40" percent={3} trend="down" />
            </div>
        </div>
    );
};

export default OverviewStats;
