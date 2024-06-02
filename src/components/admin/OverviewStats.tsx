import MetricsBox from './MetricsBox';

const OverviewStats = () => {
    return (
        <div>
            <h1 className="mb-4 text-xl">Overall</h1>
            <div className="grid grid-cols-5 gap-8">
                <MetricsBox dark color="#1C1B20" title="Revenue" value="4500$" />
                <MetricsBox color="#FFEFE3" title="Total Users" value="25" />
                <MetricsBox color="#fbd7d7" title="Organizations" value="30" />
                <MetricsBox color="#E4F1EE" title="Reports" value="40" />
                <MetricsBox color="#DEDAF4" title="Refunds request" value="10" />
                <MetricsBox color="#F8FAEA" title="Web Visits" value="123.3k" percent={5} trend="up" />
                <MetricsBox color="#FCF4FE" title="Average Duration" value="1m16sec" percent={5} trend="down" />
                <MetricsBox color="#F5F6FA" title="Bounce Rate" value="20%" percent={5} trend="down" />
            </div>
        </div>
    );
};

export default OverviewStats;
