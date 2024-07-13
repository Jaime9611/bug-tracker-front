import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { TableData } from '@features/ui/lib';
import { useProjects } from './use-project.hook';
import { Project } from './project.model';
// -- Columns
// --------------------------
// TODO: REMOVE HARDCODED STATUS
const columns: GridColDef[] = [
  { field: 'title', headerName: 'Project', flex: 2 },
  {
    field: 'team',
    headerName: 'Team',
    flex: 1,
    valueGetter: (params: GridValueGetterParams<Project>) =>
      `${params.row.team.title}`,
  },
  { field: 'startsAt', headerName: 'Start Date', flex: 1 },
  { field: 'endsAt', headerName: 'End Date', flex: 1 },
  {
    field: '',
    headerName: 'Status',
    flex: 1,
    valueGetter: () => 'Working',
  },
];
const ProjectList = () => {
  const [projects, isLoading] = useProjects();

  if (projects.length <= 0 && !isLoading) {
    return <h2>No Projects</h2>;
  }

  return <TableData rows={projects} columns={columns} />;
};

export default ProjectList;
