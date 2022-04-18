module.exports = {
    content: ["./src/**/*.html"],
    theme: {
        fontFamily: {
            'vazir': ['Vazir'],
        },
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            padding: {
                'md': "56%",
            },
            
        },
    },
    plugins: [require('@tailwindcss/line-clamp'),],
};