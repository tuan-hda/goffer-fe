import { Form } from '@/components/ui/form';
import FormFieldItem from './FormFieldItem';
import ProgressFooter from '../common/ProgressFooter';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ApplyQuestion from './ApplyQuestion';
import { useEffect, useState } from 'react';
import useJobQuestions from '@/hooks/useJobQuestions';
import useJobStore from '@/stores/jobStore';
import { List } from '@/types/list.type';
import { Question } from '@/types/question.type';
import { FormProps } from '@/types/application.type';
import { formFields, formSchema } from '@/utils/application';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useGetOrganizationJob from '@/hooks/useGetOrganizationJob';
import { Button } from '@/components/ui/button';
import { Image } from '@nextui-org/react';
import { AvatarEdit } from '@/components/common';

const Application = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();

    const { data } = useJobQuestions(id);
    const { applicationInfo, setInfo, answers } = useJobStore();
    const { data: detail } = useGetOrganizationJob(id);

    const [loading, setLoading] = useState(false);
    const [avatar, setAvatar] = useState<string>('');

    const [stepNum, setStepNum] = useState(0);
    const [questionData, setQuestionData] = useState<List<Question>>({
        results: [],
        page: 0,
        limit: 0,
        totalPages: 0,
        totalResults: 0,
    });
    const totalSteps = questionData.totalResults || 2;

    const form = useForm<FormProps>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            profilePicture: undefined,
            resume: undefined,
            fullName: '',
            location: '',
            email: '',
            phoneNumber: '',
            role: '',
            lastCompany: '',
            linkedIn: '',
            personalWebsite: '',
        },
    });

    useEffect(() => {
        data && setQuestionData(data);
    }, [data]);

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

    function onSubmit(values: FormProps) {
        setInfo(values);
        if (stepNum < totalSteps) {
            navigate(`#step-${stepNum + 1}`);
        }
    }

    const handleNextStep = async () => {
        if (stepNum === 0) await form.handleSubmit(onSubmit)();
        else if (stepNum < totalSteps) {
            const questionId = questionData.results[stepNum - 1].id;
            const answer = answers.find((a) => a.questionId === questionId);
            if (answer && answer.duration >= 2) navigate(`#step-${stepNum + 1}`);
        } else {
            console.log('success', applicationInfo, answers);
        }
    };

    return (
        <div className="text-sm">
            <div className="bg-image fixed bottom-0 left-0 right-0 top-0" />

            <div className="relative z-[1] mx-auto flex max-w-screen-md flex-col gap-9 px-7 pb-7 pt-10">
                {/* Title */}
                <div className="h-[calc(100vh-144px)]">
                    <div className="mb-5">
                        <Image src={detail?.org.logo} alt="logo" className="z-[1] h-16 w-16 rounded-full" />
                        <p className="mt-3 text-sm font-medium">{detail?.org.name}</p>
                        <p className="mt-1 font-serif text-4xl font-black text-text">{detail?.title}</p>
                        <p className="mt-3">
                            <span className="text-sm text-default-500">{detail?.location}</span>
                            <span className="mx-2 text-sm text-default-500">•</span>
                            <span className="text-sm text-default-500">{detail?.time}</span>
                        </p>
                    </div>
                    {stepNum === 0 ? (
                        <Form {...form}>
                            <div className="pt-1">
                                <p className="mb-1 font-medium">Upload photo (optional)</p>
                                <AvatarEdit
                                    loading={loading}
                                    setAvatar={setAvatar}
                                    setLoading={setLoading}
                                    avatar={avatar}
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
                        <ApplyQuestion total={totalSteps} number={stepNum} data={questionData.results[stepNum - 1]} />
                    )}
                </div>

                <div className="flex w-full items-center justify-between">
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
                        Next
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
