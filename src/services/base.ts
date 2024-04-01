import axios from 'axios';
import config from '@/configs/config';
import useAuthStore from '@/stores/authStore';
// import { AuthToken } from '@/types/token.type';

export const baseAxios = axios.create({
    baseURL: `${config.BACKEND_BASE_URL}/${config.BACKEND_VERSION}`,
    withCredentials: true,
});

export const noAuthAxios = axios.create({
    baseURL: `${config.BACKEND_BASE_URL}/${config.BACKEND_VERSION}`,
    withCredentials: true,
});

baseAxios.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().access?.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// let isTokenBeingRefreshed = false;

// baseAxios.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async (error) => {
//         const config = error?.config;
//         if (error?.response?.status === 401 && !isTokenBeingRefreshed) {
//             isTokenBeingRefreshed = true;
//             try {
//                 const response = await baseAxios.post<AuthToken>('/auth/refresh-tokens');
//                 const access = response.data.access;
//                 useAuthStore.getState().setAccess(access);

//                 config.headers = {
//                     ...config.headers,
//                     authorization: `Bearer ${access.token}`,
//                 };

//                 if (config?.headers?.retryOnFail) {
//                     return await baseAxios(config);
//                 }
//             } catch (error) {
//                 useAuthStore.getState().logOut();
//             } finally {
//                 isTokenBeingRefreshed = false;
//             }
//         } else {
//             useAuthStore.getState().logOut();
//         }

//         return Promise.reject(error);
//     },
// );
