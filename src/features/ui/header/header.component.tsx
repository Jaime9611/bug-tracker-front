import React from 'react';

import { Navbar } from '../lib/navbar';
import { useSidebar } from '../../../contexts/sidebar.context';

import ProfileImage from '../../../assets/images/profile-1.jpg';
import {
  AddIcon,
  AvatarIcon,
  HamburgerIcon,
  HorizontalStack,
  NotificationIcon,
  SearchInput,
} from '../lib';

const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Navbar>
      <HorizontalStack>
        <HamburgerIcon handleClick={toggleSidebar} />
        <SearchInput />
      </HorizontalStack>
      <HorizontalStack>
        {/* TODO: ADD FUNCTIONALITY TO ICONS */}
        <AddIcon handleClick={() => undefined} />
        <NotificationIcon handleClick={() => undefined} />
        <AvatarIcon imgSRC={ProfileImage} handleClick={() => undefined} />
      </HorizontalStack>
    </Navbar>
  );
};

export default React.memo(Header);
