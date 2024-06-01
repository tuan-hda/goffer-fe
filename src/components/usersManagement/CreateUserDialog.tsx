import { TbPlus } from 'react-icons/tb';
import { Button } from '../ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const CreateUserDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="gap-2" variant="black">
                    <TbPlus /> Create new user
                </Button>
            </DialogTrigger>
            <DialogContent className="text-sm sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Create new user</DialogTitle>
                    <DialogDescription>Fill a bit information for them</DialogDescription>
                </DialogHeader>

                <div>
                    <Label htmlFor="email">Email</Label>
                    <div className="mt-2 flex items-center gap-2">
                        <Input id="email" placeholder="contact@example.com" />
                    </div>
                </div>

                <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="mt-2 flex items-center gap-2">
                        <Input id="password" type="password" placeholder="Password here..." />
                    </div>
                </div>

                <div>
                    <Label htmlFor="name">Name</Label>
                    <div className="mt-2 flex items-center gap-2">
                        <Input id="name" placeholder="Full name here..." />
                    </div>
                </div>

                <div>
                    <Label htmlFor="role">Role</Label>
                    <Select defaultValue="user">
                        <SelectTrigger className="mt-2 w-full">
                            <SelectValue defaultValue="member" placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="user">User</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="black">Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CreateUserDialog;
