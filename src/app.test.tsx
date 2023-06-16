import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  it('render hello world', () => {
    // ARRANGE
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // ACT
    // ASSERT
  });
});
