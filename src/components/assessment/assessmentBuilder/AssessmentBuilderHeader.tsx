import { Button } from '@/components/ui/button';
import { DialogTrigger } from '@/components/ui/dialog';
import useCurrOrganization from '@/hooks/useCurrOrganization';
import useGetCurrAssessment from '@/hooks/useGetCurrAssessment';
import useListOrgAssessment from '@/hooks/useListOrgAssessment';
import { createAssessmentService, updateAssessmentService } from '@/services/assessment.service';
import useNewAssessmentStore from '@/stores/newAssessmentStore';
import catchAsync from '@/utils/catchAsync';
import _ from 'lodash';
import { useState } from 'react';
import { TbLoader, TbReport, TbTrash } from 'react-icons/tb';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import AssessmentOrgItemDelete from '../org/AssessmentOrgItemDelete';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const AssessmentBuilderHeader = () => {
    const [loading, setLoading] = useState(false);
    const [assessment] = useNewAssessmentStore((state) => [state.assessment, state.setAssessment], shallow);
    const { data: dataOrg } = useCurrOrganization();
    const { refetch } = useListOrgAssessment({
        populate: 'owner',
    });
    const { data, refetch: refetchCurr } = useGetCurrAssessment();
    const navigate = useNavigate();
    const { domain } = useParams();

    const create = () =>
        catchAsync(
            async () => {
                setLoading(true);
                await createAssessmentService({ ...assessment, org: dataOrg?.id! });
                await refetch();
                navigate(`/app/organization/${domain}/assessment`);
            },
            () => {
                setLoading(false);
            },
        );

    const update = () =>
        catchAsync(
            async () => {
                if (!data) return;
                setLoading(true);
                await updateAssessmentService({
                    ...data,
                    ...assessment,
                });
                await refetch();
                await refetchCurr();
            },
            () => {
                setLoading(false);
            },
        );

    const handleSubmit = () => {
        if (data) {
            update();
        } else {
            create();
        }
    };

    return (
        <div>
            <div className="col-span-full flex items-center gap-4">
                <h1 className="mr-auto text-2xl">Assessment Builder</h1>
                {!!data && (
                    <>
                        <p className="mr-2 text-gray-500">This assessment not linked to a job yet.</p>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link to="results" className="hover:underline">
                                        <TbReport className="text-lg" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Add to library</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <AssessmentOrgItemDelete>
                            <DialogTrigger asChild>
                                <Button size="icon" variant="ghost">
                                    <TbTrash className="text-lg" />
                                </Button>
                            </DialogTrigger>
                        </AssessmentOrgItemDelete>
                    </>
                )}
                <Button variant="black" onClick={handleSubmit}>
                    {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                    {!!data ? 'Update' : 'Create'}
                </Button>
            </div>
        </div>
    );
};

export default AssessmentBuilderHeader;
