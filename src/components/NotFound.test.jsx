import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NotFound from './NotFound';

it('Footer displays the company copyright', () => {
  render(<NotFound />);

  const element = screen.queryByText('This page does not exist.');
  expect(element).toBeTruthy();
});
