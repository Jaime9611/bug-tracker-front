import { Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Navbar } from '../lib/navbar';

export default function Header() {
  return (
    <Navbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        AppBar
      </Typography>
      <Button color="inherit">Login</Button>
    </Navbar>
  );
}
