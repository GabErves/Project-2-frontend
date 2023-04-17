import { describe, it, expect, test, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Delete from './Delete';
import axios from 'axios';

describe('Delete renders properly', () => {
  beforeEach(() => {
    render(<Delete />);
  });

  test('Header of Delete Page is rendered', () => {
    const content = screen.getByTestId('Delete Post');

    expect(content).toHaveTextContent('Delete Post');
  });

  test('Header of Deleted Post page is rendered', () => {
    const content = screen.getByTestId('Deleted Post');

    expect(content).toHaveTextContent('Your Post Has Been Deleted');
  });
});
