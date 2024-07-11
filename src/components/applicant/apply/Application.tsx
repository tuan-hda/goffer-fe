import { Form } from '@/components/ui/form';
import FormFieldItem from './FormFieldItem';
import ProgressFooter from '../common/ProgressFooter';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ApplyQuestion from './ApplyQuestion';
import { useEffect, useRef, useState } from 'react';
import { NewApply } from '@/types/application.type';
import { formFields, formSchema } from '@/utils/application';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Chip, Image, Snippet } from '@nextui-org/react';
import { AvatarEdit } from '@/components/common';
import useApplyJob from '@/hooks/useApplyJob';
import { submitApplicationService, updateApplyService } from '@/services/apply.service';
import { TbLoaderQuarter } from 'react-icons/tb';
import { uploadAudio } from '../common/AudioRecorder';
import { submitAudioAnswer } from '@/services/answer.service';
import ApplySuccess from './ApplySuccess';
import useApplyStore from '@/stores/applyStore';
import moment, { Moment } from 'moment';

const Application = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const { data, isLoading, refetch } = useApplyJob(id || '');
    const { answer, loading, setPhase } = useApplyStore();
    const lastTime = useRef<Moment | null>(null);

    const [stepNum, setStepNum] = useState(0);
    const [avatarLoading, setLAvatarLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [readOnly, setReadOnly] = useState(false);

    useEffect(() => {
        const stepHash = location.hash;

        if (!stepHash || stepHash === '') {
            setStepNum(0);
        } else {
            const match = stepHash.match(/#step-(\d+)/);
            const step = match ? parseInt(match[1], 10) : 0;
            if (step >= 1 && step <= totalSteps) {
                setStepNum(step);
                if (step === totalSteps && data && data.phase === 'init')
                    updateApplyService(data.id, { phase: 'applied' });
            } else {
                setStepNum(0);
                navigate('#', { replace: true });
            }
        }
    }, [location.hash, navigate]);

    const job = data?.job;
    const totalSteps = job?.questions ? job.questions.length + 1 : 2;
    const defaultValues = {
        profilePicture: data?.profilePicture || data?.applicant?.avatar,
        resume: data?.resume || data?.applicant?.resume,
        name: data?.name || data?.applicant?.name,
        location: data?.location || data?.applicant?.location,
        email: data?.email || data?.applicant?.email,
        phoneNumber: data?.phoneNumber || data?.applicant?.enhance?.details?.basic?.phone_number,
        role: data?.role || data?.applicant?.enhance?.details?.basic?.majors,
        lastCompany: data?.lastCompany,
        linkedIn: data?.linkedIn || data?.applicant?.refDoc || data?.applicant?.enhance?.details?.basic?.linkedin_url,
        personalWebsite: data?.personalWebsite || data?.applicant?.enhance?.details?.basic?.portfolio_website_url,
    };

    const form = useForm<NewApply>({
        resolver: zodResolver(formSchema),
        disabled: readOnly,
        defaultValues,
    });

    useEffect(() => {
        if (data) {
            form.reset(defaultValues);
            setPhase(data.phase);
        }
        setReadOnly(!(!data?.id || data?.phase === 'init'));
    }, [data, form]);

    async function onSubmit(values: NewApply) {
        if (data?.id && data.phase === 'init') await updateApplyService(data.id, values);
        else if (data?.id === undefined && job?.id) await submitApplicationService({ ...values, job: job.id });

        await refetch();

        if (stepNum < totalSteps) {
            navigate(`#step-${stepNum + 1}`);
        }
    }

    const handleNextStep = async () => {
        setUploading(true);

        try {
            if (data?.id) {
                await updateApplyService(data?.id, {
                    timeToSubmit: moment().toDate(),
                });
            }
        } catch (error) {
            console.error(error);
        }

        try {
            if (stepNum === 0) {
                await form.handleSubmit(onSubmit)();
                lastTime.current = moment();
            } else if (stepNum < totalSteps) {
                if (answer && answer.duration >= 20 && data?.phase === 'init') {
                    const audio = await uploadAudio(answer.url);

                    if (audio)
                        await submitAudioAnswer({
                            url: audio.file.secure_url,
                            question: answer.question,
                            duration: answer.duration,
                            ref: id!,
                            submitSeconds: moment().diff(lastTime.current || moment(), 'seconds'),
                        });

                    lastTime.current = moment();
                }
                if (stepNum < totalSteps) {
                    navigate(`#step-${stepNum + 1}`);
                }
            } else {
                console.log('Apply success');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setUploading(false);
        }
    };

    return isLoading ? (
        <div className="m-auto h-full w-full">
            <Snippet />
        </div>
    ) : (
        <div className="text-sm">
            <div className="bg-image fixed bottom-0 left-0 right-0 top-0" />

            <div className="relative z-[1] mx-auto flex min-h-screen max-w-screen-md flex-col gap-9 px-7 pb-7 pt-10">
                {/* Title */}
                <div className="flex-1">
                    <div className="mb-5">
                        <Image src={job?.org?.logo} alt="logo" className="z-[1] h-16 w-16 rounded-full" />
                        <p className="mt-3 text-sm font-medium">{job?.org?.name}</p>
                        <p className="mt-1 text-3xl font-medium text-text">{job?.title}</p>
                        <p className="mt-3">
                            <span className="text-sm text-default-500">{job?.location}</span>
                            <span className="mx-2 text-sm text-default-500">•</span>
                            <span className="text-sm text-default-500">{job?.time}</span>
                            {readOnly && (
                                <>
                                    <span className="mx-2 text-sm text-default-500">•</span>
                                    <Chip color="success" className="text-xs" radius="sm" variant="flat">
                                        Already applied this job
                                    </Chip>
                                </>
                            )}
                        </p>
                    </div>
                    {stepNum === 0 ? (
                        <Form {...form}>
                            <div className="pt-1">
                                <p className="mb-1 font-medium">Upload photo (optional)</p>
                                <AvatarEdit
                                    loading={avatarLoading}
                                    setAvatar={(value: string | undefined) => form.setValue('profilePicture', value)}
                                    setLoading={setLAvatarLoading}
                                    avatar={form.getValues('profilePicture')}
                                    disabled={readOnly}
                                />
                            </div>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="mt-7 flex grid-cols-2 flex-col gap-6 md:grid"
                            >
                                {formFields.map((field) => (
                                    <FormFieldItem {...field} form={form} key={field.name} disabled={readOnly} />
                                ))}
                            </form>
                        </Form>
                    ) : stepNum === totalSteps ? (
                        <ApplySuccess />
                    ) : (
                        <ApplyQuestion total={totalSteps - 1} order={stepNum} question={job?.questions[stepNum - 1]} />
                    )}
                </div>

                {stepNum < totalSteps && (
                    <div className="mt-4 flex w-full items-center justify-between">
                        <div>
                            {/* {(onStartPress || startContent) && ( */}
                            <Button
                                // className={classNames(rate !== undefined && 'mb-1')}
                                color="secondary"
                                size="lg"
                                variant="outline"
                                onClick={() => navigate(-1)}
                            >
                                Back
                                {/* {startContent ? startContent : 'Back'} */}
                            </Button>
                            {/* )} */}
                        </div>
                        <Button
                            // className={classNames(rate !== undefined && 'mb-1')}
                            color="primary"
                            size="lg"
                            variant="black"
                            onClick={handleNextStep}
                            disabled={stepNum !== 0 && ((answer?.duration ?? 0) < 20 || loading)}
                        >
                            {uploading ? <TbLoaderQuarter className="h-4 w-4 animate-spin" /> : 'Next'}
                            {/* {endContent} */}
                        </Button>
                    </div>
                )}
            </div>
            <ProgressFooter
                rate={(stepNum * 100) / totalSteps}
                onStartPress={() => navigate(-1)}
                endContent={stepNum < totalSteps ? 'Next' : 'Submit'}
                onEndPress={handleNextStep}
            />
        </div>
    );
};

export default Application;
