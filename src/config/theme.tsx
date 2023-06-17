import { ThemeProvider, createTheme } from '@mui/material';
import { FC } from 'react';

interface ThemeConfigProps {
  children: JSX.Element;
}

enum ThemePallete {
  BG = '#EBEBEB',
  SURFACE = '#FFFF',
  PRIMARY_MAIN = '#F3A447',
  SECONDARY_MAIN = '#274C77',
  ERROR_MAIN = '#DF2935',
  SUCCESS_MAIN = '#04E762',
  FONT_GLOBAL = 'PoppinsRegular, sans-serif',
}

const theme = createTheme({
  palette: {
    background: { default: ThemePallete.BG, paper: ThemePallete.SURFACE },
    primary: {
      main: ThemePallete.PRIMARY_MAIN,
    },
    secondary: {
      main: ThemePallete.SECONDARY_MAIN,
    },
    error: {
      main: ThemePallete.ERROR_MAIN,
    },
    success: {
      main: ThemePallete.SUCCESS_MAIN,
    },
  },
  typography: {
    fontFamily: ThemePallete.FONT_GLOBAL,
    h1: { fontSize: '64px', fontWeight: 'bold' },
    h2: { fontSize: '56px', fontWeight: 'bold' },
    h3: { fontSize: '40px', fontWeight: 'bold' },
    h4: { fontSize: '32px', fontWeight: 'bold' },
    h5: { fontSize: '24px', fontWeight: 'bold' },
    body1: { fontSize: '16px' },
    body2: { fontSize: '14px' },
  },
});

export const ThemeConfig: FC<ThemeConfigProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
