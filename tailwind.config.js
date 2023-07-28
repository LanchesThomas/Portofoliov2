export default {
        content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
        theme: {
                extend: {
                        keyframes: {
                                waves: {
                                        '0%': { rotate: '10deg' },
                                        '50%': { rotate: '-10deg' },
                                        '100%': { rotate: '10deg' },
                                },
                                fadeTop: {
                                        '100%': { transform: 'translateY(0%)' },
                                },
                                fadeBottom: {
                                        '100%': { transform: 'translateY(0%)' },
                                },
                                opacity: {
                                        '0%': { opacity: '0' },
                                        '100%': { opacity: '1' },
                                },
                        },
                        animation: {
                                'spin-slow': 'spin 10s linear infinite',
                                'spin-switch': 'spin 500ms ease-in-out',
                                waves: 'waves 10s ease-in-out infinite',
                                apparitionTop:
                                        'fadeTop 1s ease-out forwards, opacity 3s linear',
                                apparitionBottom:
                                        'fadeBottom 2s 1s ease-out forwards, opacity 2s linear forwards',
                                apparitionOpacity:
                                        'opacity 5s 2s ease-in-out backwards',
                        },
                },
                colors: {
                        main: 'var(--color-main)',
                        secondary: 'var(--color-secondary)',
                        tertiary: 'var(--color-tertiary)',
                        text: 'var(--color-text)',
                        darker: 'var(--color-darker)',
                },
                fontFamily: {
                        sans: '"PT Sans", sans-serif',
                },
        },
        plugins: [],
};
