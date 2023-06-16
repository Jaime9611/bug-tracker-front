// -----------------------------------------------------------

const path = (root: string, subpath: string) => `${root}${subpath}`;

const ROOT_DASHBOARD = '/dashboard';
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
