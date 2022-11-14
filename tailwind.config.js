const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      green: colors.green,
      indigo: colors.indigo,
      blue: colors.blue,
      violet: colors.violet,
      purple: colors.purple,
      fuchia: colors.fuchia,
      pink: colors.pink,
      rose: colors.rose,

      black: colors.black,
      white: colors.white,
      customBlue: '#61dafb',
      customGray: '#282c34',
    },
    fontFamily: {
      segoeBold: ['segoeBold', 'sans-serif'],
      segoeNorm: ['segoeNorm', 'sans-serif'],
    },
    listStyleType: {
      disc: 'disc',
      circle: 'circle',
    },
  },
  variants: {},
  plugins: [],
};
