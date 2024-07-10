import { toast } from 'sonner';
import { CreateJobResult as ResultType, GEN_AI_CREATE_JOB as GEN_AI } from './data.tsx';

import GenAIProvider from '@/components/genai/GenAIProvider';

type GenAICreateJobProviderProps = {
    children?: React.ReactNode;
    onResponse: (result: ResultType) => void;
};

const GenAICreateJobProvider = ({ children, onResponse }: GenAICreateJobProviderProps) => {
    return (
        <GenAIProvider onResponse={onResponse} {...GEN_AI}>
            {children}
        </GenAIProvider>
    );
};

export default GenAICreateJobProvider;
