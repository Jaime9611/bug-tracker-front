import { FC } from 'react';

import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HamburgerIconProps {
  handleClick: () => void;
}

const HamburgerIcon: FC<HamburgerIconProps> = ({ handleClick }) => (
  <IconButton
    size="large"
    edge="start"
    color="inherit"
    aria-label="menu"
    onClick={handleClick}
  >
    <MenuIcon color="primary" />
  </IconButton>
);

export default HamburgerIcon;
