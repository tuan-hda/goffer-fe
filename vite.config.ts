import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

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
        visualizer({
            open: true,
        }),
        ViteMinifyPlugin({}),
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
