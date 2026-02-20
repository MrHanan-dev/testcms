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
                    glow: "rgba(229,182,34,0.15)",
                },
                background: "#FFFFFF",
                foreground: "#1A1A1A",
                charcoal: "#1A1A1A",
                warm: {
                    50: "#FAFAFA",
                    100: "#F5F5F5",
                    200: "#EEEEEE",
                    300: "#E0E0E0",
                },
                slate: {
                    50: "#FAFAFA",
                    100: "#F5F5F5",
                    200: "#EEEEEE",
                    300: "#E0E0E0",
                    400: "#BDBDBD",
                    500: "#9E9E9E",
                    600: "#757575",
                    700: "#616161",
                    800: "#1A2332",
                    900: "#0C1F38",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                serif: ["var(--font-serif)", "Georgia", "serif"],
            },
            spacing: {
                'section': '120px',
            },
            borderRadius: {
                'bento': '24px',
                '4xl': '32px',
                '5xl': '40px',
            },
            letterSpacing: {
                'dense': '-0.02em',
            },
            backdropBlur: {
                'xs': '2px',
                '2xl': '40px',
                '3xl': '64px',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-mesh': 'radial-gradient(at 0% 0%, rgba(12,31,56,0.03) 0, transparent 50%), radial-gradient(at 100% 100%, rgba(229,182,34,0.02) 0, transparent 50%)',
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
                'liquid-morph': {
                    '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                    '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
                },
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 15px rgba(229,182,34,0.1)' },
                    '50%': { boxShadow: '0 0 30px rgba(229,182,34,0.25)' },
                },
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'float-slower': 'float 10s ease-in-out infinite',
                fadeInUp: 'fadeInUp 0.6s ease-out forwards',
                marquee: 'marquee 30s linear infinite',
                shimmer: 'shimmer 3s ease-in-out infinite',
                'liquid-morph': 'liquid-morph 4s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0,0,0,0.04), 0 4px 6px -4px rgba(0,0,0,0.02)',
                'bento': '0 1px 3px rgba(0,0,0,0.04)',
                'bento-hover': '0 20px 40px rgba(0,0,0,0.05)',
                'tactile': '0 4px 20px -8px rgba(0,0,0,0.08)',
                'tactile-hover': '0 20px 40px rgba(0,0,0,0.05)',
                'gold': '0 10px 40px -10px rgba(229,182,34,0.25)',
                'gold-glow': '0 0 20px rgba(229,182,34,0.15), 0 0 40px rgba(229,182,34,0.05)',
                'glass': '0 4px 20px rgba(0,0,0,0.03)',
                'premium': '0 25px 60px -15px rgba(0,0,0,0.06)',
                'neu': '6px 6px 12px rgba(0,0,0,0.04), -6px -6px 12px rgba(255,255,255,0.8)',
                'neu-inset': 'inset 3px 3px 6px rgba(0,0,0,0.04), inset -3px -3px 6px rgba(255,255,255,0.7)',
                'neu-hover': '0 20px 40px rgba(0,0,0,0.05)',
            },
        },
    },
    plugins: [],
};
