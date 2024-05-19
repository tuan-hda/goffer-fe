import { CSSProperties } from 'react';
import { Badge } from '../ui/badge';
import classNames from 'classnames';

type EnhancementProps = {
    title: string;
    assessment: 'Needs work' | 'Average' | 'Good' | 'Excellent';
};

const Enhancement = ({ title, assessment }: EnhancementProps) => {
    return (
        <>
            <div className="mb-4 flex items-center gap-3">
                <p className="font-semibold">{title}</p>
                <Badge
                    className={classNames('font-medium', {
                        'bg-green-500': assessment === 'Excellent' || assessment === 'Good',
                        'bg-yellow-500': assessment === 'Average',
                        'bg-orange-500': assessment === 'Needs work',
                    })}
                >
                    {assessment}
                </Badge>
            </div>
            <div className="flex gap-5">
                <div
                    className="circular-border flex h-24 w-24 overflow-hidden rounded-full p-[6px]"
                    style={
                        {
                            '--progress-color': '#000',
                            '--deg': '270deg',
                        } as CSSProperties
                    }
                >
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white text-center">
                        <span className="text-base font-semibold">80</span>
                    </div>
                </div>

                <p className="w-full min-w-0 flex-1 text-left">
                    You're on the right track, but there's still room for improvement. We've highlighted a number of
                    quick fixes you can make to your resume to improve its score and your success rate. You should aim
                    for a score of above 85.
                </p>
            </div>
        </>
    );
};

export default Enhancement;
