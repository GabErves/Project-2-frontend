import { describe, it, expect, test, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Posts from './Posts';

describe('Posts renders properly', () => {
  beforeEach(() => {
    render(<Posts />);
  });

  test('Loading State of Create Page is rendered', () => {
    const content = screen.getByText('loading');

    expect(content.innerHTML).toHaveTextContent('Loading');
  });

  test('Header of Create Page is rendered', () => {
    const content = screen.getByTestId('all posts');

    expect(content).toHaveTextContent('All Posts');
  });
});
