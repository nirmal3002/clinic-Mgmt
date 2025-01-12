// src/theme/solarized.js
import { createTheme } from '@mui/material/styles';

const solarizedColors = {
  base: '#001f3f', // Deep navy blue for the background
  surface: '#011627', // Dark blue-gray for cards and surfaces
  overlay: '#22334c', // Medium blue-gray for overlays
  muted: '#33475b', // Muted blue-gray
  subtle: '#728aa1', // Subtle lighter gray-blue
  text: '#d1e3f0', // Light grayish-white for text
  love: '#e63946', // Vibrant red for errors or critical elements
  gold: '#ffb703', // Bright gold for warnings
  green: '#2a9d8f', // Sea green for success
  cyan: '#00bcd4', // Bright cyan for secondary accents
  blue: '#0077b6', // Vibrant blue for primary actions
  magenta: '#9d4edd', // Bold purple-magenta for emphasis
  violet: '#6c71c4', // Soft violet
  highlightLow: '#023e8a', // Deep vibrant blue for low highlights
  highlightMed: '#4361ee', // Medium blue for hover or active states
  highlightHigh: '#4cc9f0', // Bright cyan for high contrast highlights
  skin: '#ff9472', // Peachy tone for primary accents
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
      fontFamily: '"Space Mono", monospace',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Space Mono", monospace',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Space Mono", monospace',
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Roboto", sans-serif',
    },
    h5: {
      fontFamily: '"Roboto", sans-serif',
    },
    h6: {
      fontFamily: '"Roboto", sans-serif',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 300,
    },
    button: {
      fontFamily: '"Space Mono", monospace',
      fontWeight: 600,
      textTransform: 'none',
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
          fontWeight: 600,
          borderRadius: '8px',
          color: solarizedColors.text,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: solarizedColors.primary,
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: solarizedColors.muted,
            },
            '&:hover fieldset': {
              borderColor: solarizedColors.secondary,
            },
            '&.Mui-focused fieldset': {
              borderColor: solarizedColors.primary,
            },
          },
        },
      },
    },
  },
});

export default solarizedTheme;
