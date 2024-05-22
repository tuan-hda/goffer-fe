import { TbBulb } from 'react-icons/tb';

const CopilotInsights = () => {
    return (
        <div className="col-span-3 flex flex-col rounded-3xl bg-black p-6 text-white">
            <div className="flex items-center gap-2 font-semibold">
                <TbBulb className="text-base" /> Copilot Insights
            </div>
            <p className="mt-4 text-2xl">You are doing great!</p>
            <p className="mt-2">
                Keep up the good work and you will achieve your goals in no time. Though some problems should be
                addressed.
            </p>
            <div className="bg-image-doodles -mx-6 -mb-6 mt-7 flex-1 opacity-30" />
        </div>
    );
};

export default CopilotInsights;
