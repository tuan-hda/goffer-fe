import OrganizationAboutDetail from '@/components/organizationAbout/OrganizationAboutDetail';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbAt } from 'react-icons/tb';

const OrganizationAbout = () => {
    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[5px]">
                <BreadcrumbItem>
                    <TbAt className="text-lg" /> About
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="mx-auto mt-5">
                <OrganizationAboutDetail />
            </div>
        </div>
    );
};

export default OrganizationAbout;
