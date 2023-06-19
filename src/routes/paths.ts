// -----------------------------------------------------------

const path = (root: string, subpath: string) => `${root}${subpath}`;

const ROOT_DASHBOARD = '/dashboard';
const ROOT_PROJECTS = '/projects';
const ROOT_AUTH = '/auth';

// -----------------------------------------------------------

export const PATH_AUTH = {
  root: ROOT_AUTH,
  login: path(ROOT_AUTH, '/login'),
  register: path(ROOT_AUTH, '/register'),
};

export const PATH_PAGE = {
  page404: '/404',
  page500: '/500',
  comingSoon: '/comming-soon',
  maintenance: '/maintenance',
};

export const PATH_DASHBOARD = {
  root: ROOT_DASHBOARD,
};

export const PATH_PROJECTS = {
  root: ROOT_PROJECTS,
  allProjects: path(ROOT_PROJECTS, '/all-projects'),
  myProjects: path(ROOT_PROJECTS, '/my-projects'),
};
