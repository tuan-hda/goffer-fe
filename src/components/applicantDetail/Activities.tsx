import Activity from './Activity';

const Activities = () => {
    return (
        <div className="relative mt-5 space-y-5">
            <div className="absolute left-[7px] top-0 h-full border-l"></div>

            <Activity
                content={
                    <>
                        <span className="font-medium">Tuan Hoang Dinh Anh</span> applied for the position
                    </>
                }
                time="April 24, 2024 - 1:30 PM"
            />
            <Activity
                content={
                    <>
                        <span className="font-medium">Tuan Hoang Dinh Anh</span> applied for the position
                    </>
                }
                time="April 24, 2024 - 1:30 PM"
            />
        </div>
    );
};

export default Activities;
