import { TbSend } from 'react-icons/tb';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

const SendInviteModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="flex w-full items-center rounded px-2 py-[6px] text-sm transition duration-150 hover:bg-[#F5F5F5]">
                    <TbSend className="mr-2 text-base" /> Send invite
                </button>
            </DialogTrigger>
            <DialogContent className="!rounded-2xl">
                <DialogHeader>
                    <DialogTitle>Invite this job for someone</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <div className="flex gap-2">
                        <Input className="font-normal" placeholder="Enter email" />
                        <Button variant="black">Send invite</Button>
                    </div>
                    <Textarea className="mt-4" placeholder="Your message here (optional)" />
                    <div className="flex min-h-[140px] items-center justify-center text-sm">
                        <p>You have not invited anyone yet.</p>
                    </div>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    );
};

export default SendInviteModal;
