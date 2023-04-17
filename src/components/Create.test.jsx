import { describe, it, expect, test, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Create from './Create';
import axios from 'axios';

describe('Create renders properly', () => {
  beforeEach(() => {
    render(<Create></Create>);
  });

  test('Header of Create Page is rendered', () => {
    const content = screen.getByTestId('create post');

    expect(content).toHaveTextContent('Create Post');
  });

  test('Title textbox header is rendered correctly', () => {
    const content = screen.getByTestId('Title');

    expect(content).toHaveTextContent('Title');
  });

  test('Content textbox header is rendered correctly', () => {
    const content = screen.getByTestId('Content');

    expect(content).toHaveTextContent('Content');
  });
});

describe('Create makes proper API calls', () => {
  beforeEach(() => {
    render(<Create></Create>);
  });

  it('Submits a post request with the entered data', async () => {
    const titleTextBox = screen.getByTestId('titleInput');
    const contentTextBox = screen.getByTestId('contentInput');

    fireEvent.change(titleTextBox, { target: { value: 'Test Title' } });
    fireEvent.change(contentTextBox, { target: { value: 'Test Content' } });

    axios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: { id: 1 } })
    );

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:3001/v1/api/posts',
        {
          title: 'Test Title',
          content: 'Test Content',
        }
      );
    });
  });
});
