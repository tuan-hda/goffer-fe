import React, { useRef, useState } from 'react';
import GenAIComposer from './GenAIComposer';
import Suggestions from '../ui/assistant-ui/suggestions';
import { toast } from 'sonner';
import catchAsync from '@/utils/catchAsync';
import { GenAIProviderProps } from './data';
import { generateResponseService } from '@/services/genai.service';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import Recent from '../ui/assistant-ui/recent';

type GenAIPromptStateProps = GenAIProviderProps & {
    setParsedResult: (data: { result: any; prompt: string }) => void;
};

const GenAIPromptState = (props: GenAIPromptStateProps) => {
    const [prompt, setPrompt] = useState('');
    const { data: self } = useSelfProfileQuery();
    const isAborted = useRef(false);

    const parseResponse = (response: string) => {
        try {
            const data = JSON.parse(response);
            return data;
        } catch (error) {
            console.log(error);
            toast.error('Failed to parse data. Please try again.');
            return null;
        }
    };

    const saveRecent = (prompt: string, name: string) => {
        const identifier = `recent-${self?.id || 'anonymous'}-${name}`;
        let recent: string[] = [];
        try {
            recent = JSON.parse(localStorage.getItem(identifier) || '[]');
        } catch (error) {
            console.error(error);
        }
        recent.unshift(prompt);
        recent = recent.slice(0, 6);
        localStorage.setItem(identifier, JSON.stringify(recent));
    };

    const handleGenerateContent = () =>
        catchAsync(
            async () => {
                if (prompt.length < (props.min || 1)) {
                    toast.error(`Prompt is too short, need at least ${props.min} characters.`);
                    return;
                }
                const response = await generateResponseService(prompt, props.systemMessage, props.maxTokens);

                if (!isAborted.current)
                    props.setParsedResult({
                        prompt,
                        result: parseResponse(response.response),
                    });
                saveRecent(prompt, props.name);
            },
            () => {},
        );

    return (
        <div>
            <GenAIComposer onSubmit={handleGenerateContent} value={prompt} setValue={setPrompt} />
            <div className="mx-3 -mt-4 mb-4 rounded-b-2xl border border-black/10 bg-beige/30 p-3 pt-6">
                <Suggestions
                    suggestions={props.suggestions}
                    helperText="Get started with common prompts below"
                    onChange={setPrompt}
                />
            </div>
            <Recent name={props.name} onChange={setPrompt} />
        </div>
    );
};

export default GenAIPromptState;
