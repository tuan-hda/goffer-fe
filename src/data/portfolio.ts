import { Template } from '@/types/portfolio.type';

export const PALETTE: Record<
    string,
    {
        '--text-color': string;
        '--secondary-color': string;
        '--special-color': string;
        '--p-bg-color': string;
        '--dots-color': string;
        '--button-bg-color': string;
        '--button-bg-color-hover': string;
        '--button-color': string;
    }
> = {
    WHITE: {
        '--text-color': '#000',
        '--secondary-color': '#727A84',
        '--special-color': '#8A909C',
        '--p-bg-color': '#fff',
        '--dots-color': '#bbbef9',
        '--button-bg-color': '#111',
        '--button-bg-color-hover': '#333',
        '--button-color': '#fff',
    },
    BLACK: {
        '--text-color': '#fff',
        '--secondary-color': '#8D857B',
        '--special-color': '#756F63',
        '--p-bg-color': '#121212',
        '--dots-color': '#444106',
        '--button-bg-color': '#fff',
        '--button-bg-color-hover': '#ccc',
        '--button-color': '#000',
    },
    RETRO_CUPHEAD: {
        '--text-color': '#DC4C2D',
        '--secondary-color': '#EBA696',
        '--special-color': '#EBA696',
        '--p-bg-color': '#F4F0EB',
        '--dots-color': '#F4F0EB',
        '--button-bg-color': '#DC4C2D',
        '--button-bg-color-hover': '#DC4C2DCC',
        '--button-color': '#fff',
    },
};

export const TEMPLATE: Record<string, Template> = {
    ONCE_IN_A_MOON: {
        key: 'ONCE_IN_A_MOON',
        name: 'Once in a moon',
        videoUrl: 'https://res.cloudinary.com/doxsstgkc/video/upload/v1716954338/goffer/b7yapx8jjhccxymrwlsj.mp4',
        mimeType: 'video/mp4',
    },
    DITTO: {
        key: 'DITTO',
        name: 'Ditto',
        videoUrl: 'https://res.cloudinary.com/doxsstgkc/video/upload/v1716954333/goffer/dtrznrewiou2lsycsegh.mp4',
        mimeType: 'video/webm',
    },
};
