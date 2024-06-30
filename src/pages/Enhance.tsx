import { AnalyzePanel, ViewPanel } from '@/components/enhance';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { MdOutlineAutoGraph } from 'react-icons/md';

const Enhance = () => {
    return (
        <div className="relative flex h-screen flex-col px-6 pt-4 text-sm">
            <Breadcrumbs className="mt-[5px]">
                <BreadcrumbItem>
                    <MdOutlineAutoGraph className="text-lg" />{' '}
                    <span className="ml-1 text-base">Review and enhance your resume</span>
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="-mx-6 mt-4 flex flex-1 border-t">
                <ViewPanel />
                <div className="h-full border-r" />
                <AnalyzePanel />
            </div>
        </div>
    );
};

export default Enhance;
