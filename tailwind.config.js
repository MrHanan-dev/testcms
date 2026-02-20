/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0C1F38",
                    light: "#132D4F",
                    dark: "#071428",
                },
                accent: {
                    DEFAULT: "#E5B622",
                    hover: "#D4A61B",
                    light: "#FDF8E8",
                    muted: "#C49B1A",
                },
                background: "#F8F9FA",
                foreground: "#3C4043",
                slate: {
                    50: "#F8F9FA",
                    100: "#F1F3F5",
                    200: "#E9ECEF",
                    300: "#DEE2E6",
                    400: "#ADB5BD",
                    500: "#6C757D",
                    600: "#495057",
                    700: "#3C4043",
                    800: "#1A2332",
                    900: "#0C1F38",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            borderRadius: {
                'bento': '24px',
                '4xl': '32px',
                '5xl': '40px',
            },
            backdropBlur: {
                'xs': '2px',
                '2xl': '40px',
                '3xl': '64px',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-mesh': 'radial-gradient(at 0% 0%, rgba(12,31,56,0.06) 0, transparent 50%), radial-gradient(at 80% 0%, rgba(229,182,34,0.04) 0, transparent 50%), radial-gradient(at 100% 100%, rgba(12,31,56,0.03) 0, transparent 50%)',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'float-slower': 'float 10s ease-in-out infinite',
                fadeInUp: 'fadeInUp 0.6s ease-out forwards',
                marquee: 'marquee 30s linear infinite',
                shimmer: 'shimmer 3s ease-in-out infinite',
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(12,31,56,0.06), 0 4px 6px -4px rgba(12,31,56,0.04)',
                'bento': '0 8px 30px rgba(12,31,56,0.04)',
                'bento-hover': '0 20px 60px rgba(12,31,56,0.08)',
                'tactile': '0 10px 40px -10px rgba(12,31,56,0.12), 0 4px 6px -4px rgba(12,31,56,0.06)',
                'tactile-hover': '0 20px 60px -15px rgba(12,31,56,0.16), 0 8px 12px -6px rgba(12,31,56,0.08)',
                'gold': '0 10px 40px -10px rgba(229,182,34,0.25)',
                'glass': '0 8px 32px rgba(12,31,56,0.04)',
                'premium': '0 25px 80px -15px rgba(12,31,56,0.08)',
            },
        },
    },
    plugins: [],
};
