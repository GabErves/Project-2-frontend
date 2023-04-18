import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './Post';

describe('Post Component renders correctly', () => {
  beforeEach(() => {
    render(
      <Router>
        <Post />
      </Router>
    );
  });

  test('The text "Specific" appears', async () => {
    await waitFor(() => {
      expect(screen.queryAllByText(`Specific Post`));
    });
  });
});
