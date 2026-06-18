import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pipeline title', () => {
  render(<App />);
  expect(screen.getByText(/CI\/CD Pipeline Demo/i)).toBeInTheDocument();
});

test('renders run button', () => {
  render(<App />);
  expect(screen.getByText(/Simulate pipeline/i)).toBeInTheDocument();
});
