import { baseAxios } from './base';
import { Recommendation, NewRecommendation, EditRecommendation } from '@/types/recommendation.type';
import { List } from '@/types/list.type';
import { ListQueryOptions } from '@/types/common.type';

export const createRecommendationService = async (data: NewRecommendation) =>
    (await baseAxios.post<Recommendation>('/recommendations', data)).data;

export const listRecommendationsService = async (
    params?: Partial<Record<keyof (Recommendation & ListQueryOptions), string | number>>,
) =>
    (
        await baseAxios.get<List<Recommendation>>('/recommendations', {
            params,
        })
    ).data;

export const getRecommendationService = async (id: string) =>
    (await baseAxios.get<Recommendation>(`/recommendations/${id}`)).data;

export const updateRecommendationService = async (id: string, data: EditRecommendation) =>
    (await baseAxios.patch<Recommendation>(`/recommendations/${id}`, data)).data;

export const deleteRecommendationService = async (id: string) => baseAxios.delete(`/recommendations/${id}`);
