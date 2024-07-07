import React from 'react';
// import { Checkbox } from '../ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar } from '@nextui-org/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import moment from 'moment';
import { User } from '@/types/user.type';
import BlockButton from './BlockButton';
import catchAsync from '@/utils/catchAsync';
import { updateUserRoleService } from '@/services/users.service';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';

type UserListProps = {
    users: User[];
    onUpdate: () => void;
};

const UserList = ({ users, onUpdate }: UserListProps) => {
    const { data: self } = useSelfProfileQuery();

    const updateRole = (userId: string, role: 'admin' | 'user') =>
        catchAsync(async () => {
            await updateUserRoleService(userId, role);
            onUpdate();
        });

    return (
        <Table>
            <TableHeader className="overflow-hidden">
                <TableRow className="text-xs">
                    <TableHead className="rounded-tl-xl bg-[#F9FAFC] font-medium text-black"></TableHead>
                    <TableHead className="w-[350px] bg-[#F9FAFC] font-medium text-black">Name</TableHead>
                    <TableHead className="w-[180px] bg-[#F9FAFC] font-medium text-black">Role</TableHead>
                    <TableHead className="w-[160px] bg-[#F9FAFC] font-medium text-black">Date added</TableHead>
                    <TableHead className="w-[160px] bg-[#F9FAFC] font-medium text-black">Updated at</TableHead>
                    <TableHead className="rounded-tr-xl bg-[#F9FAFC] pr-5 text-right font-medium text-black"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="rounded-b-xl px-3">
                {users.map((user) => (
                    <TableRow key={user.id} className="h-20">
                        <TableCell className="font-medium">{/* <Checkbox /> */}</TableCell>
                        <TableCell className="font-medium">
                            <div className="flex items-center gap-3">
                                <Avatar src={user.avatar} />
                                <div>
                                    <p className="font-semibold">{user.name}</p>
                                    <p className="font-normal">{user.email}</p>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell className="font-medium">
                            <Select
                                onValueChange={(value) => updateRole(user.id, value as 'admin' | 'user')}
                                value={user.role}
                                defaultValue={user.role}
                            >
                                <SelectTrigger className="w-[120px]">
                                    <SelectValue placeholder="Role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="admin">Admin</SelectItem>
                                    <SelectItem value="user">User</SelectItem>
                                </SelectContent>
                            </Select>
                        </TableCell>
                        <TableCell>{moment(user.createdAt).format('ll')}</TableCell>
                        <TableCell>{moment(user.updatedAt).format('ll')}</TableCell>
                        <TableCell className="pr-5 text-right">
                            {self?.id !== user.id && (
                                <div className="flex h-full items-center gap-0">
                                    <BlockButton onBlock={onUpdate} userId={user.id} />
                                </div>
                            )}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default UserList;
