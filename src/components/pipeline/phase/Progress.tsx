import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import pipeline from '@/data/pipeline';
import classNames from 'classnames';
import { useState } from 'react';

interface Props {
    phase?: string;
}

const Progress = ({ phase }: Props) => {
    const current = phase ? pipeline.map((item) => item.value).indexOf(phase) : 0;

    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList className="max-w-full flex-nowrap rounded-xl border bg-white p-2">
                    {pipeline.map((phase, index) => (
                        <BreadcrumbItem className="flex-1">
                            <button
                                key={index}
                                disabled={index > current}
                                className={classNames(
                                    'flex flex-1 flex-col items-center gap-y-2 rounded-lg p-8 transition',
                                    index < current && 'bg-pale-400/30',
                                    index === current && '!bg-black text-white',
                                    index > current && '!bg-gray-100',
                                )}
                            >
                                <p className="font-mono text-sm font-semibold uppercase">{phase.title}</p>
                            </button>
                        </BreadcrumbItem>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
};

export default Progress;
