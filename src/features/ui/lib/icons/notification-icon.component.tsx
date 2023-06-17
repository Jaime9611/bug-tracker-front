import { FC } from 'react';

import { IconButton } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

interface NotificationIconProps {
  handleClick: () => void;
}

const NotificationIcon: FC<NotificationIconProps> = ({ handleClick }) => (
  <IconButton aria-label="notification-icon" onClick={handleClick}>
    <NotificationsNoneIcon color="primary" />
  </IconButton>
);

export default NotificationIcon;
