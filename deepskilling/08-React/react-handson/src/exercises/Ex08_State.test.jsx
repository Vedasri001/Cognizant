import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Ex08_State from './Ex08_State';

// Exercise 18/19: Unit testing React components in isolation (Jest/Testing-Library equivalent)
describe('Ex08_State', () => {
  it('renders initial count of 0', () => {
    render(<Ex08_State />);
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 0');
  });

  it('increments the count when the Increment button is clicked', () => {
    render(<Ex08_State />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 1');
  });

  it('decrements the count when the Decrement button is clicked', () => {
    render(<Ex08_State />);
    fireEvent.click(screen.getByText('Decrement'));
    expect(screen.getByTestId('count')).toHaveTextContent('Count: -1');
  });
});
