import { MemberList } from '@/components/team';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbUsers } from 'react-icons/tb';

const Team = () => {
    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[6px]">
                <BreadcrumbItem className="flex items-center gap-2">
                    <TbUsers className="text-base" /> Team
                </BreadcrumbItem>
            </Breadcrumbs>
            <MemberList />
        </div>
    );
};

export default Team;
