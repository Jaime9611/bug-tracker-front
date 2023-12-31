import { ReactNode, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { LoadingScreen } from '@features/ui/loading-screen/loading-screen';
import { PageContainer } from '@features/ui';
import { Dashboard } from '../pages';

import { PATH_AUTH, PATH_DASHBOARD, PATH_PAGE, PATH_PROJECTS } from './paths';

// ----------------------------------------------------------------

const withLoading = (Component: ReactNode) => {
  return <Suspense fallback={<LoadingScreen />}>{Component}</Suspense>;
};

const AppNavigator = () => (
  <Routes>
    {/* AUTHENTICATION */}
    <Route path={PATH_AUTH.login} element={<h1>Login</h1>} />

    <Route path="/" element={<PageContainer />}>
      {/* DASHBOARD */}
      <Route path={PATH_DASHBOARD.root} element={withLoading(<Dashboard />)} />
      {/* PROJECTS */}
      <Route path={PATH_PROJECTS.root}>
        <Route index element={<Navigate to={PATH_PROJECTS.allProjects} />} />
        <Route
          path={PATH_PROJECTS.allProjects}
          element={<div>All Projects</div>}
        />
        <Route
          path={PATH_PROJECTS.myProjects}
          element={<div>My Projects</div>}
        />
      </Route>
    </Route>

    {/* ERROR */}
    <Route path={PATH_PAGE.page404} element={<h2>404 not found</h2>} />

    <Route path="*" element={<Navigate to={PATH_PAGE.page404} replace />} />
  </Routes>
);

export default AppNavigator;
