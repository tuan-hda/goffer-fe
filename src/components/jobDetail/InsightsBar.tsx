import pipeline from '@/data/pipeline';
import useCountApplicationsByPhases from '@/hooks/useCountApplicationsByPhases';
import classNames from 'classnames';
import { useState } from 'react';

const InsightsBar = () => {
    const [selected, setSelected] = useState('Applied');

    const { data: count } = useCountApplicationsByPhases();

    const getCountByPhase = (phase: string) => {
        return count?.find((c) => c._id === phase)?.count ?? 0;
    };

    return (
        <div className="grid grid-cols-7 rounded-xl border bg-white p-2">
            {pipeline.map((stage, index) => (
                <button
                    key={index}
                    onClick={() => setSelected(stage.title)}
                    className={classNames(
                        'flex flex-col items-center gap-y-2 rounded-lg p-8 transition',
                        selected === stage.title && 'bg-pale-400',
                    )}
                >
                    <p className="font-mono text-sm font-semibold uppercase">{stage.title}</p>
                    <p className="font-mono text-3xl font-semibold">{getCountByPhase(stage.title.toLowerCase())}</p>
                </button>
            ))}
        </div>
    );
};

export default InsightsBar;
