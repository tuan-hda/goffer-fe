import { TbSword } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';
import { FirstPart, SecondPart, ThirdPart } from '@/components/newJob';
import useCurrOrganization from '@/hooks/useCurrOrganization';
import { useRef, useState } from 'react';
import useNewJobStore from '@/stores/newJob';
import { useEditorRef } from '@udecode/plate-common';
import { isAxiosError } from 'axios';
import { createJobService } from '@/services/jobs.service';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { NewJob as NewJobType } from '@/types/job.type';
import useListOrganizationJobs from '@/hooks/useListOrganizationJobs';
import { shallow } from 'zustand/shallow';
import NewResourceLayout from '@/layouts/NewResourceLayout';

const NewJob = () => {
    const navigate = useNavigate();
    const { domain } = useParams();

    const { data: curr } = useCurrOrganization();
    const [data, clear] = useNewJobStore((state) => [state.data, state.clear], shallow);
    const { refetch } = useListOrganizationJobs();

    const ref = useRef<HTMLDivElement>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const editor = useEditorRef();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    return (
        <NewResourceLayout handleSubmit={handleSubmit} loading={loading}>
            <div className="mx-auto w-[620px]">
                <div className="h-16" />
                {error && (
                    <Alert ref={ref} variant="destructive" className="mb-4 mt-1 pt-4">
                        <TbSword className="text-base" />
                        <AlertTitle>Created job failed!</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                <h1 className="text-3xl">Let&apos;s set up your new job</h1>
                <FirstPart />
                <SecondPart />
                <ThirdPart />
                <div className="h-8" />
            </div>
        </NewResourceLayout>
    );
};

export default NewJob;
