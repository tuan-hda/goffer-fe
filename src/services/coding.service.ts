import config from '@/configs/config';
import { SubmissionResponse } from '@/types/coding.type';
import axios from 'axios';

export const submitService = async (data: any) => {
    return await axios.post<SubmissionResponse>(
        'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*&wait=true',
        data,
        {
            headers: {
                'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                'x-rapidapi-key': config.RAPID_API_KEY,
            },
        },
    );
};
