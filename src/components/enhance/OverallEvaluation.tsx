import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { CSSProperties } from 'react';
import { TbBadgeFilled, TbCircleCheckFilled } from 'react-icons/tb';
import Suggestion from './Suggestion';

const OverallEvaluation = () => {
    const { data: self } = useSelfProfileQuery();

    if (!self?.enhance) {
        return null;
    }

    const getRingColor = (score: number) => {
        if (score < 50) {
            return '#E83D38';
        } else if (score < 70) {
            return '#FAB23D';
        } else {
            return '#06BE70';
        }
    };

    const getDeg = (score: number) => {
        return Math.floor((score / 100) * 360);
    };

    return (
        <div className="rounded-2xl px-1 pb-4 pt-2 shadow-small">
            <div className="flex h-12 items-center gap-2 px-6 text-base font-semibold">
                Evaluation <TbBadgeFilled className="text-lg" />
            </div>
            <div className="mb-3 mt-7 flex flex-col items-center px-6">
                <div
                    className="circular-border flex h-36 w-36 overflow-hidden rounded-full p-3"
                    style={
                        {
                            '--deg': `${getDeg(self.enhance.score)}deg`,
                            '--progress-color': getRingColor(self.enhance.score),
                        } as CSSProperties
                    }
                >
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white text-center">
                        <span className="text-lg font-semibold">{self?.enhance?.score}</span>
                        overall
                    </div>
                </div>
                <p className="mt-8 w-full text-left text-text/80">
                    Your resume has scored {self?.enhance?.score} overall. This score is based on the evaluation of your
                    resume content, format, and structure.
                </p>
                <div className="mt-4 w-full border-t" />
                <div className="mt-4 grid w-full grid-cols-3 gap-4">
                    <Suggestion title="Summary" value={self.enhance.result.summary} />
                    <Suggestion title="Format" value={self.enhance.result.format} />
                    <Suggestion title="Contact" value={self.enhance.result.contact} />
                    <Suggestion title="Skills" value={self.enhance.result.skills} />
                    <Suggestion title="Experiences" value={self.enhance.result.experiences} />
                    <Suggestion title="Educations" value={self.enhance.result.educations} />
                </div>
            </div>
        </div>
    );
};

export default OverallEvaluation;
