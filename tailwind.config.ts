import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            heebo: ['Heebo', ...fontFamily.sans],
            eczar: ['Eczar'],
        },
        extend: {
            colors: {
                black: '#03010d',
                white: '#ffffff',
                purple1: '#6d1eb3',
                purple2: '#461472',
                purple3: '#dfbcfe',
                purple4: '#d8d8f6',
                pink1: '#e622c2',
                darkblue1: '#170c55',
                darkblue2: '#03010d',
                gray1: '#dedbe4',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                brush: 'url(/brush.svg)',
            },
            rotate: {
                '30': '30deg',
                '-30': '-30deg',
            },
        },
    },
    plugins: [],
} satisfies Config
