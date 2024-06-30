import { CSSProperties } from 'react';

const OverallEvaluation = () => {
    return (
        <div className="rounded-2xl pb-4 shadow-small">
            <div className="flex h-12 items-center px-6 py-3 text-xl font-semibold">Evaluation</div>
            <div className="mb-3 mt-7 flex flex-col items-center px-6">
                <div
                    className="circular-border flex h-36 w-36 overflow-hidden rounded-full p-3"
                    style={
                        {
                            '--deg': '270deg',
                        } as CSSProperties
                    }
                >
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white text-center">
                        <span className="text-lg font-semibold">80</span>
                        overall
                    </div>
                </div>
                <p className="mt-6 w-full text-left">
                    You're on the right track, but there's still room for improvement. We've highlighted a number of
                    quick fixes you can make to your resume to improve its score and your success rate. You should aim
                    for a score of above 85.
                </p>
            </div>
        </div>
    );
};

export default OverallEvaluation;
