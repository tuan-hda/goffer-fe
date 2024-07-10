import { toast } from 'sonner';
import { CreateProjectResult as ResultType, GEN_AI_CREATE_PROJECT as GEN_AI } from './data.tsx';

import GenAIProvider from '@/components/genai/GenAIProvider';

type GenAICreateJobProviderProps = {
    children?: React.ReactNode;
    onResponse: (result: ResultType) => void;
};

const GenAICreateProjectProvider = ({ children, onResponse }: GenAICreateJobProviderProps) => {
    return (
        <GenAIProvider onResponse={onResponse} {...GEN_AI}>
            {children}
        </GenAIProvider>
    );
};

export default GenAICreateProjectProvider;
