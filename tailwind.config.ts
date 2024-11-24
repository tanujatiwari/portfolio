import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    dark: '#f6f6f6',
                    light: '#F9F9F9',
                    'dark-50': '#1C1C1C',
                    'dark-100': '#1a1c1e',
                    'dark-150': '#141414',
                    'dark-200': '#121111',
                },
                secondary: {
                    'green-light': '#B4CFCB',
                },
            },
            backgroundImage: {
                headerBg: 'linear-gradient(180deg,rgba(17,17,17,.5) 0%,rgb(20, 20, 20) 100%)',
                projectsBg: 'linear-gradient(rgba(46, 46, 46, 0) 0%, rgba(1, 21, 21, 0.85) 100%)',
            },
            fontFamily: {
                anton: ['var(--font-anton)'],
                inter: ['var(--font-inter)'],
            },
        },
    },
    plugins: [],
}
export default config
