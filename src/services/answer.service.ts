import { AnswerResponse, NewAnswer } from '@/types/answer.type';
import { baseAxios } from './base';

export const summarizeAnswerService = (audioUrl: string) => {
    return baseAxios.post<{
        result: string;
    }>('/answers/summarize/audio', { audioUrl });
};

export const submitApplyAudioAnswerService = async (data: NewAnswer) => {
    return (await baseAxios.post<AnswerResponse>('/answers/audio', data)).data;
};

export const getApplyAnswer = async (questionId: string, applicationId?: string) => {
    return (await baseAxios.get<AnswerResponse>(`/answers/apply-question/${applicationId}/${questionId}`)).data;
};
