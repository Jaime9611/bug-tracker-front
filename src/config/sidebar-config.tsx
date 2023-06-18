import { PATH_DASHBOARD } from '@routes/constants';

const ICONS = {
  dashboard: <i>Dash</i>,
  projects: <i>Proj</i>,
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
    path: PATH_DASHBOARD.projects.root,
    children: [
      { title: 'all projects', path: PATH_DASHBOARD.projects.allProjects },
      { title: 'my projects', path: PATH_DASHBOARD.projects.myProjects },
    ],
  },
];
