import { describe, it, expect, test, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Post from './Post';

//data-testid="id"

describe('Post renders properly', () => {
  beforeEach(() => {
    render(<Post></Post>);
  });

  test('Header of Post Page is rendered', () => {
    const content = screen.getByTestId('specific post');

    expect(content).toHaveTextContent('Specific Post');
  });

  test('Edit Post Button is rendered', () => {
    const content = screen.getByTestId('edit post');

    expect(content).toHaveTextContent('Edit Post');
  });

  test('Delete Post Button is rendered', () => {
    const content = screen.getByTestId('delete post');

    expect(content).toHaveTextContent('Delete Post');
  });
});
