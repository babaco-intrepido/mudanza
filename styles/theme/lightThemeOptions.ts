import { ThemeOptions } from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      light: '#4c8c4a',
      main: '#1b5e20',
      dark: '#003300',
      contrastText: '#fff',
    },
    secondary: {
      light: '#b4a647',
      main: '#827717',
      dark: '#524c00',
      contrastText: '#fff',
    },
  },
  typography: {
    h5: {
      lineHeight: 1.25,
    },
    subtitle1: {
      fontWeight: 'bold',
      lineHeight: 1.25,
    },
    subtitle2: {
      fontWeight: 'normal',
      lineHeight: 1.25,
    },
  },
};

export default lightThemeOptions;
