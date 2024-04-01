import { TbX } from 'react-icons/tb';
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
import { useState } from 'react';
import { Spinner } from '@nextui-org/react';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';
import useCurrOrganization from '@/hooks/useCurrOrganization';
import { deleteOrganizationService } from '@/services/organizations.service';

const Other = () => {
    const [loading, setLoading] = useState(false);
    const { data } = useCurrOrganization();

    const handleDelete = async () => {
        try {
            if (!data) return;
            setLoading(true);
            await deleteOrganizationService(data?.id);
            window.location.pathname = '/app/individual';
        } catch (error) {
            if (isAxiosError(error)) {
                return toast.error(error.response?.data.message || 'An error occurred. Please try again later.');
            }
            toast.error('An error occurred. Please try again later.');
            console.log('delete error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full rounded-xl p-6 text-sm shadow-medium">
            <Dialog>
                <DialogTrigger className="flex items-center text-red-500">
                    <TbX className="mr-2 text-lg" />
                    Delete organization
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Delete organization</DialogTitle>
                        <DialogDescription>
                            Are you absolute sure you want to delete this organization? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button className="rounded-lg" type="submit" disabled={loading} variant="outline">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button
                            onClick={handleDelete}
                            disabled={loading}
                            className="rounded-lg"
                            type="submit"
                            variant="destructive"
                        >
                            {loading && <Spinner className="mr-2 scale-50" />}
                            Delete
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Other;
