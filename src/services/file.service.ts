import { CloudinaryFile } from '@/types/file.type';
import { baseAxios } from './base';

export const uploadFileService = async (file: File, type?: string) => {
    const formData = new FormData();
    formData.append('file', file);
    return baseAxios.post<{ file: CloudinaryFile }>('/files/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        params: {
            type,
        },
    });
};
