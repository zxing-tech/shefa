/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                shefa: {
                    gold: '#C8A34C',
                    navy: '#0A1F44',
                    black: '#0B0D10',
                    gray: '#6D7278',
                    white: '#F6F7FA',
                }
            },
            fontFamily: {
                heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['IBM Plex Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
