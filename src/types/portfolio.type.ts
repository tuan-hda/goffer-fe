export type Palette = {
    '--text-color': string;
    '--secondary-color': string;
    '--special-color': string;
    '--p-bg-color': string;
    '--dots-color': string;
    '--button-bg-color': string;
    '--button-bg-color-hover': string;
    '--button-color': string;
};

export type Template = {
    name: string;
    videoUrl: string;
    mimeType: string;
    key: string;
};

export type PortfolioConfiguration = {
    palette?: Palette;
    template?: string;
    portfolioDomain?: string;
    brandName?: string;
    logo?: string;
    status?: 'draft' | 'published';
};
