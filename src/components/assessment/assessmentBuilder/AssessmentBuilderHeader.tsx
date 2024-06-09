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
import useCurrOrganization from '@/hooks/useCurrOrganization';
import { createAssessmentService } from '@/services/assessment.service';
import useNewAssessmentStore, { initialData } from '@/stores/newAssessmentStore';
import { NewAssessment } from '@/types/assessment.type';
import catchAsync from '@/utils/catchAsync';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { TbLoader, TbTrash } from 'react-icons/tb';
import { shallow } from 'zustand/shallow';

type AssessmentBuilderHeaderProps = {
    data?: NewAssessment;
};

const AssessmentBuilderHeader = ({ data }: AssessmentBuilderHeaderProps) => {
    const [loading, setLoading] = useState(false);
    const [assessment, setAssessment] = useNewAssessmentStore(
        (state) => [state.assessment, state.setAssessment],
        shallow,
    );
    const { data: dataOrg } = useCurrOrganization();

    useEffect(() => {
        if (data) {
            setAssessment(data);
        } else {
            setAssessment(initialData);
        }
    }, [location]);

    const handleSubmit = () =>
        catchAsync(
            async () => {
                setLoading(true);
                await createAssessmentService({ ...assessment, org: dataOrg?.id! });
                setAssessment(initialData);
            },
            () => {
                setLoading(false);
            },
        );

    return (
        <div>
            <div className="col-span-full flex items-center gap-4">
                <h1 className="mr-auto text-2xl">Assessment Builder</h1>
                {!!data && (
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
                                    This action cannot be undone. This will permanently delete this resource and cannot
                                    be recovered.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>

                                <Button variant="destructive">Finish</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )}
                <Button variant="black" onClick={handleSubmit}>
                    {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                    Finish
                </Button>
            </div>
        </div>
    );
};

export default AssessmentBuilderHeader;
