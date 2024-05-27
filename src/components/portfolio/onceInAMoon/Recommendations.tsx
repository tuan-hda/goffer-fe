import { recommendations } from '@/data/mock/recommendations';
import { Avatar } from '@nextui-org/react';
import { useState } from 'react';
import { TbArrowLeft } from 'react-icons/tb';

const Recommendations = () => {
    const [curr, setCurr] = useState(0);

    return (
        <div id="recommendations" className="mx-auto w-full max-w-[64vw]">
            <p className="mb-[10vh] mt-[calc(55vh-200px)] text-center uppercase">RECOMMENDATIONS</p>
            <div className="flex items-start justify-between gap-[5vh]">
                <button
                    className="group mt-[3vh]"
                    onClick={() => setCurr((prev) => (prev - 1 + recommendations.length) % recommendations.length)}
                >
                    <TbArrowLeft className="text-[5vh] text-gray-600 transition group-hover:text-black" />
                </button>
                <div className="font-mono">
                    <p className="text-center text-[6.5vh] leading-[140%]">"{recommendations[curr].content}"</p>
                    <div className="mt-[4vh] flex items-center justify-center gap-[3vh]">
                        <Avatar src={recommendations[curr].avatar} className="h-[8vh] w-[8vh]" />
                        <p className="text-[3vh]">
                            <span className="font-medium">{recommendations[curr].name}</span>,{' '}
                            <span className="text-gray-500">{recommendations[curr].company}</span>
                        </p>
                    </div>
                </div>
                <button
                    className="group mt-[3vh]"
                    onClick={() => setCurr((prev) => (prev + 1) % recommendations.length)}
                >
                    <TbArrowLeft className="rotate-180 text-[5vh] text-gray-600 transition group-hover:text-black" />
                </button>
            </div>
        </div>
    );
};

export default Recommendations;
