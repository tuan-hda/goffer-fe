import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    [
                        'styled-jsx/babel',
                        {
                            plugins: ['@styled-jsx/plugin-sass'],
                        },
                    ],
                ],
            },
        }),
    ],
    server: {
        port: 5173,
    },
    resolve: {
        alias: {
            '@': '/src/',
        },
    },
});
