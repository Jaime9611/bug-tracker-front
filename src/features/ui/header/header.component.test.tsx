import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Header component', () => {
  it('should render a the buttons and search input', () => {
    render(<Header />);

    expect(screen.getByRole('button', { name: /menu/i }));
    expect(screen.getByRole('button', { name: /add-icon/i }));
    expect(screen.getByRole('button', { name: /notification-icon/i }));
    expect(screen.getByRole('button', { name: /avatar-icon/i }));
    expect(screen.getByRole('textbox', { name: /search/i }));
  });
});
