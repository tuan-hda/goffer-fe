import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import useListOrgAssessment from '@/hooks/useListOrgAssessment';
import { deleteAssessmentService } from '@/services/assessment.service';
import catchAsync from '@/utils/catchAsync';
import { useState } from 'react';
import { TbLoader } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';

type AssessmentOrgItemDeleteProps = {
    children: React.ReactNode;
    id?: string;
};

const AssessmentOrgItemDelete = ({ children, id: outerId }: AssessmentOrgItemDeleteProps) => {
    const { id: paramId, domain } = useParams();
    const [loading, setLoading] = useState(false);
    const id = outerId || paramId;
    const navigate = useNavigate();
    const { refetch } = useListOrgAssessment({
        populate: 'owner',
    });

    const deleteAssessment = () =>
        catchAsync(
            async () => {
                if (id) {
                    setLoading(true);
                    await deleteAssessmentService(id);
                    await refetch();
                    navigate(`/app/organization/${domain}/assessment`);
                }
            },
            () => {
                setLoading(false);
            },
        );

    return (
        <Dialog>
            {children}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete the assessment and all the results in
                        it.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="justify-end">
                    <DialogClose asChild>
                        <Button disabled={loading} type="button" variant="outline">
                            Close
                        </Button>
                    </DialogClose>
                    <Button disabled={loading} onClick={deleteAssessment} type="button" variant="destructive">
                        {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AssessmentOrgItemDelete;
