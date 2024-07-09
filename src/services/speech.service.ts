import { baseAxios } from './base';

export const speechToText = async (audioUrl: string) =>
    (
        await baseAxios.post<string>('/speech', {
            audioUrl,
        })
    ).data;
