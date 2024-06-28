import { TbUserPlus } from 'react-icons/tb';
import MemberList from './MemberList';
import InviteDialog from './InviteDialog';
import { Image } from '@nextui-org/react';
import useCurrOrganization from '@/hooks/useCurrOrganization';
import useInvitedMember from '@/hooks/useInvitedMember';

const TeamMember = () => {
    const { data: org } = useCurrOrganization();
    const { data: orgMemberships, refetch } = useInvitedMember(org?.id || '');

    return (
        <div className="mt-4 flex h-2 gap-20 text-sm">
            <div className="min-w-0 max-w-[240px] flex-1">
                <p className="font-semibold">Team members</p>
                <p className="mt-1 text-gray-500">
                    Manage your existing team, change roles/permissions, or add new team members.
                </p>
                <p className="mt-2">
                    {orgMemberships?.data.filter((item) => item.status === 'accepted').length} members.
                </p>
            </div>
            <div className="flex-1">
                <div className="relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed border-[#EBEBEE] px-20 py-10">
                    <div className="rounded-full bg-gray-200/80 p-2">
                        <TbUserPlus />
                    </div>
                    <p className="text-gray-600">You can add your team member here.</p>
                    <InviteDialog />
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
    );
};

export default TeamMember;
