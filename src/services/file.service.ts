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

export const uploadAudiosService = async (blobUrls: string[]) => {
    try {
        const uploadPromises = blobUrls.map(async (blobUrl) => {
            const response = await fetch(blobUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const audioBlob = await response.blob();

            const audioFile = new File([audioBlob], 'audio_recording.wav', {
                type: 'audio/wav',
            });

            const uploadResponse = await uploadFileService(audioFile);
            return uploadResponse.data.file.url;
        });

        const uploadedUrls = await Promise.all(uploadPromises);
        return uploadedUrls;
    } catch (error) {
        console.error('Upload failed', error);
        throw error;
    }
};
