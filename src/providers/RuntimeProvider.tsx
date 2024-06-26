import { conductQueryService } from '@/services/rag.service';
import { AssistantRuntimeProvider, useLocalRuntime, type ChatModelAdapter } from '@assistant-ui/react';
import removeMd from 'remove-markdown';
const MyModelAdapter: ChatModelAdapter = {
    async run({ messages, abortSignal }) {
        // TODO replace with your own API
        try {
            const result = await conductQueryService(messages, abortSignal);

            const data = await result.json();

            return {
                content: [
                    {
                        type: 'text',
                        text: removeMd(data),
                    },
                ],
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: 'text',
                        text: 'An error occurred. Please try again.',
                    },
                ],
            };
        }
    },
};

export function RuntimeProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const runtime = useLocalRuntime(MyModelAdapter);

    return <AssistantRuntimeProvider runtime={runtime}>{children}</AssistantRuntimeProvider>;
}
