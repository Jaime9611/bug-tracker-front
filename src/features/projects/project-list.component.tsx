import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';

import { Chip, TableData } from '@features/ui/lib';
import { getNormalDate } from '@utils/formatDate';
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
  {
    field: 'startsAt',
    headerName: 'Start Date',
    flex: 1,
    valueGetter: (params: GridValueGetterParams<Project>) =>
      getNormalDate(`${params.row.startsAt}`),
  },
  {
    field: 'endsAt',
    headerName: 'End Date',
    flex: 1,
    valueGetter: (params: GridValueGetterParams<Project>) =>
      getNormalDate(`${params.row.endsAt}`),
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    renderCell: (params: GridRenderCellParams<Project>) => (
      <Chip label={`${params.row.status.title}`} />
    ),
  },
  {
    field: '',
    flex: 1,
    renderCell: () => (
      <>
        <button type="button">Edit</button>
        <button type="button">See details</button>
      </>
    ),
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
