import { QueryClient, QueryClientProvider, QueryCache } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { isAxiosError } from 'axios';
import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseAxios } from 'src/services/base';
import useAuthStore from 'src/stores/authStore';
import { AuthToken } from 'src/types/token.type';
import shallow from 'zustand/shallow';

type QueryProviderProps = {
    children: React.ReactNode;
};

const QueryProvider = ({ children }: QueryProviderProps) => {
    const navigate = useNavigate();
    const refreshingToken = useRef(false);

    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 30000,
                        retry: (failureCount, error) => {
                            if (isAxiosError(error) && error?.response?.status === 401) {
                                return false;
                            }

                            return failureCount <= 1;
                        },
                    },
                },
                queryCache: new QueryCache({
                    onError: async (error, query) => {
                        if (isAxiosError(error) && error?.response?.status === 401) {
                            try {
                                await refreshAuthToken();
                                queryClient.invalidateQueries({ queryKey: query.queryKey });
                            } catch (error) {
                                console.error('Error refreshing token', error);
                            }
                        }
                    },
                }),
            }),
    );
    const [setAccess, logOut] = useAuthStore((state) => [state.setAccess, state.logOut], shallow);

    const refreshAuthToken = useCallback(async () => {
        if (refreshingToken.current) {
            return;
        }

        try {
            refreshingToken.current = true;

            const response = await baseAxios.post<AuthToken>('/auth/refresh-tokens');
            setAccess(response.data.access);
        } catch (error) {
            logOut();
            navigate('/');
            throw error;
        } finally {
            refreshingToken.current = false;
        }
    }, [logOut, navigate, setAccess]);

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};

export default QueryProvider;
