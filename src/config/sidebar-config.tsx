import { DashboardIcon, ProjectIcon } from '@features/ui/lib';
import { PATH_DASHBOARD, PATH_PROJECTS } from '@routes/paths';

const ICONS = {
  dashboard: <DashboardIcon />,
  projects: <ProjectIcon />,
};

export interface SidebarConfigData {
  title: string;
  icon: JSX.Element;
  path: string;
  children?: {
    title: string;
    path: string;
  }[];
}

export const sidebarConfig: SidebarConfigData[] = [
  // DASHBOARD
  // -------------------------
  {
    title: 'dashboard',
    icon: ICONS.dashboard,
    path: PATH_DASHBOARD.root,
  },
  // NOTIFICATIONS
  // -------------------------
  {
    title: 'projects',
    icon: ICONS.projects,
    path: PATH_PROJECTS.root,
    children: [
      { title: 'all projects', path: PATH_PROJECTS.allProjects },
      { title: 'my projects', path: PATH_PROJECTS.myProjects },
    ],
  },
];
