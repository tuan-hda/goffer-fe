import { TbArrowLeft } from 'react-icons/tb';

const OverviewStats = () => {
    return (
        <div>
            <div className="grid grid-cols-5 gap-8">
                <div className="relative rounded-3xl bg-[#FFEFE3] p-6 text-center">
                    <p className="text-center text-3xl font-medium">25</p>
                    <p className="mt-2">Total Users</p>
                    <p className="mt-[6px] text-xs font-light text-gray-500">5% increased from last period</p>
                    <TbArrowLeft className="absolute right-4 top-4 rotate-[135deg] text-xl text-[#583F29]" />
                </div>
                <div className="relative rounded-3xl bg-[#F8FAEA] p-6 text-center">
                    <p className="text-center text-3xl font-medium">123.3k</p>
                    <p className="mt-2">Web Visits</p>
                    <p className="mt-[6px] text-xs font-light text-gray-500">5% increased from last period</p>
                    <TbArrowLeft className="absolute right-4 top-4 rotate-[135deg] text-xl text-[#8B8F6C]" />
                </div>
                <div className="relative rounded-3xl bg-[#FCF4FE] p-6 text-center">
                    <p className="text-center text-3xl font-medium">1m16sec</p>
                    <p className="mt-2">Average Duration</p>
                    <p className="mt-[6px] text-xs font-light text-gray-500">5% decreased from last period</p>
                    <TbArrowLeft className="absolute right-4 top-4 rotate-[225deg] text-xl text-[#5A435C]" />
                </div>
                <div className="relative rounded-3xl bg-[#F5F6FA] p-6 text-center">
                    <p className="text-center text-3xl font-medium">20%</p>
                    <p className="mt-2">Bounce Rate</p>
                    <p className="mt-[6px] text-xs font-light text-gray-500">5% decreased from last period</p>
                    <TbArrowLeft className="absolute right-4 top-4 rotate-[225deg] text-xl text-black" />
                </div>
                <div className="relative rounded-3xl bg-[#1C1B20] p-6 text-center text-white">
                    <p className="text-center text-3xl font-medium">87.5%</p>
                    <p className="mt-2">Conversion Rate</p>
                    <p className="mt-[6px] text-xs font-light text-gray-300">5% decreased from last period</p>
                    <TbArrowLeft className="absolute right-4 top-4 rotate-[225deg] text-xl text-white" />
                </div>
            </div>
        </div>
    );
};

export default OverviewStats;
