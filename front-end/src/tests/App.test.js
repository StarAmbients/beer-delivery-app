import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// References:
// https://github.com/arthurproc/exemple-deploy-trybe/tree/master/src
// by Arthur Procópio
