import { Form } from '@/components/ui/form';
import FormFieldItem from './FormFieldItem';
import ProgressFooter from '../common/ProgressFooter';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ApplyQuestion from './ApplyQuestion';
import { useEffect, useState } from 'react';
import { NewApply } from '@/types/application.type';
import { formFields, formSchema } from '@/utils/application';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Image, Snippet } from '@nextui-org/react';
import { AvatarEdit } from '@/components/common';
import useApplyJob from '@/hooks/useApplyJob';
import { submitApplicationService, updateApplyService } from '@/services/apply.service';
import { TbLoaderQuarter } from 'react-icons/tb';

const Application = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const { data, isLoading, refetch } = useApplyJob(id || '');

    const [stepNum, setStepNum] = useState(0);
    const [loading, setLoading] = useState(false);
    const [buttonLoad, setButtonLoad] = useState(false);

    useEffect(() => {
        const stepHash = location.hash;

        if (!stepHash || stepHash === '') {
            setStepNum(0);
        } else {
            const match = stepHash.match(/#step-(\d+)/);
            const step = match ? parseInt(match[1], 10) : 0;
            if (step >= 1 && step <= totalSteps) {
                setStepNum(step);
            } else {
                setStepNum(0);
                navigate('#', { replace: true });
            }
        }
    }, [location.hash, navigate]);

    const job = data?.job;
    const totalSteps = job?.questions.length || 2;
    const defaultValues = {
        profilePicture: data?.profilePicture || data?.applicant?.avatar,
        resume: data?.resume || data?.applicant?.resume,
        name: data?.name || data?.applicant?.name,
        location: data?.location || data?.applicant?.location,
        email: data?.email || data?.applicant?.email,
        phoneNumber: data?.phoneNumber,
        role: data?.role,
        lastCompany: data?.lastCompany,
        linkedIn: data?.linkedIn || data?.applicant?.refDoc,
        personalWebsite: data?.personalWebsite,
    };

    const form = useForm<NewApply>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    useEffect(() => {
        if (data) {
            form.reset(defaultValues);
        }
    }, [data, form]);

    async function onSubmit(values: NewApply) {
        if (data?.id) await updateApplyService({ ...values, id: data.id });
        else await submitApplicationService(values);

        await refetch();

        if (stepNum < totalSteps) {
            navigate(`#step-${stepNum + 1}`);
        }
    }

    const handleNextStep = async () => {
        setButtonLoad(true);

        if (stepNum === 0) await form.handleSubmit(onSubmit)();
        else if (stepNum < totalSteps) {
            const questionId = job?.questions[stepNum - 1].id;
            // const answer = answers.find((a) => a.questionId === questionId);
            // if (answer && answer.duration >= 2) navigate(`#step-${stepNum + 1}`);
        } else {
            console.log('success');
        }

        setButtonLoad(false);
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
                        <Image src={job?.org.logo} alt="logo" className="z-[1] h-16 w-16 rounded-full" />
                        <p className="mt-3 text-sm font-medium">{job?.org.name}</p>
                        <p className="mt-1 font-serif text-4xl font-black text-text">{job?.title}</p>
                        <p className="mt-3">
                            <span className="text-sm text-default-500">{job?.location}</span>
                            <span className="mx-2 text-sm text-default-500">•</span>
                            <span className="text-sm text-default-500">{job?.time}</span>
                        </p>
                    </div>
                    {stepNum === 0 ? (
                        <Form {...form}>
                            <div className="pt-1">
                                <p className="mb-1 font-medium">Upload photo (optional)</p>
                                <AvatarEdit
                                    loading={loading}
                                    setAvatar={(value) => form.setValue('profilePicture', value)}
                                    setLoading={setLoading}
                                    avatar={form.getValues('profilePicture')}
                                />
                            </div>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="mt-7 flex grid-cols-2 flex-col gap-6 md:grid"
                            >
                                {formFields.map((field) => (
                                    <FormFieldItem {...field} form={form} key={field.name} />
                                ))}
                            </form>
                        </Form>
                    ) : (
                        <ApplyQuestion total={totalSteps} number={stepNum} data={job?.questions[stepNum - 1]} />
                    )}
                </div>

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
                    >
                        {buttonLoad ? <TbLoaderQuarter className="h-4 w-4 animate-spin" /> : 'Next'}
                        {/* {endContent} */}
                    </Button>
                </div>
            </div>
            <ProgressFooter
                rate={(stepNum * 100) / totalSteps}
                onStartPress={() => navigate(-1)}
                endContent={stepNum < totalSteps ? 'Next' : 'Submit'}
                // endProps={{ type: 'submit' }}
                onEndPress={handleNextStep}
            />
        </div>
    );
};

export default Application;
