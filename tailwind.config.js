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
             keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-7deg)' },
          '50%': { transform: 'rotate(7deg)' },
        }
      },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite'
            }
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms'),
    ],
};