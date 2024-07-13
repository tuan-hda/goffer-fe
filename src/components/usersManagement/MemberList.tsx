// import { Checkbox } from '../ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar } from '@nextui-org/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
// import BlockButton from './BlockButton';
import RemoveButton from './RemoveButton';
import useCurrOrganization from '@/hooks/useCurrOrganization';
import useInvitedMember from '@/hooks/useInvitedMember';
import moment from 'moment';
import { EditMembership } from '@/types/membership.type';
import { deleteMembershipService, updateMembershipService } from '@/services/membership.service';
import { toast } from 'sonner';
import catchAsync from '@/utils/catchAsync';

const MemberList = () => {
    const { data: org } = useCurrOrganization();
    const { data: orgMemberships, refetch } = useInvitedMember(org?.id || '');

    const updateTeamMember = (id: string, body: EditMembership) => {
        catchAsync(
            async () => {
                await updateMembershipService(id, body);
                toast.success('Team member updated successfully!');
            },
            () => refetch(),
        );
    };

    const removeTeamMember = (id: string) => {
        catchAsync(
            async () => {
                await deleteMembershipService(id);
                toast.success('Team member removed successfully!');
            },
            () => refetch(),
        );
    };

    return (
        <Table>
            <TableHeader className="overflow-hidden">
                <TableRow className="text-xs">
                    <TableHead className="w-[40px] rounded-tl-xl bg-[#F9FAFC] pl-5 font-medium text-black">
                        {/* <Checkbox /> */}
                    </TableHead>
                    <TableHead className="w-[350px] bg-[#F9FAFC] font-medium text-black">Name</TableHead>
                    <TableHead className="w-[180px] bg-[#F9FAFC] font-medium text-black">Role</TableHead>
                    <TableHead className="w-[160px] bg-[#F9FAFC] font-medium text-black">Date added</TableHead>
                    <TableHead className="w-[160px] bg-[#F9FAFC] font-medium text-black">Updated at</TableHead>
                    <TableHead className="rounded-tr-xl bg-[#F9FAFC] pr-5 text-right font-medium text-black"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="rounded-b-xl px-3">
                {orgMemberships &&
                    orgMemberships.data
                        .filter((item) => item.status === 'accepted')
                        .sort((a, b) => b.createdAt.localeCompare(a.updatedAt))
                        .map((item) => (
                            <TableRow key={item.id} className="h-20">
                                <TableCell className="pl-5 font-medium">{/* <Checkbox /> */}</TableCell>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-3">
                                        <Avatar src={item.user.avatar} />
                                        <div>
                                            <p className="font-semibold">{item.user.name}</p>
                                            <p className="font-normal">{item.user.email}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="font-medium">
                                    <Select
                                        value={item.role}
                                        defaultValue={item.role}
                                        onValueChange={(role) => updateTeamMember(item.id, { role })}
                                    >
                                        <SelectTrigger className="w-[120px]">
                                            <SelectValue placeholder="Role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="owner">Owner</SelectItem>
                                            <SelectItem value="interviewer">Collaborator</SelectItem>
                                            <SelectItem value="member">Member</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                                <TableCell>{moment(item.createdAt).format('ll')}</TableCell>
                                <TableCell>{moment(item.updatedAt).format('ll')}</TableCell>
                                <TableCell className="pr-5 text-right">
                                    <div className="flex h-full items-center gap-0">
                                        {/* <BlockButton /> */}
                                        <RemoveButton onRemove={() => removeTeamMember(item.id)} />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
            </TableBody>
        </Table>
    );
};

export default MemberList;
