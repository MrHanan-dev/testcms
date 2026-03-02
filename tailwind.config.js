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
                    700: '#072A40', // Navy Shadow (Depth)
                    600: '#0B3C5D', // Deep Executive Blue (Main)
                    500: '#61CAED', // Primary Brand (Light Blue)
                    DEFAULT: '#0B3C5D',
                },
                luxury: {
                    gold: '#55c5e7', // Bright Cyan (formerly Champagne Gold)
                    navy: '#0F172A', // Rich Dark (Headings)
                    slate: '#334155', // Charcoal Gray (Body)
                    soft: '#F4F7FA', // Soft Luxury Background
                },
                accent: {
                    DEFAULT: '#55c5e7',
                },
                gray: {
                    900: '#0F172A', // Heading Navy
                    600: '#334155', // Charcoal Gray
                    100: '#F4F7FA', // Soft Luxury BG
                },
                foreground: '#0F172A',      // High-authority text
                muted: '#334155',           // Smooth gray text
                border: '#E2E8F0',
                surface: '#FFFFFF',
                background: '#F4F7FA',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
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
                'luxury-gradient': 'linear-gradient(135deg, #0B3C5D 0%, #072A40 100%)',
                'gold-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(85, 197, 231, 0.1) 50%, transparent 100%)',
            }
        },
    },
    plugins: [],
};
