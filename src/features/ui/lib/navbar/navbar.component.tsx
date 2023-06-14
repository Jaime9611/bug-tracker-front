import { ReactNode } from 'react';

import { AppBar, Box, Toolbar } from '@mui/material';

interface NavbarProps {
  children: ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ px: 1 }}>
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </Box>
  );
}
