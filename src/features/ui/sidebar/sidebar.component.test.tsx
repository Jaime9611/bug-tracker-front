import { render } from '@testing-library/react';

import Sidebar from './sidebar.component';

describe('Sidebar Component', () => {
  it('should show the list items', () => {
    render(<Sidebar />);
  });
});
