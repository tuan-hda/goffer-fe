import Report from './Report';

const ReportList = () => {
    return (
        <div className="h-full overflow-y-scroll">
            <Report
                selected
                title="Hello your report"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac odio tempus, ultricies nunc nec, tincidunt nunc."
                status="opened"
            />
            <div className="border-t"></div>
            <Report
                title="Hello your report"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac odio tempus, ultricies nunc nec, tincidunt nunc."
                status="working"
            />
            <div className="border-t"></div>
            <Report
                title="Hello your report"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac odio tempus, ultricies nunc nec, tincidunt nunc."
                status="closed"
            />
            <div className="border-t"></div>
            <Report
                title="Hello your report"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac odio tempus, ultricies nunc nec, tincidunt nunc."
                status="opened"
            />
        </div>
    );
};

export default ReportList;
