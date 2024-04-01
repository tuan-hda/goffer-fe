import { baseAxios } from './base';
import { NewCheckoutSession } from '@/types/payment.type';

export const createCheckoutSessionService = async (data: NewCheckoutSession) =>
    (await baseAxios.post<{ id: string }>('/payments/create-checkout-session', data)).data;
