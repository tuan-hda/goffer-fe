import { toast } from 'sonner';
import { GenerateProfileResult as ResultType , GEN_AI_GENERATE_PROFILE as GEN_AI } from './data';

import GenAIProvider from '@/components/genai/GenAIProvider';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import classNames from 'classnames';

type GenAIGenerateProfileProviderProps = {
    children?: React.ReactNode;
    onResponse: (result: ResultType) => void;
};

const GenAIGenerateProfileProvider = ({ children, onResponse }: GenAIGenerateProfileProviderProps) => {
    const { data: self } = useSelfProfileQuery();

    const handleResponse = (result: string) => {
        try {
            const data = JSON.parse(result) as ResultType;
            return onResponse(data);
        } catch (error) {
            console.log(error);
            toast.error('Failed to parse data');
            return onResponse(result);
        }
    };
    return (
        <GenAIProvider onResponse={handleResponse} {...GEN_AI}>
            <div className={classNames(self?.isPro ? 'pointer-events-auto' : 'pointer')}>{children}</div>
        </GenAIProvider>
    );
};

export default GenAIGenerateProfileProvider;
