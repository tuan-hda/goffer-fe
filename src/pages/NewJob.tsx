import { TbChevronLeft, TbLoader, TbSword } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';
import { FirstPart, SecondPart, ThirdPart } from '@/components/newJob';
import { Button } from '@/components/ui/button';
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
        <form onSubmit={handleSubmit}>
            <img src="/diamond.png" alt="bloom" className="fixed left-[16vw] top-[4vh] w-[35vw] opacity-50" />
            <img
                src="/flower.png"
                alt="bloom"
                className="fixed bottom-[16vh] left-[65vw] w-[35vw] -translate-x-1/2 opacity-50"
            />
            <div className="relative z-[1]">
                <div className="fixed left-0 right-0 top-0 z-[1] mx-auto h-16 w-full bg-white/40 px-8 shadow-sm backdrop-blur-md">
                    <div className="mx-auto flex h-full max-w-7xl items-center">
                        <button
                            type="button"
                            onClick={() => navigate(`/app/organization/${curr?.domain}`)}
                            className="group relative flex flex-shrink-0 gap-2 text-sm"
                        >
                            <TbChevronLeft className="text-xl" /> Go home
                            <div className="absolute -bottom-1 ml-1 w-full border-t border-t-gray-700 opacity-0 transition group-hover:opacity-100" />
                        </button>
                        <Button type="button" className="ml-auto min-w-0 rounded-xl" variant="outline">
                            Preview
                        </Button>

                        <Button disabled={loading} type="submit" className="ml-2 min-w-0 rounded-xl">
                            {loading && <TbLoader className="mr-2 animate-spin text-base" />}
                            Create
                        </Button>
                    </div>
                </div>
                <div className="scroll-hidden relative flex py-6 text-base">
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
                </div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 top-0 h-screen w-full bg-pale/30 backdrop-blur-xl" />
        </form>
    );
};

export default NewJob;
