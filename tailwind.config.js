/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,scss}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#121212",
                secondary: "#ff4081",
                textPrimary: "#f5f5f5",
                textSecondary: "#bbbbbb",
                buttonBg: "#ff8800",
                buttonHover: "#ff6600",
                orgDescription: "#9ca3af"
            },
        },
    },
    plugins: [],
};

// TODO: SET BASE COLORS
