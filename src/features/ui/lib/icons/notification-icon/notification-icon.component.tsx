import { FC } from 'react';

import { IconButton } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

interface NotificationIconProps {
  handleClick: () => void;
}

const NotificationIcon: FC<NotificationIconProps> = ({ handleClick }) => {
  return (
    <IconButton aria-label="avatar-icon" onClick={handleClick}>
      <NotificationsNoneIcon color="primary" />
    </IconButton>
  );
};

export default NotificationIcon;
