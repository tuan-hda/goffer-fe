import { NewQuestion, Question } from '@/types/question.type';
import { baseAxios } from './base';
import { List } from '@/types/list.type';

export const createQuestionsService = async (data: NewQuestion[]) => {
    return (await baseAxios.post<Question[]>('/questions', data)).data;
};

export const getQuestions = async (jobId?: string) => {
    return (await baseAxios.get<List<Question>>(jobId ? '/questions?job=' + jobId : '/questions')).data;
};
