/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontSize: {
                hero3: 'clamp(2.8rem, 7vw, 7rem)',
                huge: '14vw',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px',
            '3xl': '1680px',
        },
        fontFamily: {
            exo2: ['"Exo 2"', 'sans-serif'],
            fontmono: ['"Courier Prime"', 'monospace'],
            mulish: ['Mulish', 'sans-serif'],
            baumans: ['Baumans', 'cursive'],
            galada: ['Galada', 'cursive'],
            major: ['Major Mono Display', 'monospace'],
        },
        colors: {
            white: '#FFFFFF',
            white2: '#CCC',
            black0: '#000000',
            black: '#1a1a1a',
            black2: '#333',
            purple: '#7e2fdb',
            lime: '#acff3e',
        },
        transitionTimingFunction: {
            linear: 'linear',
            outsine: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
        },
        debugScreens: {
            position: ['bottom', 'right'],
        },
    },
    plugins: [
        require('tailwindcss-debug-screens'),
        require('@tailwindcss/typography'),
    ],
};
