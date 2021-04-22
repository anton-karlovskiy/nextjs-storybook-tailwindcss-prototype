// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const plugin = require('tailwindcss/plugin');

const colors = require('tailwindcss/colors');

// MEMO: inspired by https://javisperez.github.io/tailwindcolorshades
const UNIZEN_EMERALD = Object.freeze({
  50: '#f2fffa',
  100: '#e6fef6',
  200: '#bffde8',
  300: '#99fbdb',
  400: '#4df8bf',
  500: '#00F5A4',
  600: '#00dd94',
  700: '#00b87b',
  800: '#009362',
  900: '#007850'
});
const UNIZEN_VERMILION = Object.freeze({
  50: '#fff6f3',
  100: '#ffece6',
  200: '#ffd0c1',
  300: '#ffb39b',
  400: '#fe7b51',
  500: '#fe4206',
  600: '#e53b05',
  700: '#bf3205',
  800: '#982804',
  900: '#7c2003'
});
const UNIZEN_OXFORD_BLUE = '#374e5e';
const UNIZEN_REGENT_GRAY = '#82919b';
const UNIZEN_WHITE_LILAC = '#f7f7fd';
const UNIZEN_ALABASTER = '#fbfbfb';
const UNIZEN_PORCELAIN = '#edf1f3';
const UNIZEN_JAVA = Object.freeze({
  50: '#f2fbfb',
  100: '#e6f7f7',
  200: '#c0eceb',
  300: '#99e0df',
  400: '#4dc8c6',
  500: '#01b1ae',
  600: '#019f9d',
  700: '#018583',
  800: '#016a68',
  900: '#005755'
});
const UNIZEN_POLAR = '#e5f7f7';

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './parts/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: UNIZEN_JAVA[200],
          lighter: UNIZEN_JAVA[300],
          light: UNIZEN_JAVA[400],
          DEFAULT: UNIZEN_JAVA[500],
          dark: UNIZEN_JAVA[600],
          darker: UNIZEN_JAVA[700],
          darkest: UNIZEN_JAVA[800],
          contrastText: '#333333'
        },
        secondary: {
          lightest: UNIZEN_VERMILION[200],
          lighter: UNIZEN_VERMILION[300],
          light: UNIZEN_VERMILION[400],
          DEFAULT: UNIZEN_VERMILION[500],
          dark: UNIZEN_VERMILION[600],
          darker: UNIZEN_VERMILION[700],
          darkest: UNIZEN_VERMILION[800],
          contrastText: colors.white
        },
        unizenOxfordBlue: {
          DEFAULT: UNIZEN_OXFORD_BLUE
        },
        unizenRegentGray: {
          DEFAULT: UNIZEN_REGENT_GRAY
        },
        unizenWhiteLilac: {
          DEFAULT: UNIZEN_WHITE_LILAC
        },
        unizenAlabaster: {
          DEFAULT: UNIZEN_ALABASTER
        },
        unizenPorcelain: {
          DEFAULT: UNIZEN_PORCELAIN
        },
        unizenJava: {
          DEFAULT: UNIZEN_JAVA[500]
        },
        unizenEmerald: {
          DEFAULT: UNIZEN_EMERALD[500]
        },
        unizenPolar: {
          DEFAULT: UNIZEN_POLAR
        },
        unizenVermilion: {
          DEFAULT: UNIZEN_VERMILION[500]
        }
      },
      textColor: {
        textPrimary: UNIZEN_OXFORD_BLUE,
        textSecondary: UNIZEN_REGENT_GRAY
      },
      backgroundColor: theme => ({
        paper: theme('colors.white'),
        default: UNIZEN_WHITE_LILAC
      }),
      fontSize: {
        'xs-unizen': [
          '10px',
          '15px'
        ]
      },
      // MEMO: inspired by https://material-ui.com/customization/default-theme/
      zIndex: {
        unizenMobileStepper: 1000,
        unizenSpeedDial: 1050,
        unizenAppBar: 1100,
        unizenDrawer: 1200,
        unizenModal: 1300,
        unizenSnackbar: 1400,
        unizenTooltip: 1500
      }
    }
  },
  variants: {
    extend: {
      position: [
        'before',
        'after'
      ],
      inset: [
        'before',
        'after'
      ],
      width: [
        'before',
        'after'
      ],
      height: [
        'before',
        'after'
      ],
      backgroundColor: [
        'before',
        'after'
      ],
      zIndex: [
        'before',
        'after'
      ]
    }
  },
  plugins: [
    // MEMO: inspired by https://github.com/croutonn/tailwindcss-pseudo-elements
    require('tailwindcss-pseudo-elements'),
    plugin(function ({
      addUtilities,
      addBase,
      theme
    }) {
      addUtilities(
        {
          '.empty-content': {
            content: '""'
          }
        },
        [
          'before',
          'after'
        ]
      );

      // MEMO: inspired by https://tailwindcss.com/docs/adding-base-styles#using-a-plugin
      addBase({
        body: {
          color: theme('textColor.textPrimary')
        }
      });
    })
  ]
};
