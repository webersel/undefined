/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hacker': {
          black: '#0a0a0a',
          dark: '#111111',
          gray: '#1a1a1a',
          'gray-light': '#2a2a2a',
          'gray-lighter': '#333333',
          green: '#00ff00',
          'green-dark': '#00cc00',
          blue: '#0077ff',
          'blue-dark': '#0055cc',
          cyan: '#00ffff',
          'cyan-dark': '#00cccc',
          purple: '#9900ff',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'scanline': 'scanline 6s linear infinite',
        'blink': 'blink 1.2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};