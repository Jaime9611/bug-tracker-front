import { render, screen } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('render hello world', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // ASSERT
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello world'
    );
  });
});
