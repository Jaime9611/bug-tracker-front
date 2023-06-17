import { Navbar } from '../lib/navbar';

import ProfileImage from '../../../assets/images/profile-1.jpg';
import {
  AddIcon,
  AvatarIcon,
  HamburgerIcon,
  HorizontalStack,
  NotificationIcon,
  SearchInput,
} from '../lib';

export default function Header() {
  return (
    <Navbar>
      <HorizontalStack>
        <HamburgerIcon handleClick={() => undefined} />
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
}
