import { FC } from 'react';

import { List } from '@mui/material';
import { SidebarConfigData } from '@config/sidebar-config';
import NavItem from './nav-item.component';

interface NavListProps {
  navConfig: SidebarConfigData[];
}

const NavList: FC<NavListProps> = ({ navConfig }) => {
  return (
    <List>
      {navConfig.map((item) => (
        <NavItem key={`navitem-${item.title}`} item={item} />
      ))}
    </List>
  );
};

export default NavList;
