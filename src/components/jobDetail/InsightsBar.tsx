import pipeline from '@/data/pipeline';
import useCountApplicationsByPhases from '@/hooks/useCountApplicationsByPhases';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const InsightsBar = () => {
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const { data: count } = useCountApplicationsByPhases({
        job: id,
    });

    const getCountByPhase = (phase: string) => {
        return count?.find((c) => c._id === phase)?.count ?? 0;
    };

    useEffect(() => {
        const search = new URLSearchParams(window.location.search);
        if (!search.get('phase')) {
            setSearchParams({ ...Object.fromEntries(search), phase: 'applied' });
        }
    }, []);

    const handleClick = (phase: string) => () => {
        const search = new URLSearchParams(window.location.search);
        setSearchParams({ ...Object.fromEntries(search), phase });
    };

    return (
        <div className="grid grid-cols-7 rounded-xl border bg-white p-2">
            {pipeline.map((stage, index) => (
                <button
                    key={index}
                    onClick={handleClick(stage.value)}
                    className={classNames(
                        'flex flex-col items-center gap-y-2 rounded-lg p-8 transition',
                        searchParams.get('phase') === stage.value && 'bg-pale-400',
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
