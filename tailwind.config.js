/** @type {import('tailwindcss').Config} */
export default {
        content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
        theme: {
                extend: {},
                colors: {
                        'main' : '#23263A',
                        'secondary' : '#FF4A57',
                        'tertiary' : '#2B2D41',
                        'text' : '#ffffff',
                        'darker' : '#202234'
                }, 
                fontFamily: {
                        'sans' : '"PT Sans", sans-serif'
                }
        },
        plugins: [],
};
