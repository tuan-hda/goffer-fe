import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['EB Garamond', 'serif'],
            },
            colors: {
                beige: {
                    DEFAULT: '#EFDED6',
                },
                text: {
                    DEFAULT: '#333',
                },
            },
        },
    },
    darkMode: 'class',
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        primary: {
                            DEFAULT: '#FA8050',
                            foreground: '#fff',
                        },
                        secondary: {
                            DEFAULT: '#222834',
                            foreground: '#fff',
                        },
                        focus: '#FA8050',
                    },
                },
            },
        }),
    ],
};
