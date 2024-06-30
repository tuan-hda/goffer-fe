import { Evaluation, CreateEvaluation, UpdateEvaluation } from '@/types/evaluation.type';
import { baseAxios } from './base';

export const createEvaluationService = async (data: CreateEvaluation): Promise<Evaluation> => {
    const response = (await baseAxios.post<Evaluation>('/evaluations', data)).data;
    return response;
};

export const getEvaluationsService = async (params?: Record<string, unknown>): Promise<Evaluation[]> => {
    const response = (await baseAxios.get<{ results: Evaluation[] }>('/evaluations', { params })).data;
    return response.results;
};

export const getEvaluationByIdService = async (evaluationId: string): Promise<Evaluation> => {
    const response = (await baseAxios.get<Evaluation>(`/evaluations/${evaluationId}`)).data;
    return response;
};

export const updateEvaluationService = async (evaluationId: string, data: UpdateEvaluation): Promise<Evaluation> => {
    const response = (await baseAxios.patch<Evaluation>(`/evaluations/${evaluationId}`, data)).data;
    return response;
};

export const deleteEvaluationService = async (evaluationId: string): Promise<void> => {
    await baseAxios.delete(`/evaluations/${evaluationId}`);
};
