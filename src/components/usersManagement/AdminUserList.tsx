import useListPeople from '@/hooks/useListPeople';
import UserList from './UserList';
import { Membership } from '@/types/membership.type';
import { TbLoader } from 'react-icons/tb';
import { Pagination } from '@nextui-org/react';
import { useSearchParams } from 'react-router-dom';

const AdminUserList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const {
        data: users,
        refetch,
        isLoading,
    } = useListPeople({
        sortBy: 'createdAt:desc',
        isBanned: false,
        page: searchParams.get('page') || 1,
    });
    const { refetch: refetchBlock } = useListPeople({
        sortBy: 'blockedAt:desc',
        isBanned: true,
        page: searchParams.get('blockPage') || 1,
    });

    if (isLoading) {
        return (
            <div className="flex h-96  items-center justify-center rounded-xl border">
                <TbLoader className="animate-spin text-4xl text-gray-400" />
            </div>
        );
    }

    if (!users || !users.results) return null;

    const onUpdate = () => {
        refetch();
        refetchBlock();
    };

    return (
        <div className="flex flex-col items-center">
            <div className="rounded-xl border">
                <UserList onUpdate={onUpdate} users={users.results} />
            </div>
            <Pagination
                className="mt-2"
                variant="flat"
                color="default"
                onChange={(page) =>
                    setSearchParams({
                        page: String(page),
                    })
                }
                total={users.totalPages}
                page={users.page}
            />
        </div>
    );
};

export default AdminUserList;
