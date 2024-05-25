import { Label } from '../ui/label';
import { Image } from '@nextui-org/react';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import AdditionalInformation from './AdditionalInformation';
import useNewProjectStore from '@/stores/newProject';
import classNames from 'classnames';

type PreviewProjectProps = {
    hidden?: boolean;
};

export type Info = {
    title: string;
    skills: never[];
    tools: never[];
    description: string;
    cover: string;
};

const PreviewProject = ({ hidden = false }: PreviewProjectProps) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const [style, setStyle] = useState<CSSProperties>({});
    const info = useNewProjectStore((state) => state.info);

    useEffect(() => {
        const processEllipsisLines = () => {
            if (ref.current) {
                const lineHeight = parseInt(window.getComputedStyle(ref.current).lineHeight);
                const maxLines = Math.floor(ref.current.clientHeight / lineHeight);
                setStyle({
                    '--lines': maxLines,
                    maxHeight: `${lineHeight * maxLines}px`,
                } as CSSProperties);
            }
        };

        processEllipsisLines();
        window.addEventListener('resize', processEllipsisLines);
        return () => {
            window.removeEventListener('resize', processEllipsisLines);
        };
    }, [hidden]);

    if (hidden) return null;
    return (
        <div className="flex w-full text-sm text-text">
            <div className="mx-auto mt-20 flex w-full max-w-7xl gap-10">
                <AdditionalInformation />
                <div className="h-full min-h-[calc(100vh-160px)] border-r border-black/10" />
                <div className="min-w-0 flex-1">
                    <Label>Preview</Label>
                    <p className="mb-7 mt-1">Here's what your project will look like to others.</p>
                    <div className="flex h-[250px] gap-6 rounded-3xl border bg-white p-7">
                        <div className="aspect-[4/3]">
                            <Image
                                classNames={{
                                    wrapper: classNames(
                                        'overflow-hidden h-full !max-w-full w-full',
                                        !info.cover && 'bg-gray-100',
                                    ),
                                    img: 'rounded-2xl object-cover h-full w-full',
                                }}
                                src={info.cover}
                            />
                        </div>
                        <div className="flex h-full min-w-0 flex-1 flex-col gap-y-3">
                            <p className="text-2xl font-medium">{info.title}</p>
                            <p ref={ref} style={style} className="lines-ellipsis flex-1">
                                {info.description}
                            </p>
                            <div className="relative mt-auto flex w-full items-center gap-2 overflow-hidden text-xs">
                                {info.skills.map((skill, index) => (
                                    <div key={index} className="whitespace-nowrap rounded-full border px-2 py-1">
                                        {skill}
                                    </div>
                                ))}
                                {info.tools.map((skill, index) => (
                                    <div key={index} className="whitespace-nowrap rounded-full border px-2 py-1">
                                        {skill}
                                    </div>
                                ))}
                                <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-r from-black/0 to-gray-500/10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewProject;
