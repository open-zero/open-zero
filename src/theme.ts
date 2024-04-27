'use client';
import { Inter } from 'next/font/google';
import { alpha, createTheme } from '@mui/material';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#e6e9ef',
      default: '#eff1f5',
    },
    text: {
      primary: '#4c4f69',
      secondary: '#5c5f77',
      disabled: '#6c6f85',
    },
    divider: alpha('#4c4f69', 0.18),
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontWeight: 'bold',
      fontSize: 32,
    },
    h2: {
      fontWeight: 'bold',
      fontSize: 22,
    },
    body1: {
      fontSize: 16,
    },
    button: {
      textTransform: 'none',
      fontSize: 16,
      fontWeight: 'bold',
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});
