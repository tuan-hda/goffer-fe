import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import useNewQuestionStore from '@/stores/newQuestionStore';
import { TbLoader, TbTrash } from 'react-icons/tb';

type HeaderProps = {
    title: string;
    onFinish?: () => void;
};

const Header = ({ title, onFinish }: HeaderProps) => {
    const loading = useNewQuestionStore((state) => state.loading);

    return (
        <div className="col-span-full flex items-center gap-4">
            <h1 className="text-2xl">{title}</h1>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size="icon" variant="ghost" className="ml-auto">
                        <TbTrash className="text-lg" />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete this resource and cannot be
                            recovered.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>

                        <Button variant="destructive">Delete</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <Button disabled={loading} variant="black" onClick={onFinish}>
                {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                Finish
            </Button>
        </div>
    );
};

export default Header;
