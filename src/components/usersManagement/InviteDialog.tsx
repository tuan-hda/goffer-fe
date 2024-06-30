import { TbPlus } from 'react-icons/tb';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import useCurrOrganization from '@/hooks/useCurrOrganization';
import { addMemberService } from '@/services/membership.service';
import { toast } from 'sonner';
import { useRef } from 'react';
import useInvitedMember from '@/hooks/useInvitedMember';
import catchAsync from '@/utils/catchAsync';

const InviteDialog = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { data: org } = useCurrOrganization();
    const { data: orgMemberships, refetch } = useInvitedMember(org?.id || '');

    const inviteNewMember = async (email?: string) => {
        if (!org?.id || !email) return;
        catchAsync(
            async () => {
                const membership = await addMemberService({ email, org: org.id });
                if (membership) {
                    toast.success('Invitation sent successfully');
                    if (inputRef.current) {
                        inputRef.current.value = '';
                        inputRef.current.focus();
                    }
                }
            },
            () => refetch(),
        );
    };
    const handleKeyDown = async (event: any) => {
        if (event.key === 'Enter') {
            await inviteNewMember(event.target.value);
        }
    };

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
                        <Input onKeyDown={handleKeyDown} ref={inputRef} id="email" placeholder="contact@example.com" />
                        <Button onClick={() => inviteNewMember(inputRef.current?.value)} variant="black">
                            Send invite
                        </Button>
                    </div>
                </div>

                <div className="mt-2">
                    <p className="font-medium">Sent invites</p>
                    <div className="mt-2 space-y-1">
                        {orgMemberships &&
                            orgMemberships.data
                                .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                                .slice(0, 3)
                                .map((item) => (
                                    <div key={item.id} className="flex justify-between">
                                        <p>{item.user.email}</p>
                                        {item.status === 'sent' ? (
                                            <p>Sent</p>
                                        ) : item.status === 'accepted' ? (
                                            <p className="text-green-500">Accepted</p>
                                        ) : (
                                            <p className="text-red-500">Rejected</p>
                                        )}
                                    </div>
                                ))}
                    </div>
                    {/* <p>Your sent invites will be shown here.</p> */}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default InviteDialog;
