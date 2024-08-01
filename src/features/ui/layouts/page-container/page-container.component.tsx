import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Header, Sidebar } from '@features/ui';
import { useSidebar } from '@contexts/sidebar.context';

const PageContainer = () => {
  const { isOpen } = useSidebar();

  return (
    <>
      <Header />
      <Box display="flex" mt={9}>
        <Sidebar />
        <Box flex={1} px={4} pt={3}>
          <Box maxWidth={isOpen ? 1600 : '100%'}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PageContainer;
