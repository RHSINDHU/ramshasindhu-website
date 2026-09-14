/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#2b2b2b',
          850: '#1f1f1f',
          900: '#171717',
          950: '#0d0d0d',
          1000: '#000000',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(4rem, 12vw, 12rem)', { lineHeight: '0.95', fontWeight: '600' }],
        'display-xl': ['clamp(3rem, 9vw, 9rem)', { lineHeight: '0.95', fontWeight: '600' }],
        'display-lg': ['clamp(2.5rem, 7vw, 7rem)', { lineHeight: '1', fontWeight: '600' }],
        'display-md': ['clamp(2rem, 5vw, 5rem)', { lineHeight: '1.05', fontWeight: '500' }],
        'headline': ['clamp(1.75rem, 4vw, 4rem)', { lineHeight: '1.1', fontWeight: '500' }],
        'title': ['clamp(1.5rem, 3vw, 3rem)', { lineHeight: '1.15', fontWeight: '500' }],
        'subtitle': ['clamp(1.25rem, 2vw, 2rem)', { lineHeight: '1.2', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
        'micro': ['0.625rem', { lineHeight: '1.3' }],
      },
      letterSpacing: {
        'editorial': '0.04em',
        'wide-editorial': '0.08em',
        'ultra-wide': '0.2em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '38': '9.5rem',
      },
      screens: {
        'xs': '475px',
      },
      transitionDuration: {
        '700': '700ms',
        '1000': '1000ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
