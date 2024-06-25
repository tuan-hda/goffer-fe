import config from '@/configs/config';
import { baseAxios } from './base';
import { ThreadMessage } from '@assistant-ui/react';

export const conductQueryService = async (messages: ThreadMessage[], abortSignal: AbortSignal) => {
    return await fetch(`${config.BACKEND_BASE_URL}/${config.BACKEND_VERSION}/rag/chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // forward the messages in the chat to the API
        body: JSON.stringify({
            messages,
        }),
        // if the user hits the "cancel" button or escape keyboard key, cancel the request
        signal: abortSignal,
    });
};
