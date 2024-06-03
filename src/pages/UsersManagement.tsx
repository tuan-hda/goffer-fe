import { CreateUserDialog, MemberList } from '@/components/usersManagement';
import BlockList from '@/components/usersManagement/BlockList';
import { BreadcrumbItem, Breadcrumbs, Image } from '@nextui-org/react';
import { TbUserPlus, TbUsers } from 'react-icons/tb';

const UsersManagement = () => {
    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[6px]">
                <BreadcrumbItem className="flex items-center gap-2">
                    <TbUsers className="text-base" /> Users management
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="mt-4 flex gap-20 text-sm">
                <div className="min-w-0 max-w-[240px] flex-1">
                    <p className="font-semibold">Users</p>
                    <p className="mt-1 text-gray-500">Manage your users in the system.</p>
                    <p className="mt-2">20 users.</p>
                </div>
                <div className="flex-1">
                    <div className="relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed border-[#EBEBEE] px-20 py-10">
                        <div className="rounded-full bg-gray-200/80 p-2">
                            <TbUserPlus />
                        </div>
                        <CreateUserDialog />
                        <div className="absolute -right-14 top-10 z-0">
                            <Image
                                src="/flower.png"
                                classNames={{
                                    wrapper: 'w-80 h-80',
                                }}
                            />
                        </div>
                    </div>

                    <div className="mt-6 rounded-xl border">
                        <MemberList />
                    </div>
                </div>
            </div>

            <div className="my-20 border-t border-gray-100"></div>

            <div className="mt-20 flex gap-20 text-sm">
                <div className="min-w-0 max-w-[240px] flex-1">
                    <p className="font-semibold">Blocked</p>
                    <p className="mt-1 text-gray-500">See all users that you have blocked.</p>
                    <p className="mt-2">15 blocked users.</p>
                </div>
                <div className="flex-1">
                    <div className="rounded-xl border">
                        <BlockList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersManagement;
