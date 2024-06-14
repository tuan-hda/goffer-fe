import { TbSparkles, TbSword } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';
import { FirstPart, SecondPart, ThirdPart } from '@/components/newJob';
import useCurrOrganization from '@/hooks/useCurrOrganization';
import { useEffect, useRef, useState } from 'react';
import useNewJobStore, { initialData } from '@/stores/newJob';
import { useEditorRef } from '@udecode/plate-common';
import { isAxiosError } from 'axios';
import { createJobService, updateJobService } from '@/services/jobs.service';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Job, NewJob as NewJobType } from '@/types/job.type';
import useListOrganizationJobs from '@/hooks/useListOrganizationJobs';
import { shallow } from 'zustand/shallow';
import NewResourceLayout from '@/layouts/NewResourceLayout';
import useGetCurrentOrgJob from '@/hooks/useGetCurrentOrgJob';
import GenAICreateJobProvider from '@/components/genai/GenAICreateJobProvider';
import { Button } from '@/components/ui/button';
import { CreateJobResult } from '@/components/genai/data';
import { toast } from 'sonner';

const NewJob = () => {
    const navigate = useNavigate();
    const { domain, id } = useParams();

    const { data: curr } = useCurrOrganization();
    const { refetch: refetchCurrJob } = useGetCurrentOrgJob();
    const [data, setData, clear] = useNewJobStore((state) => [state.data, state.setData, state.clear], shallow);
    const { refetch } = useListOrganizationJobs();

    const ref = useRef<HTMLDivElement>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const editor = useEditorRef();

    const create = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (curr) {
                const finalData: NewJobType = {
                    ...data,
                    description: JSON.stringify(editor.children),
                    org: curr.id,
                    salaryFrom: data.salaryFrom || 'Negotiable',
                };
                if (!finalData.salaryTo) {
                    delete finalData.salaryTo;
                }
                await createJobService(finalData);
                await refetch();
                clear();
                navigate(`/app/organization/${domain}`);
                setError('');
            }
        } catch (error) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (isAxiosError(error)) {
                return setError(error.response?.data.message || 'Something went wrong. Please try again.');
            }
            setError('Something went wrong. Please try again.');
            console.log('Create new job error', error);
        } finally {
            setLoading(false);
        }
    };

    const update = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (id) {
                const finalData: Partial<Job> = {
                    title: data.title,
                    description: JSON.stringify(editor.children),
                    slots: data.slots,
                    salaryFrom: data.salaryFrom || 'Negotiable',
                    salaryTo: data.salaryTo,
                    workingHours: data.workingHours,
                    location: data.location,
                    time: data.time,
                    experience: data.experience,
                    skills: data.skills,
                    tools: data.tools,
                };
                if (!finalData.salaryTo) {
                    delete finalData.salaryTo;
                }
                await updateJobService(id, finalData);
                await Promise.all([refetch(), refetchCurrJob()]);
                navigate(`/app/organization/${domain}/job/${id}`);
                setError('');
            }
        } catch (error) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (isAxiosError(error)) {
                return setError(error.response?.data.message || 'Something went wrong. Please try again.');
            }
            setError('Something went wrong. Please try again.');
            console.log('Update job error', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = id ? update : create;

    useEffect(() => {
        if (data.description) editor.children = JSON.parse(data.description);
    }, [editor]);

    const handleResponse = (result: CreateJobResult) => {
        console.log(result);
        if (typeof result === 'string') {
            return;
        }
        const { description, ...rest } = result;
        setData(() => ({
            ...initialData,
            ...rest,
        }));
        const backup = editor.children;
        try {
            editor.children = description.map((d) => {
                return {
                    type: 'p',
                    lineHeight: '1.5',
                    children: [
                        {
                            text: d,
                            fontSize: '14px',
                            color: 'rgba(0, 0, 0, 0.9)',
                        },
                    ],
                    id: 'a6ghm',
                };
            });
        } catch (error) {
            toast.error('Failed to parse description');
            console.log(error);
            editor.children = backup;
        }
    };

    return (
        <NewResourceLayout
            secondaryButton={
                <GenAICreateJobProvider onResponse={handleResponse}>
                    <Button type="button" variant="black">
                        <TbSparkles className="mr-2 text-xl" /> GenAI
                    </Button>
                </GenAICreateJobProvider>
            }
            handleSubmit={handleSubmit}
            loading={loading}
        >
            <div className="mx-auto w-[620px]">
                <div className="h-16" />
                {error && (
                    <Alert ref={ref} variant="destructive" className="mb-4 mt-1 pt-4">
                        <TbSword className="text-base" />
                        <AlertTitle>Created job failed!</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                <h1 className="text-3xl">{id ? 'Edit job' : "Let's set up your new job"}</h1>
                <FirstPart />
                <SecondPart />
                <ThirdPart />
                <div className="h-8" />
            </div>
        </NewResourceLayout>
    );
};

export default NewJob;
