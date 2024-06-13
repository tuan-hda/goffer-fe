import { baseAxios } from './base';

export const generateResponseService = async (prompt: string, systemMessage?: string, maxTokens?: number) => {
    return (await baseAxios.post('/genai/generate', { prompt, systemMessage, maxTokens })).data;
};
