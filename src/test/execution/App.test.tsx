import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { App } from '../../main/execution/App.tsx';

afterEach(cleanup);

describe('App', () => {
  it('starts at zero with reset disabled', () => {
    render(<App />);

    expect(screen.getByRole('status').textContent).toBe('Count: 0');
    expect(screen.getByRole('button', { name: 'Reset' }).hasAttribute('disabled')).toBe(true);
  });

  it('increments repeatedly and resets to zero', () => {
    render(<App />);
    const increment = screen.getByRole('button', { name: 'Increment' });
    const reset = screen.getByRole('button', { name: 'Reset' });

    fireEvent.click(increment);
    fireEvent.click(increment);
    expect(screen.getByRole('status').textContent).toBe('Count: 2');
    expect(reset.hasAttribute('disabled')).toBe(false);

    fireEvent.click(reset);
    expect(screen.getByRole('status').textContent).toBe('Count: 0');
    expect(reset.hasAttribute('disabled')).toBe(true);
  });
});
