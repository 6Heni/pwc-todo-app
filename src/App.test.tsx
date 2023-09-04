import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  it('renders the app', () => {
    render(<App />);

    const appTitle = screen.getByRole('heading');
    expect(appTitle).toHaveTextContent('ToDo App');
  });
});
