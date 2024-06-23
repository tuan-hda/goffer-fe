import { ProjectCreate } from '@/types/project.type';
import { Image } from '@nextui-org/react';
import classNames from 'classnames';
import { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

type ProjectProps = {
    image?: string;
    info: ProjectCreate;
    url?: string;
};

const Project = ({ info, url, image }: ProjectProps) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const [style, setStyle] = useState<CSSProperties>({});

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
    }, []);

    const Wrapper = useCallback(
        ({ children, className }: { className?: string; children?: React.ReactNode }) => {
            if ('id' in info) {
                return (
                    <Link
                        className={classNames('flex h-[200px] gap-8', className)}
                        to={url || `/project/${info.id}?previousUrl=${location.pathname}`}
                    >
                        {children}
                    </Link>
                );
            }
            return <div className={classNames('flex h-[200px] gap-8', className)}>{children}</div>;
        },
        [info.id],
    );

    return (
        <Wrapper>
            <div className="aspect-[4/3]">
                <Image
                    classNames={{
                        wrapper: classNames('overflow-hidden h-full !max-w-full w-full', !image && 'bg-gray-100'),
                        img: 'rounded-2xl object-cover h-full w-full',
                    }}
                    src={image}
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
                    {info.tools.map((tool, index) => (
                        <div key={index} className="whitespace-nowrap rounded-full border px-2 py-1">
                            {tool}
                        </div>
                    ))}
                    <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-r from-black/0 to-gray-500/10"></div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Project;
