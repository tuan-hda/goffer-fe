import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                serif: ['EB Garamond', 'serif'],
                'serif-2': ['Bitter', 'serif'],
                mono: ['Geist Mono Variable', 'monospace'],
            },
            colors: {
                'm-yellow': {
                    DEFAULT: '#FFE0A9',
                },
                pale: {
                    DEFAULT: '#fff',
                    400: '#f1efe8',
                    500: '#e4e2dc',
                    600: '#d7d6d0',
                    700: '#cbc9c4',
                    800: '#bebdb7',
                    900: '#b1b0ab',
                },
                beige: {
                    DEFAULT: '#F0DCC8',
                },
                text: {
                    DEFAULT: '#333',
                    100: '#F0F0F1',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
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
                            DEFAULT: '#F0DCC8',
                            foreground: '#333',
                        },
                        focus: '#FA8050',
                    },
                },
            },
        }),
        require('tailwindcss-animate'),
    ],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//         './index.html',
//         './src/**/*.{js,ts,jsx,tsx}',
// './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
//     ],
//     theme: {
//         extend: {
//             fontFamily: {
//                 serif: ['EB Garamond', 'serif'],
//             },
//             colors: {
// pale: {
//     DEFAULT: '#fefcf5',
// },
// beige: {
//     DEFAULT: '#F0DCC8',
// },
// text: {
//     DEFAULT: '#333',
// },
//             },
//         },
//     },
//     darkMode: 'class',
//     plugins: [
//         nextui({
//             themes: {
//                 light: {
//                     colors: {
//                         primary: {
//                             DEFAULT: '#FA8050',
//                             foreground: '#fff',
//                         },
//                         secondary: {
//                             DEFAULT: '#F0DCC8',
//                             foreground: '#333',
//                         },
//                         focus: '#FA8050',
//                     },
//                 },
//             },
//         }),
//     ],
// };
