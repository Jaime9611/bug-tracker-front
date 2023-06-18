import { ReactNode } from 'react';

import { AppBar, Box, Toolbar } from '@mui/material';

interface NavbarProps {
  children: ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          px: 1,
          backgroundColor: 'background.paper',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {children}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
