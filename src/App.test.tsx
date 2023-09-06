import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App tests', () => {
  it('renders the app', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const appTitle = screen.getByRole('heading', { level: 1 });
    expect(appTitle).toHaveTextContent('ToDo App');
  });
});
