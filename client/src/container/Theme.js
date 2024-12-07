// src/theme/solarized.js
import { createTheme } from '@mui/material/styles';

const solarizedColors = {
  base: '#002b36',
  surface: '#073642',
  overlay: '#586e75',
  muted: '#657b83',
  subtle: '#839496',
  text: '#fdf6e3',
  love: '#dc322f',
  gold: '#b58900',
  green: '#859900',
  cyan: '#2aa198',
  blue: '#268bd2',
  magenta: '#d33682',
  violet: '#6c71c4',
  highlightLow: '#073642',
  highlightMed: '#586e75',
  highlightHigh: '#93a1a1',
  skin:'#ffc3a0',
};

const solarizedTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: solarizedColors.base,
      paper: solarizedColors.surface,
    },
    primary: {
      main: solarizedColors.skin,
    },
    secondary: {
      main: solarizedColors.cyan,
    },
    error: {
      main: solarizedColors.love,
    },
    warning: {
      main: solarizedColors.gold,
    },
    info: {
      main: solarizedColors.cyan,
    },
    success: {
      main: solarizedColors.green,
    },
    text: {
      primary: solarizedColors.text,
      secondary: solarizedColors.subtle,
    },
  },
  typography: {
    fontFamily: '"Fira Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: ' monospace',
    },
    h2: {
      fontFamily: '"Space Mono", monospace',
    },
    h3: {
      fontFamily: '"Space Mono", monospace',
    },
    h4: {
      fontFamily: '"Space Mono", monospace',
    },
    h5: {
      fontFamily: '"Space Mono", monospace',
    },
    h6: {
      fontFamily: '"Space Mono", monospace',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: solarizedColors.surface,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;700&family=Space+Mono:wght@400;700&display=swap');
      `,
    },
  },
});

export default solarizedTheme;
