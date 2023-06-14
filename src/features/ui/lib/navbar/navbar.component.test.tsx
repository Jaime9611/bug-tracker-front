import { render, screen } from '@testing-library/react';

import Navbar from './navbar.component';

describe('Navbar Component', () => {
  it('should return the passed children', () => {
    render(
      <Navbar>
        <h1>First child</h1>
        <h2>Second child</h2>
      </Navbar>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'First child'
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Second child'
    );
  });
});
