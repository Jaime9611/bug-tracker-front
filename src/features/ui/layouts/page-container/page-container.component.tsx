import { Outlet } from 'react-router-dom';

import { Header, Sidebar } from '@features/ui';
import { Box } from '@mui/material';

const PageContainer = () => {
  return (
    <>
      <Header />
      <Box display="flex" mt={9}>
        <Sidebar />
        <Box flex={1} px={4} pt={3}>
          <Box>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PageContainer;
