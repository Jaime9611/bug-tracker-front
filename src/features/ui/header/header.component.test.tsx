import { render } from '@testing-library/react';
import { Header } from '.';

describe('Header component', () => {
  it('should render a button with Login text', () => {
    render(<Header />);
  });
});
