/** @type {import('tailwindcss').Config} */
export default {
        content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
        theme: {
                extend: {
                        keyframes: {
                                spinY: {
                                        '0%': { transform: 'rotateY(0deg);' },
                                        '100%': {transform : 'rotateY(360deg);'}
                                },
                                
                        },
                        animation: {
                               'spinY' : 'spinY 5s linear infinite',
                        }
                },
                colors: {
                        main: '#23263A',
                        secondary: '#FF4A57',
                        tertiary: '#2B2D41',
                        text: '#ffffff',
                        darker: '#202234',
                },
                fontFamily: {
                        sans: '"PT Sans", sans-serif',
                },
        },
        plugins: [],
};
