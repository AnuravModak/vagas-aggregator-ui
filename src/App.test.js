import { render, screen } from '@testing-library/react';
import App from './App';

test('renders vagas aggegator header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Vagas Aggergator/i);
  expect(linkElement).toBeInTheDocument();
});