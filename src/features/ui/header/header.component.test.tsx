import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Header component', () => {
  it('should render a button with Login text', () => {
    render(<Header />);

    expect(screen.getByRole('button', { name: /menu/i }));
    expect(screen.getByRole('button', { name: /login/i }));
  });
});
