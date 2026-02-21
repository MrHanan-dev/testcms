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
                // Millpond exact palette
                primary: {
                    600: '#1a5aa8', // Deep Navy Blue
                    500: '#1e6fc7', // Millpond Blue
                    400: '#3ca3e8', // Sky Blue
                    100: '#d6eaf8', // Pale Blue
                    DEFAULT: '#1a5aa8',
                },
                accent: {
                    500: '#f59e0b', // Amber
                    400: '#fbbf24', // Light Amber
                    DEFAULT: '#f59e0b',
                },
                gray: {
                    900: '#1a1a2e', // Body text
                    600: '#4a5568', // Muted body copy
                    100: '#f7f9fc', // Light section backgrounds
                },
                success: '#22c55e',
                error: '#ef4444',
                warning: '#f59e0b',
                info: '#3ca3e8',
                foreground: '#1a1a2e',      // Near-black text
                muted: '#4a5568',           // Slate gray — secondary text
                border: '#E2E8F0',          // Very light border  
                surface: '#ffffff',         // Card backgrounds
                background: '#FFFFFF',      // Pure white
            },
            fontFamily: {
                sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
                display: ['var(--font-nunito-sans)', 'system-ui', 'sans-serif'],
            },
            spacing: {
                'section': '100px',
            },
            letterSpacing: {
                'dense': '-0.025em',
                'tight': '-0.015em',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'liquid-morph': {
                    '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                    '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
                },
            },
            animation: {
                marquee: 'marquee 35s linear infinite',
                'liquid-morph': 'liquid-morph 4s ease-in-out infinite',
            },
            boxShadow: {
                'sm': '0 1px 3px rgba(0,0,0,0.08)',
                'md': '0 4px 16px rgba(0,0,0,0.10)',
                'lg': '0 8px 32px rgba(0,0,0,0.14)',
                'xl': '0 16px 48px rgba(30,111,199,0.18)',
                'subtle': '0 1px 3px rgba(0,0,0,0.04)',
                'card': '0 1px 2px rgba(0,0,0,0.03)',
                'card-hover': '0 20px 40px -15px rgba(0,0,0,0.06)',
                'premium': '0 25px 50px -12px rgba(0,0,0,0.08)',
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(135deg, #1e6fc7 0%, #1a5aa8 50%, #1248a0 100%)',
            }
        },
    },
    plugins: [],
};
