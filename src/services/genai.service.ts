import { baseAxios } from './base';

export const generateResponseService = async (prompt: string, systemMessage?: string) => {
    return (await baseAxios.post('/genai/generate', { prompt, systemMessage })).data;
};
