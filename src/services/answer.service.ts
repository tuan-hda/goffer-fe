import { baseAxios } from './base';

export const summarizeAnswerService = (audioUrl: string) => {
    return baseAxios.post<{
        result: string;
    }>('/answers/summarize/audio', { audioUrl });
};
