import { Avatar } from '@nextui-org/react';
import { TbDots, TbEyeOff, TbLoader, TbStarFilled, TbTrash } from 'react-icons/tb';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Recommendation as RecommendationType } from '@/types/recommendation.type';
import moment from 'moment';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { useState } from 'react';
import catchAsync from '@/utils/catchAsync';
import { deleteRecommendationService } from '@/services/recommendation.service';
import useListRecommendations from '@/hooks/useListRecommendations';

type Props = {
    info: RecommendationType;
};

const Recommendation = ({ info }: Props) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const { refetch } = useListRecommendations(info.user.id);
    const { data: self } = useSelfProfileQuery();

    const handleDelete = () =>
        catchAsync(
            async () => {
                setLoading(true);
                await deleteRecommendationService(info.id);
                await refetch();
                setOpen(false);
            },
            () => {
                setLoading(false);
            },
        );

    return (
        <div className="group relative">
            <div className="relative flex items-center gap-4">
                <Avatar src={info.user.avatar} className="h-16 w-16" />
                <div className="space-y-0.5">
                    <div className="flex items-baseline gap-2 text-base">
                        <span className="font-medium">{info.owner.name}</span> <span>•</span>
                        <span>{info.owner.oneLiner}</span>
                    </div>
                    <p className="text-gray-500">{moment(info.createdAt).format('MMM DD, YYYY')}</p>
                </div>
                <TbStarFilled className="absolute left-[46px] top-0 text-xl text-yellow-400" />
            </div>
            <p className="mt-4 text-[15px]">{info.content}</p>
            <Dialog open={open} onOpenChange={setOpen}>
                <DropdownMenu>
                    <DropdownMenuTrigger className="absolute right-2 top-2 opacity-0 transition group-hover:opacity-100">
                        <TbDots className="text-lg" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Options</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {info.user.id === self?.id && (
                            <DropdownMenuItem className="cursor-pointer">
                                Hide this recommendation <TbEyeOff className="ml-3 text-lg" />
                            </DropdownMenuItem>
                        )}
                        {info.owner.id === self?.id && (
                            <DialogTrigger asChild>
                                <DropdownMenuItem className="cursor-pointer justify-between">
                                    Delete <TbTrash className="text-lg" />
                                </DropdownMenuItem>
                            </DialogTrigger>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account and remove your data
                            from our servers.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button onClick={handleDelete} disabled={loading} type="submit" variant="destructive">
                            {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                            Delete
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Recommendation;
