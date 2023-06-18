import { render, screen } from '@testing-library/react';

import Sidebar from './sidebar.component';
import SidebarProvider, {
  useSidebar,
} from '../layouts/page-container/sidebar.context';

describe('Sidebar Component', () => {
  it('should render the Sidebar', () => {
    render(
      <SidebarProvider>
        <Sidebar />
      </SidebarProvider>
    );
  });
});
