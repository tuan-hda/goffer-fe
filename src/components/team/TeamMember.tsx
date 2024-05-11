import { TbUserPlus } from 'react-icons/tb';
import MemberList from './MemberList';
import InviteDialog from './InviteDialog';

const TeamMember = () => {
    return (
        <div className="mt-4 flex h-2 gap-20 text-sm">
            <div className="min-w-0 max-w-[240px] flex-1">
                <p className="font-semibold">Team members</p>
                <p className="mt-1 text-gray-500">
                    Manage your existing team, change roles/permissions, or add new team members.
                </p>
                <p className="mt-2">20 members.</p>
            </div>
            <div className="flex-1">
                <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#EBEBEE] px-20 py-10">
                    <div className="rounded-full bg-gray-200/80 p-2">
                        <TbUserPlus />
                    </div>
                    <p className="text-gray-600">You can add your team member here.</p>
                    <InviteDialog />
                </div>

                <div className="mt-6 rounded-xl border">
                    <MemberList />
                </div>
            </div>
        </div>
    );
};

export default TeamMember;
