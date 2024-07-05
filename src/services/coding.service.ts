import config from '@/configs/config';
import { SubmissionResponse } from '@/types/coding.type';
import axios from 'axios';

export const submitService = async (data: Partial<SubmissionResponse>) => {
    return (
        await axios.post<SubmissionResponse>(
            'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*&wait=true',
            data,
            {
                headers: {
                    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                    'x-rapidapi-key': config.RAPID_API_KEY,
                },
                params: {
                    redirect_stderr_to_stdout: true,
                },
            },
        )
    ).data;
};

export const submitBatchService = async (data: Partial<SubmissionResponse>[]) => {
    return (
        await axios.post<{ token: string }[]>(
            'https://judge0-ce.p.rapidapi.com/submissions/batch?base64_encoded=true&wait=false&fields=*&wait=true',
            {
                submissions: data,
            },
            {
                headers: {
                    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                    'x-rapidapi-key': config.RAPID_API_KEY,
                },
                params: {
                    redirect_stderr_to_stdout: true,
                },
            },
        )
    ).data;
};

export const getBatchSubmissionsService = async (tokens: string[]) => {
    return (
        await axios.get<{ submissions: SubmissionResponse[] } | any>(
            'https://judge0-ce.p.rapidapi.com/submissions/batch?base64_encoded=true&wait=false&fields=*&wait=true',
            {
                params: {
                    tokens: tokens.join(','),
                    redirect_stderr_to_stdout: true,
                },
                headers: {
                    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                    'x-rapidapi-key': config.RAPID_API_KEY,
                },
            },
        )
    ).data;
};
