import { createTheme } from '@mui/material/styles';

export const theme = (fontFamily: string) => {
  return createTheme({
    palette: {
      mode: 'light',
      primary: {
        light: '#E6E6E6',
        main: '#DFEBF6',
        dark: '#AAC7D8',
        contrastText: '#fff',
      },
      secondary: {
        light: '#768A96',
        main: '#44576D',
        dark: '#29353C',
        contrastText: '#000',
      },
    },
    typography: {
      fontFamily: fontFamily,
      htmlFontSize: 14,
      fontSize: 14,
      h6: {
        fontSize: '1rem',
      },
      body2: {
        cursor: 'pointer',
      },
    },
  });
};
