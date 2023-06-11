import { FC, ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: FC<PageContainerProps> = ({ children }) => (
  <div>{children}</div>
);

export default PageContainer;
