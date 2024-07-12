import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

export const screenStyles: SxProps = (theme: Theme) => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  backgroundColor: theme.palette.primary.main,
  alignItems: 'center',
  justifyContent: 'center',
});
