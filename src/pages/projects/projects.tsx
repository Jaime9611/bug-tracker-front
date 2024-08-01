import { Paper } from '@mui/material';

import { ProjectList } from '@features/projects';

const Projects = () => {
  return (
    <Paper
      sx={{
        p: 4,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ProjectList />
    </Paper>
  );
};

export default Projects;
