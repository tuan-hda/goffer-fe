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
import useListProject from '@/hooks/useListProject';
import useProjectDetail from '@/hooks/useProjectDetail';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { deleteProjectService } from '@/services/projects.service';
import catchAsync from '@/utils/catchAsync';
import { useState } from 'react';
import { TbChevronLeft, TbEdit, TbLoader, TbTrash } from 'react-icons/tb';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';

const ProjectDetailHeader = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { projectId } = useParams();
    const { data, isLoading } = useProjectDetail(projectId);
    const { refetch } = useListProject({
        owner: data?.owner.id,
    });
    const { data: self } = useSelfProfileQuery();

    const previousUrl = searchParams.get('previousUrl');

    if (isLoading)
        return (
            <div className="flex h-screen">
                <TbLoader className="m-auto animate-spin text-xl" />
            </div>
        );

    if (!data) return <div className="flex h-screen items-center justify-center">Project not found.</div>;

    const remove = () =>
        catchAsync(
            async () => {
                setLoading(true);
                await deleteProjectService(projectId!);
                await refetch();
                navigate(`/app/profile?tab=projects`);
            },
            () => {
                setLoading(false);
            },
        );

    return (
        <div className="mx-auto mt-8 flex h-full max-w-4xl items-center gap-2">
            <Link
                to={previousUrl || '/app'}
                type="button"
                className="group relative mr-auto flex flex-shrink-0 gap-2 text-sm"
            >
                <TbChevronLeft className="text-xl" /> Go {previousUrl ? 'back' : 'home'}
                <div className="absolute -bottom-1 ml-1 w-full border-t border-t-gray-700 opacity-0 transition group-hover:opacity-100" />
            </Link>

            {self?.id === data.owner?.id && (
                <>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="ghost" size={'icon'}>
                                <TbTrash className="text-xl" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete your project from your
                                    profile.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button disabled={loading} variant="outline">
                                        Cancel
                                    </Button>
                                </DialogClose>
                                <Button onClick={remove} disabled={loading} variant="destructive">
                                    {loading && <TbLoader className="mr-2 animate-spin" />}
                                    Delete
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    <Button asChild variant="ghost" size={'icon'}>
                        <Link
                            to={
                                previousUrl
                                    ? `/project/${data.id}/edit?previousUrl=${previousUrl}`
                                    : `/project/${data.id}/edit`
                            }
                        >
                            <TbEdit className="text-xl" />
                        </Link>
                    </Button>
                </>
            )}
        </div>
    );
};

export default ProjectDetailHeader;
