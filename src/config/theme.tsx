import { ThemeProvider, createTheme } from '@mui/material';
import { FC } from 'react';

interface ThemeConfigProps {
  children: JSX.Element;
}

enum ThemePallete {
  BG = '#EBEBEB',
  SURFACE = '#FFFF',
  PRIMARY_MAIN = '#F3A447',
  FONT_GLOBAL = 'PoppinsRegular, sans-serif',
}

const theme = createTheme({
  palette: {
    background: { default: ThemePallete.BG, paper: ThemePallete.SURFACE },
    primary: {
      main: ThemePallete.PRIMARY_MAIN,
    },
  },
  typography: {
    fontFamily: ThemePallete.FONT_GLOBAL,
  },
});

export const ThemeConfig: FC<ThemeConfigProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
