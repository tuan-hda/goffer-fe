import GenAICreateJobProvider from '@/components/genai/GenAICreateJobProvider';
import { CreateJobResult } from '@/components/genai/data';
import { Button } from '@/components/ui/button';
import useNewJobStore, { initialData } from '@/stores/newJob';
import { useEditorRef } from '@udecode/plate-common';
import classNames from 'classnames';
import { TbChevronLeft, TbLoader, TbSparkles } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

type NewResourceLayoutProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading: boolean;
    children?: React.ReactNode;
    submitText?: string;
    showPreview?: boolean;
    secondaryButton?: React.ReactNode;
};

const NewResourceLayout = ({
    showPreview = true,
    submitText,
    handleSubmit,
    loading,
    children,
    secondaryButton,
}: NewResourceLayoutProps) => {
    const navigate = useNavigate();
    const { domain, id } = useParams();
    const setData = useNewJobStore((state) => state.setData);
    const editor = useEditorRef();

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
        <form onSubmit={handleSubmit}>
            <img src="/diamond.png" alt="bloom" className="fixed left-[16vw] top-[4vh] w-[35vw] opacity-50" />
            <img
                src="/flower.png"
                alt="bloom"
                className="fixed bottom-[16vh] left-[65vw] w-[35vw] -translate-x-1/2 opacity-50"
            />
            <div className="relative z-[1]">
                <div className="fixed left-0 right-0 top-0 z-[1] mx-auto h-16 w-full bg-white/40 px-8 shadow-sm backdrop-blur-md">
                    <div className="mx-auto flex h-full max-w-7xl items-center gap-2">
                        <button
                            type="button"
                            onClick={() => navigate(domain ? `/app/organization/${domain}` : '/app')}
                            className="group relative mr-auto flex flex-shrink-0 gap-2 text-sm"
                        >
                            <TbChevronLeft className="text-xl" /> Go home
                            <div className="absolute -bottom-1 ml-1 w-full border-t border-t-gray-700 opacity-0 transition group-hover:opacity-100" />
                        </button>

                        <GenAICreateJobProvider onResponse={handleResponse}>
                            <Button type="button" variant="black">
                                <TbSparkles className="mr-2 text-xl" /> GenAI
                            </Button>
                        </GenAICreateJobProvider>

                        {secondaryButton}

                        <Button
                            disabled={loading}
                            type="submit"
                            className={classNames('min-w-0 rounded-xl', !showPreview && !secondaryButton && 'ml-auto')}
                        >
                            {loading && <TbLoader className="mr-2 animate-spin text-base" />}
                            {id ? 'Update' : submitText ?? 'Create'}
                        </Button>
                    </div>
                </div>
                <div className="scroll-hidden relative flex py-6 text-base">{children}</div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 top-0 h-screen w-full bg-pale/50 backdrop-blur-xl" />
        </form>
    );
};

export default NewResourceLayout;
