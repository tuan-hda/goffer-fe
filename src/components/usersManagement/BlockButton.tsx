import { TbForbid } from 'react-icons/tb';
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

const BlockButton = () => {
    const [reason, setReason] = useState<string>('');

    return (
        <Dialog>
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
                        <Textarea className="mt-2" placeholder="Your reason here..." />
                    </Label>
                )}

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="destructive">Block</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default BlockButton;
