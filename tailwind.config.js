/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,scss}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                agencyBackground: "#ccb2ff",
                agencyBlack: "#03061e",
                agencyBackgroundDarker: "#b39de4",
                agencyTextColor: "#04061F"
            },
            fontFamily: {
                manrope: ['Manrope', 'sans-serif'],
            },     
        },
    },
    plugins: [],
};