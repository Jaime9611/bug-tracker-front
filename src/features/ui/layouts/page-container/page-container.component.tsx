import { Outlet } from 'react-router-dom';

import { Header, Sidebar } from '@features/ui';
import { Box } from '@mui/material';
import SidebarProvider, { useSidebar } from './sidebar.context';

const PageContainer = () => {
  return (
    <SidebarProvider>
      <Header />
      <Box display="flex" mt={9}>
        <Sidebar />
        <Box flex={1} px={4} pt={3}>
          <Box>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </SidebarProvider>
  );
};

export default PageContainer;
