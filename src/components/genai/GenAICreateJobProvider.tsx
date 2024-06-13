import { CreateJobResult as ResultType } from './data';
import { GEN_AI_CREATE_JOB as GEN_AI } from './data';

import GenAIProvider from '@/components/genai/GenAIProvider';
import { toast } from 'sonner';

type GenAICreateJobProviderProps = {
    children?: React.ReactNode;
    onResponse: (result: ResultType) => void;
};

const GenAICreateJobProvider = ({ children, onResponse }: GenAICreateJobProviderProps) => {
    const handleResponse = (result: string) => {
        try {
            const data = JSON.parse(result) as ResultType;
            return onResponse(data);
        } catch (error) {
            toast.error(`Failed to ${GEN_AI.title}`);
            return onResponse(result);
        }
    };
    return (
        <GenAIProvider onResponse={handleResponse} {...GEN_AI}>
            {children}
        </GenAIProvider>
    );
};

export default GenAICreateJobProvider;
