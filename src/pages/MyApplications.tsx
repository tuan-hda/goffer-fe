import ApplicationList from '@/components/myApplications/ApplicationList';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbApple } from 'react-icons/tb';

const MyApplications = () => {
    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[5px]">
                <BreadcrumbItem>
                    <TbApple className="text-lg" /> My applications
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="mr-16 flex gap-x-16 pt-5">
                <ApplicationList />
            </div>
        </div>
    );
};

export default MyApplications;
