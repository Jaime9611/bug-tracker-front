import { render, screen } from '@testing-library/react';
import { PageContainer } from '..';

describe('PageContainer', () => {
  it('should return the children passed', () => {
    render(
      <PageContainer>
        <h1>Test Component 1</h1>
        <h2>Test Component 2</h2>
      </PageContainer>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Test Component 1'
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Test Component 2'
    );
  });
});
