import { useEffect, useRef, useState } from 'react';
import { PlateEditor } from '../editor/PlateEditor';
import { Value } from '@udecode/plate-common';

type PlainPlateProps = {
    data: Value;
};

const PlainPlate = ({ data }: PlainPlateProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [description, setDescription] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            if (ref.current) {
                const content = ref.current.querySelector('.slate-SelectionArea');
                if (content) {
                    clearInterval(interval);

                    content.querySelectorAll('[data-slate-leaf="true"]').forEach((leaf) => {
                        leaf.classList.add('transparentLeaf');
                    });
                    setDescription(content.innerHTML);
                }
            }
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <div
                // className="rounded-xl border bg-white/100 px-5 py-4"
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
            />
            <div ref={ref} className="pointer-events-none fixed opacity-0">
                <PlateEditor className="!bg-transparent p-0" readOnly value={data} />
            </div>
        </>
    );
};

export default PlainPlate;
