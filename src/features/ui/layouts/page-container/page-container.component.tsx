import { Outlet } from 'react-router-dom';

import { Header } from '@features/ui';

const PageContainer = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default PageContainer;
