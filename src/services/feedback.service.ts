import { baseAxios } from './base';
import { List } from '@/types/list.type';
import { AnalyzeFeedback, Feedback, NewFeedback, UpdateFeedback } from '@/types/feedback.type';
import { ListQueryOptions } from '@/types/common.type';

export const createFeedbackService = async (data: NewFeedback) =>
    (await baseAxios.post<Feedback>('/feedbacks', data)).data;

export const listFeedbacksService = async (query?: Partial<Record<keyof (Feedback & ListQueryOptions), unknown>>) =>
    (
        await baseAxios.get<List<Feedback> & AnalyzeFeedback>('/feedbacks', {
            params: {
                populate: 'owner',
                ...query,
            },
        })
    ).data;

export const getFeedbackService = async (id: string) => (await baseAxios.get<Feedback>(`/feedbacks/${id}`)).data;

export const updateFeedbackService = async (id: string, data: UpdateFeedback) =>
    (await baseAxios.patch<Feedback>(`/feedbacks/${id}`, data)).data;

export const deleteFeedbackService = async (id: string) => (await baseAxios.delete<Feedback>(`/feedbacks/${id}`)).data;
