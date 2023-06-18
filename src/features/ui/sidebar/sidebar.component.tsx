import React, { FC } from 'react';

import { CSSObject, Box, Drawer, Theme, styled } from '@mui/material';

import { useSidebar } from '@contexts/sidebar.context';
import { sidebarConfig } from '@config/sidebar-config';
import NavList from '../nav-list/nav-list.component';

const DRAWER_WIDTH = 254;

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const CustomDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

interface SidebarProps {
  isOpen?: boolean;
}

const Sidebar: FC<SidebarProps> = () => {
  const { isOpen } = useSidebar();

  return (
    <CustomDrawer variant="permanent" open={isOpen}>
      {/* TODO: ADD LIST ITEMS */}
      <Box mt={7} flex={1}>
        <NavList navConfig={sidebarConfig} />
      </Box>
    </CustomDrawer>
  );
};

export default React.memo(Sidebar);
