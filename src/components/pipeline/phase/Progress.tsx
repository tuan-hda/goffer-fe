import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import classNames from 'classnames';
import { useState } from 'react';

const pipeline = ['applied', 'assessed', 'interviewed', 'offered', 'hired'];

const Progress = () => {
    const [current, setCurrent] = useState(2);
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList className="max-w-full flex-nowrap !gap-0">
                    {pipeline.map((phase, index) => (
                        <BreadcrumbItem className="flex-1 !gap-0">
                            <Button
                                onClick={() => setCurrent(index)}
                                className={classNames(
                                    'arrow-div !w-full rounded-none !bg-primary uppercase',
                                    index < current && '!bg-beige',
                                    index > current && '!bg-border text-text',
                                )}
                            >
                                {phase}
                            </Button>
                        </BreadcrumbItem>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
};

export default Progress;
