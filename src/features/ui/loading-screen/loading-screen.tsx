import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

import { screenStyles } from './loading-screen.styles';
import { LogoIcon } from '../lib';

const LoadingScreen = () => {
  const theme = useTheme();

  return (
    <Box sx={screenStyles(theme)}>
      <LogoIcon variant="secondary" />
      <Typography variant="h5" color="white">
        Bug Tracker
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
