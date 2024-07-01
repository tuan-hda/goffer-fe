import { useCallback, useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, matchRoutes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { TbCheck, TbLoader } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import classNames from 'classnames';
import useNewAssessmentStore from '@/stores/newAssessmentStore';
import catchAsync from '@/utils/catchAsync';
import { updateJobService } from '@/services/jobs.service';
import { Job } from '@/types/job.type';
import useGetOrganizationJob from '@/hooks/useGetOrganizationJob';
import useSetupJobStore from '@/stores/setupJobStore';
import { shallow } from 'zustand/shallow';

type OrgDetailLayoutProps = {
    children: React.ReactNode;
};

const routes = [
    { path: '/app/organization/:domain/job/:id/questions' },
    { path: '/app/organization/:domain/job/:id/custom-feedback' },
    { path: '/app/organization/:domain/job/:id/custom-assessment' },
];

const OrgDetailLayout = ({ children }: OrgDetailLayoutProps) => {
    const { domain, id } = useParams();
    const [step, setStep] = useState(2);
    const [maxStep, setMaxStep] = useState(2);

    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { data, refetch } = useGetOrganizationJob(id);

    const assessment = useNewAssessmentStore((state) => state.assessment);
    const [setupJob, setSetupJob] = useSetupJobStore((state) => [state.data, state.setData], shallow);

    const checkDisabled = () => {
        if (loading) return true;
        if (step === 2) {
            if (assessment.questions.size > 0) return false;
            return true;
        }
        if (step === 3) {
            return false;
        }
        if (step === 4) {
            return false;
        }
        return true;
    };

    const toCurrentStep = useCallback(() => {
        if (!data) return;
        if (!data.questions || data.questions.size === 0) {
            setMaxStep(2);
            navigate(`/app/organization/${domain}/job/${id}/questions`);
        } else if (data.hasFeedback === undefined) {
            setMaxStep(3);
            navigate(`/app/organization/${domain}/job/${id}/custom-feedback`);
        } else {
            setMaxStep(5);
        }
    }, [data]);

    const updateJob = (data: Partial<Job>) =>
        catchAsync(
            async () => {
                setLoading(true);
                await updateJobService(id!, data);
            },
            () => {
                setLoading(false);
            },
        );

    const handleClick = async () => {
        if (step === 2) {
            await updateJob({ questions: assessment.questions });
            navigate(`/app/organization/${domain}/job/${id}/custom-feedback`);
        } else if (step === 3) {
            await updateJob({
                hasFeedback: setupJob.hasFeedback,
            });
            navigate(`/app/organization/${domain}/job/${id}/custom-assessment`);
        } else {
            navigate(`/app/organization/${domain}/job/${id}`);
        }
        await refetch();
    };

    useEffect(() => {
        setSetupJob((prev) => ({
            ...prev,
            hasFeedback: data?.hasFeedback,
        }));
    }, [data]);

    useEffect(() => {
        toCurrentStep();
    }, [toCurrentStep]);

    const matches = matchRoutes(routes, location);
    useEffect(() => {
        routes.forEach((route, index) => {
            if (matches?.at(0)?.route.path === route.path) {
                setStep(index + 2);
            }
        });
    }, [location, matches]);

    if (!data) return null;

    return (
        <div className="mt-5 flex gap-8">
            {(maxStep < 5 || (matches && matches.length > 0)) && !data.isPublished && (
                <div className="sticky top-8 h-fit max-w-[240px] flex-shrink-0">
                    <Card className="border bg-white/100 text-sm shadow-none">
                        <CardHeader>
                            <CardTitle>Finish Job Setup</CardTitle>
                            <CardDescription>
                                Before you can publish your job, you need to finish all steps
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-1">
                            <Link to="#" className="flex items-center gap-4">
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                                    <TbCheck />
                                </div>
                                <p>Basic information</p>
                            </Link>
                            <div className="ml-[10px] h-6 border-l" />
                            <Link
                                to={`/app/organization/${domain}/job/${id}/questions`}
                                className="flex items-center gap-4"
                            >
                                <div
                                    className={classNames(
                                        'flex h-5 w-5 items-center justify-center rounded-full text-xs text-white',
                                        {
                                            'bg-black': step >= 2,
                                            'border border-primary bg-white text-primary': step < 2,
                                        },
                                    )}
                                >
                                    {step > 2 ? <TbCheck /> : 2}
                                </div>
                                <p>Application questions</p>
                            </Link>
                            <div className="ml-[10px] h-6 border-l" />
                            <Link
                                to={`/app/organization/${domain}/job/${id}/custom-feedback`}
                                className={classNames('flex items-center gap-4', maxStep < 3 && 'pointer-events-none')}
                            >
                                <div
                                    className={classNames(
                                        'flex h-5 w-5 items-center justify-center rounded-full text-xs',
                                        {
                                            'bg-black text-white': step >= 3,
                                            'border bg-white': step < 3,
                                        },
                                    )}
                                >
                                    {step > 3 ? <TbCheck /> : 3}{' '}
                                </div>
                                <p>Custom feedback</p>
                            </Link>
                            <div className="ml-[10px] h-6 border-l" />
                            <Link
                                to={`/app/organization/${domain}/job/${id}/custom-assessment`}
                                className={classNames('flex items-center gap-4', maxStep < 4 && 'pointer-events-none')}
                            >
                                <div
                                    className={classNames(
                                        'flex h-5 w-5 items-center justify-center rounded-full text-xs',
                                        {
                                            'bg-black text-white': step >= 4,
                                            'border bg-white': step < 4,
                                        },
                                    )}
                                >
                                    {step > 4 ? <TbCheck /> : 4}
                                </div>
                                <p>Custom assessment</p>
                            </Link>
                        </CardContent>
                    </Card>
                    <Button onClick={handleClick} variant="black" className="mt-4 w-full" disabled={checkDisabled()}>
                        {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                        {step === 4 ? 'Finish job setup' : 'Save'}
                    </Button>
                </div>
            )}
            {children}
        </div>
    );
};

export default OrgDetailLayout;
