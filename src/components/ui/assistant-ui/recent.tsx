import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { CSSProperties, useEffect, useState } from 'react';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { Button } from '../button';
import { TbChevronDown } from 'react-icons/tb';
import classNames from 'classnames';

type RecentProps = {
    name: string;
    onChange: (value: string) => void;
};

const Recent = ({ name, onChange }: RecentProps) => {
    const { data: self } = useSelfProfileQuery();
    const [prompts, setPrompts] = useState<string[]>([]);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        try {
            const identifier = `recent-${self?.id || 'anonymous'}-${name}`;
            const recent = JSON.parse(localStorage.getItem(identifier) || '[]');
            setPrompts(recent);
        } catch (error) {
            console.error(error);
        }
    }, []);

    if (!prompts.length) return null;

    return (
        <div>
            <div className="flex items-center text-sm font-medium">
                <IoChatbubblesOutline className="mr-2 text-blue-500" /> Your recent prompts{' '}
                <Button
                    onClick={() => setCollapsed((prev) => !prev)}
                    variant="ghost"
                    size="sm"
                    className="px-2 text-sm"
                >
                    <TbChevronDown className={classNames('transition', !collapsed && 'rotate-180')} />
                </Button>
            </div>
            {!collapsed && (
                <div className="mt-1 grid grid-cols-3 gap-3">
                    {prompts.map((prompt, index) => (
                        <div
                            onClick={() => onChange(prompt)}
                            key={index}
                            className="cursor-pointer rounded-xl border p-3 transition hover:border-black/60"
                        >
                            <p
                                className="lines-ellipsis"
                                style={
                                    {
                                        '--lines': 4,
                                    } as CSSProperties
                                }
                            >
                                {prompt}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Recent;
