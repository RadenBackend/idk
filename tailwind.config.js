/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Mono', 'monospace'],
        sourcecode: ['Source Code Pro', 'monospace'],
      },
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': { opacity: '0' },
          '0.1%': { opacity: '1' },
          '50%': { opacity: '1' },
          '50.1%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
