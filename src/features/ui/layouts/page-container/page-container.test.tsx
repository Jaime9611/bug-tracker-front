import { render, screen } from '@testing-library/react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';

import { PageContainer } from '..';

const TestComponent = () => (
  <>
    <h1>Test Component 1</h1>
    <h2>Test Component 2</h2>
  </>
);

describe('PageContainer', () => {
  it('should return the children passed', () => {
    render(
      <MemoryRouter initialEntries={['/test']}>
        <Routes>
          <Route path="/test" element={<PageContainer />}>
            <Route index element={<TestComponent />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Test Component 1'
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Test Component 2'
    );
  });
});
