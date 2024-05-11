import { TbPlus } from 'react-icons/tb';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

const InviteDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="gap-2" variant="black">
                    <TbPlus /> Invite a team member
                </Button>
            </DialogTrigger>
            <DialogContent className="text-sm sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Invite member</DialogTitle>
                    <DialogDescription>
                        Collaborate with your network to reach even higher performance
                    </DialogDescription>
                </DialogHeader>

                <div>
                    <Label htmlFor="email">Email</Label>
                    <div className="mt-2 flex items-center gap-2">
                        <Input id="email" placeholder="contact@example.com" />
                        <Button variant="black">Send invite</Button>
                    </div>
                </div>

                <div className="mt-2">
                    <p className="font-medium">Sent invites</p>
                    <div className="mt-2 space-y-1">
                        <div className="flex justify-between">
                            <p>hdatdragon2@gmail.com</p>
                            <p>Sent</p>
                        </div>
                        <div className="flex justify-between">
                            <p>hdatdragon184@gmail.com</p>
                            <p className="text-green-500">Accepted</p>
                        </div>
                        <div className="flex justify-between">
                            <p>hdatdragon18402@gmail.com</p>
                            <p className="text-red-500">Rejected</p>
                        </div>
                    </div>
                    {/* <p>Your sent invites will be shown here.</p> */}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default InviteDialog;
