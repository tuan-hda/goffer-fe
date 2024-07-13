import { UserDetail } from '@/components/userDetail';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbUser } from 'react-icons/tb';
import { useParams } from 'react-router-dom';

const ProfileDetail = () => {
    const { userId } = useParams();

    if (!userId) return null;

    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[5px]">
                <BreadcrumbItem>
                    <TbUser className="text-lg" /> Profile
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="pt-5">
                <UserDetail id={userId} />
            </div>
        </div>
    );
};

export default ProfileDetail;
