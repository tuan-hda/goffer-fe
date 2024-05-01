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

export const uploadAudioService = async (audioBlob: Blob) => {
    const audioFile = new File([audioBlob], 'audio_recording.wav', {
        type: 'audio/wav',
    });

    try {
        const response = await uploadFileService(audioFile);
        console.log('File uploaded successfully!', response);
        // Xử lý thêm tự chọn, ví dụ: cập nhật UI hoặc lưu URL file đã tải
    } catch (error) {
        console.error('Upload failed', error);
    }
};
