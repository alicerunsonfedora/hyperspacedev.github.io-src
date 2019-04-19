import {createMuiTheme} from '@material-ui/core';
import {deepPurple, red} from '@material-ui/core/colors';

export const siteTheme = createMuiTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      useNextVariants: true,
    },
    palette: {
        primary: deepPurple,
        secondary: red,
        type: window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark': 'light'
    }
  });