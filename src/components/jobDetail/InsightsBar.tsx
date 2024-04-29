import classNames from 'classnames';
import { useState } from 'react';

const pipeline = [
    { title: 'Applied', count: 20 },
    { title: 'Shortlisted', count: 15 },
    { title: 'Phone call', count: 10 },
    { title: 'On-site', count: 5 },
    { title: 'Offer', count: 2 },
    { title: 'Hired', count: 1 },
];

const InsightsBar = () => {
    const [selected, setSelected] = useState('Applied');

    return (
        <div className="grid grid-cols-6 rounded-xl bg-white p-2 shadow-2xl">
            {pipeline.map((stage) => (
                <button
                    onClick={() => setSelected(stage.title)}
                    className={classNames(
                        'flex flex-col items-center gap-y-2 rounded-lg p-8 transition',
                        selected === stage.title && 'bg-pale-400',
                    )}
                >
                    <p className="font-mono text-sm font-semibold uppercase">{stage.title}</p>
                    <p className="font-mono text-3xl font-semibold">{stage.count}</p>
                </button>
            ))}
        </div>
    );
};

export default InsightsBar;
