// src/theme/rosepine.js
import { createTheme } from '@mui/material/styles';

const rosePineColors = {
  base: '#8c4351',
  surface: ' #8f5e15	',
   overlay: ' #8f5e15	',
  muted: ' #634f30	',
  subtle: '#24283b	',
  text: '#24283b',
  love: '#006c86',
  gold: '#0f4b6e',
  rose: '#2959aa',
  pine: '#5a3e8e',
  foam: '#343b58',
  iris: '#40434f',
  highlightLow: '#e6e7ed',
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

//  #8c4351	
//  #965027	
//  #8f5e15	
//  #634f30	
//  #385f0d	
//  #33635c	
//  #006c86	
//  #0f4b6e	
//  #2959aa	
//  #5a3e8e	
//  #343b58	
//  #40434f	
//  #343B58	
//  #6c6e75	
//  #e6e7ed