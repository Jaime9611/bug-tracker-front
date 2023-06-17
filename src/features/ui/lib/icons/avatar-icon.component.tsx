import { Avatar, IconButton } from '@mui/material';
import { FC } from 'react';

interface AvatarIconProps {
  handleClick: () => void;
  imgSRC: string;
}

const AvatarIcon: FC<AvatarIconProps> = ({ handleClick, imgSRC }) => (
  <IconButton aria-label="avatar-icon" onClick={handleClick}>
    <Avatar alt="Avatar" src={imgSRC} />
  </IconButton>
);

export default AvatarIcon;
