import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, matchRoutes, useLocation, useParams } from 'react-router-dom';
import { TbCheck, TbLoader } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import classNames from 'classnames';
import useNewAssessmentStore from '@/stores/newAssessmentStore';
import catchAsync from '@/utils/catchAsync';
import { updateJobService } from '@/services/jobs.service';
import { Job } from '@/types/job.type';

type OrgDetailLayoutProps = {
    children: React.ReactNode;
};

const OrgDetailLayout = ({ children }: OrgDetailLayoutProps) => {
    const [finished, setFinished] = useState(true);
    const { domain, id } = useParams();
    const [step, setStep] = useState(2);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    const assessment = useNewAssessmentStore((state) => state.assessment);

    useEffect(() => {
        const routes = [
            { path: '/app/organization/:domain/job/:id/questions' },
            { path: '/app/organization/:domain/job/:id/custom-feedback' },
            { path: '/app/organization/:domain/job/:id/finalize' },
        ];
        const matches = matchRoutes(routes, location);
        routes.forEach((route, index) => {
            if (matches?.at(0)?.route.path === route.path) {
                setStep(index + 2);
            }
        });
    }, [location]);

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

    const handleClick = () => {
        if (step === 2) {
            updateJob({ questions: assessment.questions });
        }
    };

    return (
        <div className="mt-5 flex gap-8">
            {finished && (
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
                                className="flex items-center gap-4"
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
                                to={`/app/organization/${domain}/job/${id}/finalize`}
                                className="flex items-center gap-4"
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
                                    {step > 4 ? <TbCheck /> : 4}{' '}
                                </div>
                                <p>Finalize</p>
                            </Link>
                        </CardContent>
                    </Card>
                    <Button onClick={handleClick} variant="black" className="mt-4 w-full" disabled={checkDisabled()}>
                        {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                        {step === 4 ? 'Finish job setup' : 'Continue'}
                    </Button>
                </div>
            )}
            {children}
        </div>
    );
};

export default OrgDetailLayout;
