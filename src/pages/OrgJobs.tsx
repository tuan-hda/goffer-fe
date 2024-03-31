import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbBaguette } from 'react-icons/tb';

const OrgJobs = () => {
    return (
        <div className="flex min-h-screen w-full flex-col bg-pale p-5 text-text">
            <h1 className="mt-[6px] flex items-center gap-1 text-sm">
                <Breadcrumbs>
                    <BreadcrumbItem>
                        <TbBaguette className="text-lg" /> Jobs
                    </BreadcrumbItem>
                </Breadcrumbs>
            </h1>
        </div>
    );
};

export default OrgJobs;
