/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,scss}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#ccb2ff",
                blackPrimary: "#03061e",
                buttonHover: "#b39de4",
            },
        },
    },
    plugins: [],
};

// TODO: SET BASE COLORS
