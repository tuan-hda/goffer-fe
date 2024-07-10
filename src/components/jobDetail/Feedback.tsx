import { Avatar } from '@nextui-org/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card';
import { TbDots } from 'react-icons/tb';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Feedback as FeedbackProps } from '@/types/feedback.type';
import moment from 'moment';
import { getSentimentIconFromKey } from '@/utils/feedback';
import { deleteFeedbackService, updateFeedbackService } from '@/services/feedback.service';
import catchAsync from '@/utils/catchAsync';
import { toast } from 'sonner';

interface Props {
    data: FeedbackProps;
    refresh?: () => void;
}

export const Feedback = ({ data, refresh }: Props) => {
    const onResolved = () => {
        catchAsync(
            async () => {
                const res = await updateFeedbackService(data.id, { resolved: !data.resolved });
                toast.success(`Mark as ${res.resolved ? 'resolved' : 'unresolved'}`);
            },
            () => refresh && refresh(),
        );
    };
    const onDelete = () => {
        catchAsync(
            async () => {
                await deleteFeedbackService(data.id);
                toast.success('Delete feedback successfully!');
            },
            () => refresh && refresh(),
        );
    };
    return (
        <Card className="relative shadow-none">
            <CardHeader>
                <CardDescription className="flex items-center gap-2">
                    <Avatar src={data.owner.avatar} className="h-6 w-6" />
                    <span className="font-medium">{data.owner.name}</span>
                    <span className="text-text/80">{moment(data.createdAt).format('ll')}</span>
                </CardDescription>
            </CardHeader>
            <CardContent>{data.feedback}</CardContent>
            <CardFooter className="flex items-center gap-4 capitalize text-text/80">
                {getSentimentIconFromKey(data.sentiment)} {data.sentiment}
            </CardFooter>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="absolute right-3 top-3">
                        <TbDots className="text-base" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={onResolved}>
                        Mark as {data.resolved ? 'unresolved' : 'resolved'}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={onDelete}>Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </Card>
    );
};
