import axios from 'axios';
import config from 'src/configs/config';

export const baseAxios = axios.create({
    baseURL: `${config.BACKEND_BASE_URL}/${config.BACKEND_VERSION}`,
});

export const noAuthAxios = axios.create({
    baseURL: `${config.BACKEND_BASE_URL}/${config.BACKEND_VERSION}`,
});

// baseAxios.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers
// })
