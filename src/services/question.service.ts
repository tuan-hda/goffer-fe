import { NewQuestion, Question } from '@/types/question.type';
import { baseAxios } from './base';
import { List } from '@/types/list.type';
import { ListQueryOptions } from '@/types/common.type';

export const createQuestionService = async (data: NewQuestion) => {
    return (await baseAxios.post<Question>('/questions', data)).data;
};

export const listQuestionsService = async (query?: Partial<Record<keyof (Question & ListQueryOptions), unknown>>) => {
    return (await baseAxios.get<List<Question>>('/questions', { params: query })).data;
};

export const getQuestions = async (jobId?: string) => {
    return (await baseAxios.get<List<Question>>(jobId ? '/questions?job=' + jobId : '/questions')).data;
};

export const getQuestionDifficultyCountService = async () => {
    return (await baseAxios.get('/questions/difficulty-count')).data;
};

export const getQuestionService = async (id: string) => {
    return (await baseAxios.get<Question>('/questions/' + id)).data;
};

export const updateQuestionService = async (id: string, data: Partial<Question>) => {
    return (await baseAxios.patch<Question>('/questions/' + id, data)).data;
};

export const deleteQuestionService = async (id: string) => {
    return (await baseAxios.delete('/questions/' + id)).data;
};
