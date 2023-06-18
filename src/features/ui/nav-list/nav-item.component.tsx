import { FC, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { SidebarConfigData } from '@config/sidebar-config';
import { useSidebar } from '@contexts/sidebar.context';
import { activeRootNavItemStyle } from './nav-item.styles';

interface NavItemProps {
  item: SidebarConfigData;
}

const NavItem: FC<NavItemProps> = ({ item }) => {
  const { pathname } = useLocation();
  const { isOpen: isCollapseDrawerOpen } = useSidebar();
  const isActiveRoot = item.path
    ? !!matchPath({ path: item.path, end: false }, pathname)
    : false;

  const [open, setOpen] = useState(isActiveRoot);

  if (item.children) {
    return (
      <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: isCollapseDrawerOpen ? 'initial' : 'center',
            px: 2.5,
          }}
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: isCollapseDrawerOpen ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.title}
            sx={{ opacity: isCollapseDrawerOpen ? 1 : 0 }}
          />
          {isCollapseDrawerOpen && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>

        {isCollapseDrawerOpen && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map((subLink) => {
                const isActiveSub = subLink.path
                  ? !!matchPath({ path: subLink.path, end: false }, pathname)
                  : false;

                return (
                  <ListItemButton
                    key={`subnavitem-${subLink.title}`}
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <Box
                        component="span"
                        sx={{
                          width: 4,
                          height: 4,
                          display: 'flex',
                          borderRadius: '50%',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'text.disabled',
                          transition: (theme) =>
                            theme.transitions.create('transform'),
                          ...(isActiveSub && {
                            transform: 'scale(2)',
                            bgcolor: 'primary.main',
                          }),
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: 'gray' }}
                      primary={subLink.title}
                    />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        )}
      </ListItem>
    );
  }
  return (
    <ListItem
      key={item.title}
      disablePadding
      sx={{ display: 'block', ...(isActiveRoot && activeRootNavItemStyle) }}
    >
      <ListItemButton key={`subnavitem-${item.title}`}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>
    </ListItem>
  );
};

export default NavItem;
