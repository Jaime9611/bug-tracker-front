import { FC } from 'react';

import { IconButton } from '@mui/material';
import AddIconMui from '@mui/icons-material/Add';

interface AddIconProps {
  handleClick: () => void;
}

const AddIcon: FC<AddIconProps> = ({ handleClick }) => (
  <IconButton aria-label="add-icon" onClick={handleClick}>
    <AddIconMui color="primary" />
  </IconButton>
);

export default AddIcon;
