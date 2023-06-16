import { ReactNode, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { LoadingScreen } from '@features/ui/loading-screen/loading-screen';
import { PageContainer } from '@features/ui';
import { Dashboard } from '../pages';

import { PATH_DASHBOARD } from './constants';

// ----------------------------------------------------------------

const withLoading = (Component: ReactNode) => {
  return <Suspense fallback={<LoadingScreen />}>{Component}</Suspense>;
};

const AppNavigator = () => (
  <Routes>
    <Route path={PATH_DASHBOARD.root} element={<PageContainer />}>
      <Route index element={withLoading(<Dashboard />)} />
    </Route>
  </Routes>
);

export default AppNavigator;
