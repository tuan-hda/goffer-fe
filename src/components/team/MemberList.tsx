import { TbTrash } from 'react-icons/tb';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar } from '@nextui-org/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';

const MemberList = () => {
    return (
        <Table>
            <TableHeader className="overflow-hidden">
                <TableRow className="text-xs">
                    <TableHead className="w-[40px] rounded-tl-xl bg-[#F9FAFC] pl-5 font-medium text-black">
                        <Checkbox />
                    </TableHead>
                    <TableHead className="w-[350px] bg-[#F9FAFC] font-medium text-black">Name</TableHead>
                    <TableHead className="w-[180px] bg-[#F9FAFC] font-medium text-black">Role</TableHead>
                    <TableHead className="w-[160px] bg-[#F9FAFC] font-medium text-black">Date added</TableHead>
                    <TableHead className="w-[160px] bg-[#F9FAFC] font-medium text-black">Last active</TableHead>
                    <TableHead className="rounded-tr-xl bg-[#F9FAFC] pr-5 text-right font-medium text-black"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="rounded-b-xl px-3">
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <TableRow key={i} className="h-20">
                            <TableCell className="pl-5 font-medium">
                                <Checkbox />
                            </TableCell>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-3">
                                    <Avatar src="https://res.cloudinary.com/doxsstgkc/image/upload/v1714493760/goffer/rklmzhk6m6abekce57ha.jpg" />
                                    <div>
                                        <p className="font-semibold">Tuan Hoang Dinh Anh</p>
                                        <p className="font-normal">hdatdragon2@gmail.com</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="font-medium">
                                <Select>
                                    <SelectTrigger className="w-[120px]">
                                        <SelectValue defaultValue="member" placeholder="Role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="admin">Admin</SelectItem>
                                        <SelectItem value="interviewer">Interviewer</SelectItem>
                                        <SelectItem value="member">Member</SelectItem>
                                    </SelectContent>
                                </Select>
                            </TableCell>
                            <TableCell>Feb 22, 2024</TableCell>
                            <TableCell>Mar 14, 2024</TableCell>
                            <TableCell className="pr-5 text-right">
                                <div className="flex h-full items-center gap-0">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button size="icon" variant="ghost">
                                                <TbTrash className="text-lg" />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Do you want to remove this member?</DialogTitle>
                                                <DialogDescription>This action cannot be undone.</DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter>
                                                <DialogClose asChild>
                                                    <Button variant="outline">Cancel</Button>
                                                </DialogClose>
                                                <Button variant="destructive">Remove</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    );
};

export default MemberList;
