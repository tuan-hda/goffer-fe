import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar, Pagination } from '@nextui-org/react';
import { TbArrowBackUpDouble, TbLoader } from 'react-icons/tb';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useSearchParams } from 'react-router-dom';
import useListPeople from '@/hooks/useListPeople';
import moment from 'moment';
import catchAsync from '@/utils/catchAsync';
import { unblockUserService } from '@/services/users.service';

const BlockList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const {
        data: users,
        refetch,
        isLoading,
    } = useListPeople({
        sortBy: 'blockedAt:desc',
        isBanned: true,
        page: searchParams.get('blockPage') || 1,
    });
    const { refetch: refetchUsers } = useListPeople({
        sortBy: 'createdAt:desc',
        isBanned: false,
        page: searchParams.get('page') || 1,
    });

    if (isLoading) {
        return (
            <div className="flex h-96  items-center justify-center rounded-xl border">
                <TbLoader className="animate-spin text-4xl text-gray-400" />
            </div>
        );
    }
    if (!users || !users.results) return null;

    if (users.results.length === 0) {
        return <div className="flex h-64 items-center justify-center rounded-xl border">No blocked users.</div>;
    }

    const unblock = (userId: string) => () =>
        catchAsync(async () => {
            await unblockUserService(userId);
            refetch();
            refetchUsers();
        });

    return (
        <div className="flex flex-col items-center">
            <div className="rounded-xl border">
                <Table>
                    <TableHeader className="overflow-hidden">
                        <TableRow className="text-xs">
                            <TableHead className="rounded-tl-xl bg-[#F9FAFC] font-medium text-black"></TableHead>
                            <TableHead className="w-[350px] bg-[#F9FAFC] font-medium text-black">Name</TableHead>
                            <TableHead className="w-[160px] bg-[#F9FAFC] font-medium text-black">
                                Block reason
                            </TableHead>
                            <TableHead className="w-[160px] bg-[#F9FAFC] font-medium text-black">Date added</TableHead>
                            <TableHead className="w-[160px] bg-[#F9FAFC] font-medium text-black">Last active</TableHead>
                            <TableHead className="w-[160px] bg-[#F9FAFC] font-medium text-black">
                                Date blocked
                            </TableHead>
                            <TableHead className="rounded-tr-xl bg-[#F9FAFC] pr-5 text-right font-medium text-black"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="rounded-b-xl px-3">
                        {users.results.map((user, i) => (
                            <TableRow key={i} className="h-20">
                                <TableCell className="font-medium"></TableCell>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-3">
                                        <Avatar src={user.avatar} />
                                        <div>
                                            <p className="font-semibold">{user.name}</p>
                                            <p className="font-normal">{user.email}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Popover>
                                        <PopoverTrigger className="underline">View</PopoverTrigger>
                                        <PopoverContent className="text-sm">
                                            <p>{user.reason}</p>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                                <TableCell>{moment(user.createdAt).format('ll')}</TableCell>
                                <TableCell>{moment(user.updatedAt).format('ll')}</TableCell>
                                <TableCell>{moment(user.blockedAt).format('ll')}</TableCell>
                                <TableCell className="pr-5 text-right">
                                    <div className="flex h-full items-center gap-0">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button onClick={unblock(user.id)} size="icon" variant="ghost">
                                                        <TbArrowBackUpDouble className="text-xl" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Unblock user</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Pagination
                className="mt-2"
                variant="flat"
                color="default"
                onChange={(blockPage) =>
                    setSearchParams({
                        blockPage: String(blockPage),
                    })
                }
                total={users.totalPages}
                page={users.page}
            />
        </div>
    );
};

export default BlockList;
