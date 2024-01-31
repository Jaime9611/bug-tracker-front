import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { TableData } from '@features/ui/lib';
import { useProjects } from './use-project.hook';
import { Project } from './project.model';
// -- Columns
// --------------------------
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 150 },
  {
    field: 'team',
    headerName: 'Team',
    width: 150,
    valueGetter: (params: GridValueGetterParams<Project>) =>
      `${params.row.team.title}`,
  },
  { field: 'startsAt', headerName: 'Start Date', width: 150 },
  { field: 'endsAt', headerName: 'End Date', width: 150 },
];
const ProjectList = () => {
  const projects = useProjects();

  if (projects.length <= 0) {
    return <h2>No Projects</h2>;
  }

  return <TableData rows={projects} columns={columns} />;
};

export default ProjectList;
