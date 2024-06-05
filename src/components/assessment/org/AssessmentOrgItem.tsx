import { Button } from '@/components/ui/button';
import { Avatar } from '@nextui-org/react';
import { TbCopy, TbDots, TbReport, TbTrash } from 'react-icons/tb';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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

const AssessmentOrgItem = () => {
    return (
        <div className="group relative">
            <div className="aspect-video overflow-hidden rounded-2xl">
                <div className="h-full w-full bg-black" />
            </div>
            <div className="mt-3 flex items-center gap-3">
                <Avatar src="http://res.cloudinary.com/doxsstgkc/image/upload/v1714386131/goffer/ig8lpaodzrhtwzzkdaj3.jpg" />
                <div className="min-w-0 flex-1">
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                        Mastering ReactJS: An Intermediate Quiz
                    </p>
                    <p className="text-xs font-light text-gray-400">35 minutes ago</p>
                </div>
            </div>
            <div className="pointer-events-none absolute -bottom-2 right-0 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100">
                <Dialog>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="link" className="text-black">
                                <TbDots className="text-xl" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Options</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <TbReport className="mr-2" /> View results
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <TbCopy className="mr-2" /> Duplicate
                            </DropdownMenuItem>

                            <DialogTrigger asChild>
                                <DropdownMenuItem>
                                    <TbTrash className="mr-2" />
                                    Delete
                                </DropdownMenuItem>
                            </DialogTrigger>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete the assessment and all the
                                results in it.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="justify-end">
                            <DialogClose asChild>
                                <Button type="button" variant="outline">
                                    Close
                                </Button>
                            </DialogClose>
                            <Button type="button" variant="destructive">
                                Delete
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default AssessmentOrgItem;
