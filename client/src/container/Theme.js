// src/theme/rosepine.js
import { createTheme } from '@mui/material/styles';

const rosePineColors = {
  base: '#191724',
  surface: '#1f1d2e',
  overlay: '#26233a',
  muted: '#6e6a86',
  subtle: '#908caa',
  text: '#e0def4',
  love: '#eb6f92',
  gold: '#f6c177',
  rose: '#ebbcba',
  pine: '#31748f',
  foam: '#9ccfd8',
  iris: '#c4a7e7',
  highlightLow: '#21202e',
  highlightMed: '#403d52',
  highlightHigh: '#524f67',
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: rosePineColors.base,
      paper: rosePineColors.surface,
    },
    primary: {
      main: rosePineColors.rose,
    },
    secondary: {
      main: rosePineColors.pine,
    },
    error: {
      main: rosePineColors.love,
    },
    warning: {
      main: rosePineColors.gold,
    },
    info: {
      main: rosePineColors.foam,
    },
    success: {
      main: rosePineColors.pine,
    },
    text: {
      primary: rosePineColors.text,
      secondary: rosePineColors.subtle,
    },
  },
  typography: {
    fontFamily: '"Fira Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Space Mono", monospace',
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
          backgroundColor: rosePineColors.surface,
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
    }
  },
});

export default theme;