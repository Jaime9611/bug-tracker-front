import { ReactNode, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { LoadingScreen } from '@features/ui/loading-screen/loading-screen';
import { PageContainer } from '@features/ui';
import { Dashboard } from '../pages';

import { PATH_AUTH, PATH_DASHBOARD, PATH_PAGE } from './constants';

// ----------------------------------------------------------------

const withLoading = (Component: ReactNode) => {
  return <Suspense fallback={<LoadingScreen />}>{Component}</Suspense>;
};

const AppNavigator = () => (
  <Routes>
    <Route path="/" element={<Navigate to={PATH_AUTH.login} />} />

    <Route path={PATH_AUTH.login} element={<h1>Login</h1>} />

    <Route path={PATH_DASHBOARD.root} element={<PageContainer />}>
      <Route index element={withLoading(<Dashboard />)} />
    </Route>

    <Route path={PATH_PAGE.page404} element={<h2>404 not found</h2>} />

    <Route path="*" element={<Navigate to={PATH_PAGE.page404} replace />} />
  </Routes>
);

export default AppNavigator;
