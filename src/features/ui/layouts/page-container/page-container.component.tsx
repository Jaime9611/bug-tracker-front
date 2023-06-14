import { FC, ReactNode } from 'react';

import { Header } from '@features/ui';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: FC<PageContainerProps> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default PageContainer;
