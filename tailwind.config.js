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
                    gold: '#C5A059',
                    dark: '#1A1A1A',
                    gray: '#333333',
                    light: '#F5F5F5',
                }
            },
        },
    },
    plugins: [],
}
