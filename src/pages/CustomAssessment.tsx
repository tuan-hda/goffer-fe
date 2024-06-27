import AssessmentList from '@/components/jobDetail/AssessmentList';
import AssessmentListOrder from '@/components/jobDetail/AssessmentListOrder';
import { Button } from '@/components/ui/button';
import useCurrOrganization from '@/hooks/useCurrOrganization';
import useGetCurrentOrgJob from '@/hooks/useGetCurrentOrgJob';
import useListOrgAssessment from '@/hooks/useListOrgAssessment';
import { createAssessmentService } from '@/services/assessment.service';
import { updateJobService } from '@/services/jobs.service';
import useSetupJobStore from '@/stores/setupJobStore';
import { Assessment } from '@/types/assessment.type';
import catchAsync from '@/utils/catchAsync';
import { isAxiosError } from 'axios';
import { useState } from 'react';
import { TbLoader } from 'react-icons/tb';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'sonner';

const CustomAssessment = () => {
    const { domain, id } = useParams();
    const data = useSetupJobStore((state) => state.data);
    const { data: org } = useCurrOrganization();

    const [loading, setLoading] = useState(false);
    const { list: assessments, refetch } = useListOrgAssessment({
        job: id,
        populate: 'owner',
    });
    const { data: job, refetch: refetchJob } = useGetCurrentOrgJob();
    const selectedAssessments = job?.assessments || [];

    const duplicate = () =>
        catchAsync(
            async () => {
                setLoading(true);
                const assessments = Array.from(data.assessments.values());
                const promises = assessments.map((assessment) => {
                    return createAssessmentService(
                        {
                            description: assessment.description,
                            questions: assessment.questions,
                            duration: assessment.duration,
                            org: org?.id,
                            job: id,
                            order: assessment.order,
                            status: assessment.status,
                            type: assessment.type,
                            title: assessment.title,
                            due: assessment.due,
                            image: assessment.image,
                        },
                        false,
                    );
                });
                await Promise.all(promises);
                await refetch();
            },
            () => {
                setLoading(false);
            },
        );

    const handlePick = async (assessment: Assessment) => {
        try {
            if (selectedAssessments.find((a) => a.id === assessment.id)) {
                await updateJobService(id!, {
                    assessments: selectedAssessments.filter((a) => a.id !== assessment.id),
                });
            } else {
                await updateJobService(id!, {
                    assessments: [...selectedAssessments, assessment],
                });
            }
            await refetchJob();
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(
                    error.response?.data.message || 'An error occurred while updating the job. Please try again.',
                );
            } else {
                toast.error('An error occurred while updating the job. Please try again.');
            }
        }
    };

    return (
        <div className="w-full text-sm">
            <div className="flex items-center">
                <div>
                    <h1 className="text-3xl">Namespace's Assessments (optional)</h1>
                    <p className="mb-6 mt-2 text-text/70">
                        Add assessments to evaluate the candidate's skills and knowledge.{' '}
                    </p>
                </div>
            </div>

            <div className="mx-auto">
                <p className="text-base font-semibold">Select assessments</p>
                <AssessmentListOrder
                    handlePick={handlePick}
                    selectedAssessments={selectedAssessments.map((a) => a.id)}
                    refetch={refetch}
                    assessments={assessments || []}
                />
                <div className="my-14 border-t"></div>
                <div className="flex items-center gap-4">
                    <p className="mr-auto text-2xl">Your global assessments</p>
                    <Button variant="outline" asChild>
                        <Link to={`/app/organization/${domain}/assessment`}>Create global assessment</Link>
                    </Button>
                    <Button onClick={duplicate} disabled={data.assessments.length === 0 || loading} variant="black">
                        {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                        Duplicate and add to this job
                    </Button>
                </div>
                <AssessmentList />
            </div>
        </div>
    );
};

export default CustomAssessment;
