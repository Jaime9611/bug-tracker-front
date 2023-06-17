import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Navbar } from '../lib/navbar';

import ProfileImage from '../../../assets/images/profile-1.jpg';
import { AvatarIcon, NotificationIcon } from '../lib';

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
      <Button color="inherit">Login</Button>
      <NotificationIcon handleClick={() => undefined} />
      <AvatarIcon imgSRC={ProfileImage} handleClick={() => undefined} />
    </Navbar>
  );
}
