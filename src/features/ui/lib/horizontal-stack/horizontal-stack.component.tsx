import { FC, ReactNode } from 'react';

import { Stack } from '@mui/material';

interface HorizontalStackProps {
  children: ReactNode;
}
const HorizontalStack: FC<HorizontalStackProps> = ({ children }) => (
  <Stack spacing={1} direction="row" alignItems="center">
    {children}
  </Stack>
);

export default HorizontalStack;
