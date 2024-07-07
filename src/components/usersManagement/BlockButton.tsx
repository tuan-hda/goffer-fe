import { TbForbid, TbLoader } from 'react-icons/tb';
import { Button } from '../ui/button';
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
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useState } from 'react';
import { Textarea } from '../ui/textarea';
import catchAsync from '@/utils/catchAsync';
import { toast } from 'sonner';
import { blockUserService } from '@/services/users.service';

type BlockButtonProps = {
    userId: string;
    onBlock?: () => void;
};

const BlockButton = ({ userId, onBlock }: BlockButtonProps) => {
    const [reason, setReason] = useState<string>('');
    const [customReason, setCustomReason] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const block = () =>
        catchAsync(
            async () => {
                setLoading(true);

                if (!reason || (reason === 'Other' && !customReason)) {
                    return toast.error('Please select a reason.');
                }
                await blockUserService(userId, reason === 'Other' ? customReason : reason);
                onBlock && onBlock();
                setOpen(false);
            },
            () => {
                setLoading(false);
            },
        );

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="icon" variant="ghost">
                    <TbForbid className="text-lg" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Block this user?</DialogTitle>
                    <DialogDescription>This action cannot be undone.</DialogDescription>
                </DialogHeader>
                <Label>
                    Select a reason why you block this user
                    <Select value={reason} onValueChange={(value) => setReason(value)}>
                        <SelectTrigger className="mt-2 w-full">
                            <SelectValue placeholder="Reason" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="This user is posting inappropriate content.">
                                This user is posting inappropriate content.
                            </SelectItem>
                            <SelectItem value="This user is harassing someone.">
                                This user is harassing someone.
                            </SelectItem>
                            <SelectItem value="This user is a spammer.">This user is a spammer.</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </Label>

                {reason === 'Other' && (
                    <Label>
                        <p>Explain why you block this user</p>
                        <Textarea
                            value={customReason}
                            onChange={(e) => setCustomReason(e.target.value)}
                            className="mt-2"
                            placeholder="Your reason here..."
                        />
                    </Label>
                )}

                <DialogFooter>
                    <DialogClose disabled={loading} asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button disabled={loading} onClick={block} variant="destructive">
                        {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                        Block
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default BlockButton;
