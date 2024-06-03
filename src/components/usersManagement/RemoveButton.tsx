import { TbTrash } from 'react-icons/tb';
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

const RemoveButton = () => {
    return (
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
    );
};

export default RemoveButton;
