/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontSize: {
                hero3: 'clamp(2.5rem, 7vw, 6.5rem)',
                huge: '14vw',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px',
        },
        fontFamily: {
            exo2: ['"Exo 2"', 'sans-serif'],
            fontmono: ['"Courier Prime"', 'monospace'],
            mulish: ['Mulish', 'sans-serif'],
        },
        colors: {
            white: '#FFFFFF',
            black0: '#000000',
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
    plugins: [require('tailwindcss-debug-screens')],
};
