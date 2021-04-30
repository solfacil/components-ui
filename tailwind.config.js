module.exports = {
  corePlugins: {
    container: false,
  },
  variants: {
    extend: {},
  },
  purge: {
    enabled: true,
    content: ['./public/**/*.html', './src/**/*.vue'],
  },
  theme: {
    borderRadius: {
      initial: 'initial',
      default: '0.25rem',
      full: '9999px',
    },

    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
    },

    boxShadow: {
      sm: '0px 4px 8px rgba(0, 0, 0, 0.08)',
      default: '0px 16px 64px rgba(0, 0, 0, 0.16)',
      none: 'none',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      orange1: '#FFD9AB',
      orangePrimary: '#FFB600',
      orange3: '#FF8A00',

      gray1: '#F8F8F6',
      gray2: '#EEEEEE',
      gray3: '#E0E0E0',
      gray4: '#999999',
      grayPrimary: '#666666',
      gray6: '#444444',
      gray7: '#333333',

      red1: '#FFA9A3',
      red2: '#FF7771',
      red3: '#FF5853',

      green1: '#7EFFCF',
      green2: '#4CD89D',
      green3: '#1AA66B',

      blue1: '#C6EAFF',
      blue2: '#7DD0FF',
      blue3: '#30B4FF',
    },

    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
    },

    fontSize: {
      tiny: '0.625rem', // 10px
      slight: '0.75rem', // 12px
      small: '0.875rem', // 14px
      modest: '1rem', // 16px
      medium: '1.25rem', // 20px
      moderate: '1.5rem', // 24px
      large: '2rem', // 32px
      giant: '3rem', // 48px
    },

    fontWeight: {
      normal: '400',
      medium: '500',
      bold: '700',
    },

    screens: {
      xs: '360px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1366px',
    },

    spacing: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '32px',
      8: '40px',
      9: '48px',
      10: '56px',
      11: '64px',
      12: '72px',
      13: '80px',
      15: '120px',
    },

    lineHeight: {
      none: 1,
      tight: '1.185',
      normal: '1.5',
    },

    minHeight: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '32px',
      8: '40px',
      9: '48px',
      10: '56px',
      11: '64px',
      12: '72px',
      13: '80px',
      15: '120px',
      screen: '100vh',
      full: '100%',
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          paddingLeft: '16px',
          paddingRight: '16px',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '360px',
          width: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
        },
      });
    },
  ],
};
