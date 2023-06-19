import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import SidebarProvider from '@contexts/sidebar.context';
import Sidebar from './sidebar.component';

describe('Sidebar Component', () => {
  it('should render the Sidebar', () => {
    render(
      <SidebarProvider>
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      </SidebarProvider>
    );
  });
});
