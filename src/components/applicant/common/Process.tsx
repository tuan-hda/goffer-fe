import React from 'react';
import { Breadcrumbs, BreadcrumbItem, Chip } from '@nextui-org/react';

interface StepProps {
    name: string;
    number: number;
}

const sample: StepProps[] = [
    {
        name: 'sourced',
        number: 10,
    },
    {
        name: 'applied',
        number: 5,
    },
    {
        name: 'manager screen',
        number: 3,
    },
    {
        name: 'on-site',
        number: 1,
    },
    {
        name: 'hired',
        number: 2,
    },
];

const Process = () => {
    const [, setCurrentPage] = React.useState<React.Key>(3);

    return (
        <Breadcrumbs
            size="sm"
            onAction={(key) => setCurrentPage(key)}
            variant="solid"
            radius="full"
            classNames={{
                list: 'gap-y-2',
            }}
        >
            {sample.map((item, index) => (
                <BreadcrumbItem
                    endContent={
                        <Chip
                            variant="flat"
                            size="sm"
                            color="primary"
                            className="aspect-square p-0 text-center text-[10px] font-semibold text-default-500"
                        >
                            {item.number}
                        </Chip>
                    }
                    key={index}
                    isCurrent={true}
                >
                    {item.name}
                </BreadcrumbItem>
            ))}
        </Breadcrumbs>
    );
};

export default Process;
