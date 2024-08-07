import { FC } from 'react';

import { Chip } from '@mui/material';

interface StatusChipProps {
  label: string;
}

const STATUS: { [k: string]: { title: string; color: string } } = {
  DROPPED: { title: 'Dropped', color: 'error' },
  OPEN: { title: 'Open', color: 'secondary' },
  IN_PROGRESS: { title: 'In Progress', color: 'primary' },
  DONE: { title: 'Done', color: 'success' },
};

const getStatus = (status: string) => STATUS[status];

const StatusChip: FC<StatusChipProps> = ({ label }) => {
  const statusObj = getStatus(label);

  return (
    <Chip label={statusObj.title} color={statusObj.color} variant="outlined" />
  );
};

export default StatusChip;
