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
import { applyJobService } from '@/services/apply.service';
import { uploadAudiosService } from '@/services/file.service';

const Application = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();

    const { data } = useJobQuestions(id);
    const { detail, applicationInfo, setInfo, answers } = useJobStore();

    const [stepNum, setStepNum] = useState(0);
    const [questionData, setQuestionData] = useState<List<Question>>({
        results: [],
        page: 0,
        limit: 0,
        totalPages: 0,
        totalResults: 0,
    });
    const totalSteps = questionData.totalResults;

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
            const answerUrls = await uploadAudiosService(answers.map((item) => item.audioUrl));
            // await applyJobService({ ...applicationInfo, answers: answerUrls });
        }
    };

    return (
        <div className="mx-auto flex max-w-screen-md flex-col gap-9 p-7 pb-36">
            {/* Title */}
            <div>
                <p className="font-serif text-xl font-medium text-default-500 underline">{detail?.org.name}</p>
                <p className="font-serif text-5xl font-black text-text">{detail?.title}</p>
                <p>
                    <span className="font-serif text-sm font-medium capitalize text-default-500">
                        {detail?.location}
                    </span>
                    <span className="mx-2 font-serif text-sm font-medium text-default-500">•</span>
                    <span className="font-serif text-sm font-medium text-default-500">{detail?.time}</span>
                </p>
            </div>
            {stepNum === 0 ? (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex grid-cols-2 flex-col gap-6 md:grid">
                        {formFields.map((field) => (
                            <FormFieldItem {...field} form={form} key={field.name} />
                        ))}
                    </form>
                </Form>
            ) : (
                <ApplyQuestion total={totalSteps} number={stepNum} data={questionData.results[stepNum - 1]} />
            )}
            <ProgressFooter
                rate={(stepNum * 100) / totalSteps}
                onStartPress={() => navigate(-1)}
                endContent={stepNum < totalSteps ? 'Next' : 'Submit'}
                endProps={{ type: 'submit' }}
                onEndPress={handleNextStep}
            />
        </div>
    );
};

export default Application;
