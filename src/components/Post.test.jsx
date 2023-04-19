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

  test('The loading text "Loading" appears', async () => {
    expect(screen.getByText(`Loading...`)).toBeTruthy();
  });

  test('The text "Specific Post" appears', async () => {
    await waitFor(() => {
      expect(screen.queryByText(`Specific Post`)).toBeTruthy();
    });
  });
});
