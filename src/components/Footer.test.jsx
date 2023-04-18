import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Footer from './Footer';

it('Footer displays the company copyright', () => {
  render(<Footer />);

  const element = screen.queryByText('Copyright © 2023, Bulletin Social');
  expect(element).toBeTruthy();
});
