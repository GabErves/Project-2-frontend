import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';

it('Create displays the correct header', () => {
  render(<Home />);

  const element = screen.queryByText('Welcome to Bulletin Social!');
  expect(element).toBeTruthy();
});
