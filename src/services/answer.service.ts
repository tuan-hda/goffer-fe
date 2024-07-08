import { AnswerResponse, NewAnswer } from '@/types/answer.type';
import { baseAxios } from './base';

export const summarizeAnswerService = (audioUrl: string) => {
    return baseAxios.post<{
        result: string;
    }>('/answers/summarize/audio', { audioUrl });
};

export const submitAudioAnswer = async (data: NewAnswer) => {
    return (await baseAxios.post<AnswerResponse>('/answers/audio', data)).data;
};

export const getApplyAnswer = async (questionId: string, ref: string) => {
    return (await baseAxios.get<AnswerResponse>(`/answers/question/${questionId}/${ref}`)).data;
};
