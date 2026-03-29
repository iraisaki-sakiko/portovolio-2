/** @type {import('tailwindcss').Config} */
export default {
  // Mode dark dengan class strategy
  darkMode: 'class',
  
  // Content paths untuk purging CSS
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/components/**/*.{astro,js,ts}',
    './src/layouts/**/*.{astro,js,ts}',
    './src/pages/**/*.{astro,js,ts}',
  ],
  
  theme: {
    extend: {
      // Custom colors
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1a1a',
          950: '#450a0a',
        },
      },
      
      // Custom font family
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
        mono: ['Fira Code', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      
      // Custom animations
      animation: {
        // Fade animations
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-left': 'fade-in-left 0.5s ease-out',
        'fade-in-right': 'fade-in-right 0.5s ease-out',
        'fade-in-scale': 'fade-in-scale 0.5s ease-out',
        
        // Spin animations
        'spin-slow': 'spin-slow 20s linear infinite',
        'spin-medium': 'spin-medium 10s linear infinite',
        'spin-fast': 'spin-fast 5s linear infinite',
        
        // Pulse animations
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 2s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 1.5s ease-in-out infinite',
        
        // Float animations
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float-slow 4s ease-in-out infinite',
        
        // Bounce
        'bounce': 'bounce 1s ease-in-out infinite',
        
        // Gradient shift
        'gradient-shift': 'gradient-shift 3s ease infinite',
        
        // Shine
        'shine': 'shine 3s ease-in-out infinite',
        
        // Blink
        'blink': 'blink 1s step-end infinite',
        
        // Slide
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        
        // Zoom
        'zoom-in': 'zoom-in 0.5s ease-out',
        
        // Rotate 3D
        'rotate-3d': 'rotate-3d 15s linear infinite',
      },
      
      // Custom keyframes
      keyframes: {
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'fade-in-down': {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          'from': { opacity: '0', transform: 'translateX(-20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          'from': { opacity: '0', transform: 'translateX(20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-scale': {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'spin-medium': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'spin-fast': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)', boxShadow: '0 0 0px rgba(220, 38, 38, 0)' },
          '50%': { opacity: '1', transform: 'scale(1.2)', boxShadow: '0 0 15px rgba(220, 38, 38, 0.6)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'shine': {
          '0%': { opacity: '0', transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
          '25%': { opacity: '0.5' },
          '50%': { opacity: '0.3' },
          '100%': { opacity: '0', transform: 'translateX(100%) translateY(100%) rotate(45deg)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'slide-in-left': {
          'from': { transform: 'translateX(-100%)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          'from': { transform: 'translateX(100%)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        'zoom-in': {
          'from': { transform: 'scale(0.8)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' },
        },
        'rotate-3d': {
          'from': { transform: 'rotateY(0deg)' },
          'to': { transform: 'rotateY(360deg)' },
        },
      },
      
      // Custom spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Custom border radius
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      
      // Custom backdrop blur
      backdropBlur: {
        xs: '2px',
      },
      
      // Custom transition timing
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      
      // Custom transition duration
      transitionDuration: {
        '2000': '2000ms',
      },
      
      // Custom box shadow
      boxShadow: {
        'glow': '0 0 20px rgba(220, 38, 38, 0.4)',
        'glow-lg': '0 0 30px rgba(220, 38, 38, 0.6)',
        'inner-glow': 'inset 0 0 10px rgba(220, 38, 38, 0.2)',
      },
    },
  },
  
  // Plugins
  plugins: [
    // Plugin untuk forms (opsional)
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    // Plugin untuk typography (opsional)
    require('@tailwindcss/typography'),
    // Plugin untuk aspect ratio
    require('@tailwindcss/aspect-ratio'),
  ],
};